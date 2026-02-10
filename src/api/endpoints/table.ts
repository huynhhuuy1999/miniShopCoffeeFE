import type { ICreateTableRequest, ITableResponse } from "@/models";
import { apiClient } from "../client";

export const tableApi = {
  getList: (params?: { page?: number; limit?: number; search?: string }) =>
    apiClient.get<ITableResponse[]>("/table", { params }),
  createTable: (data: ICreateTableRequest) =>
    apiClient.post<ITableResponse>("/table/create", data),
  searchTable: (status?: string) =>
    apiClient.get<ITableResponse[]>("/table/search", { params: { status } }),
};
