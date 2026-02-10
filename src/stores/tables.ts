import { tableApi } from "@/api";
import type { ICreateTableRequest, ITableResponse } from "@/models";
import { create } from "zustand";
import { devtools } from "zustand/middleware";

interface TableState {
  loading: boolean;
  listTable: ITableResponse[] | null;
  error: string | null;
  getListTable: () => Promise<void>;
  createTable: (dataReq: ICreateTableRequest) => Promise<void>;
  searchTable?: (status?: string) => Promise<void>;
}

export const useTableStore = create<TableState>()(
  devtools((set) => ({
    listTable: [],
    loading: false,

    getListTable: async () => {
      set({ loading: true, error: null });
      try {
        const { data } = await tableApi.getList();
        console.log("data", data);
        set({ listTable: data, loading: false });
      } catch (err: unknown) {
        let message = "Lỗi khi lấy danh sách bàn";
        if (err && typeof err === "object" && "response" in err) {
          const res = (
            err as {
              response?: { data?: { message?: string }; status?: number };
            }
          ).response;
          message =
            res?.data?.message ??
            (res?.status === 401 ? "Sai tên đăng nhập hoặc mật khẩu" : message);
        }
        set({ loading: false, error: message });
      }
    },
    createTable: async (dataReq: ICreateTableRequest) => {
      set({ loading: true, error: null });
      try {
        const { data } = await tableApi.createTable(dataReq);
        console.log("data", data);
        set({ loading: false });
      } catch (err: unknown) {
        set({ loading: false, error: "Lỗi khi tạo bàn" });
      }
    },
    searchTable: async (status?: string) => {
      set({ loading: true, error: null });
      try {
        const { data } = await tableApi.searchTable(status);
        set({ listTable: data, loading: false });
      } catch (err: unknown) {
        set({ loading: false, error: "Lỗi khi tìm kiếm bàn" });
      }
    },
  })),
);
