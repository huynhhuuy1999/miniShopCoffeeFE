import axios from "axios";
import { create } from "zustand";
import { devtools } from "zustand/middleware";

interface UserState {
  users: any[];
  loading: boolean;
  error: string | null;
  fetchUsers: () => Promise<void>;
}

export const useUser = create(
  devtools<UserState>((set) => ({
    users: [],
    loading: false,
    error: null,

    fetchUsers: async () => {
      set({ loading: true, error: null }); // bắt đầu loading
      axios
        .get("http://localhost:3000/api/products")
        .then((res) => {
          set({ users: res.data, loading: false }); // thành công
        })
        .catch((err) => {
          set({ error: err.message, loading: false }); // lỗi
        });
    },
  }))
);
