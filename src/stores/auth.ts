import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { authApi } from "@/api";
import { STORAGE_KEYS } from "@/constants";
import type { LoginRequest } from "@/models";

export interface AuthUser {
  id: string;
  username?: string;
  role?: string;
  fullname?: string;
  createdAt?: string;
  updatedAt?: string;
}

interface AuthState {
  token: string | null;
  user: AuthUser | null;
  isAuthenticated: boolean;
  loading: boolean;
  error: string | null;
  login: (credentials: LoginRequest) => Promise<void>;
  logout: () => void;
  setError: (error: string | null) => void;
  hydrate: () => void;
}

const getStoredToken = (): string | null =>
  localStorage.getItem(STORAGE_KEYS.ACCESS_TOKEN);

const getStoredUser = (): AuthUser | null => {
  try {
    const raw = localStorage.getItem(STORAGE_KEYS.USER);
    return raw ? (JSON.parse(raw) as AuthUser) : null;
  } catch {
    return null;
  }
};

const setStoredAuth = (token: string, user?: AuthUser | null) => {
  localStorage.setItem(STORAGE_KEYS.ACCESS_TOKEN, token);
  if (user) {
    localStorage.setItem(STORAGE_KEYS.USER, JSON.stringify(user));
  }
};

const clearStoredAuth = () => {
  localStorage.removeItem(STORAGE_KEYS.ACCESS_TOKEN);
  localStorage.removeItem(STORAGE_KEYS.REFRESH_TOKEN);
  localStorage.removeItem(STORAGE_KEYS.USER);
};

export const useAuthStore = create<AuthState>()(
  devtools(
    (set) => ({
      token: null,
      user: null,
      isAuthenticated: false,
      loading: false,
      error: null,

      login: async (credentials: LoginRequest) => {
        set({ loading: true, error: null });
        try {
          const { data } = await authApi.login(credentials);
          console.log("data", data);
          const token = data.token;
          console.log("token", token);
          const user: AuthUser | null = data.user
            ? {
                id: data.user.id,
                username: data.user.username,
                fullname: data.user.fullname,
                role: data.user.role,
              }
            : null;
          console.log("user", user);
          if (data.refresh_token) {
            localStorage.setItem(
              STORAGE_KEYS.REFRESH_TOKEN,
              data.refresh_token
            );
          }

          setStoredAuth(token, user);
          set({
            token,
            user,
            isAuthenticated: true,
            loading: false,
            error: null,
          });
        } catch (err: unknown) {
          let message = "Đăng nhập thất bại";
          if (err && typeof err === "object" && "response" in err) {
            const res = (
              err as {
                response?: { data?: { message?: string }; status?: number };
              }
            ).response;
            message =
              res?.data?.message ??
              (res?.status === 401
                ? "Sai tên đăng nhập hoặc mật khẩu"
                : message);
          }
          set({ loading: false, error: message });
          throw err;
        }
      },

      logout: () => {
        clearStoredAuth();
        set({
          token: null,
          user: null,
          isAuthenticated: false,
          error: null,
        });
      },

      setError: (error) => set({ error }),

      hydrate: () => {
        const token = getStoredToken();
        const user = getStoredUser();
        set({
          token,
          user,
          isAuthenticated: !!token,
        });
      },
    }),
    { name: "auth" }
  )
);
