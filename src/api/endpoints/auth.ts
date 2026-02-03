import type { LoginRequest, LoginResponse, IUser } from "@/models";
import { apiClient } from "../client";

export const authApi = {
  login: (data: LoginRequest) =>
    apiClient.post<LoginResponse>("/auth/login", data),

  logout: () => apiClient.post("/auth/logout"),

  getProfile: () => apiClient.get<IUser>("/auth/profile"),

  refreshToken: (refreshToken: string) =>
    apiClient.post<{ access_token: string }>("/auth/refresh", {
      refresh_token: refreshToken,
    }),
};
