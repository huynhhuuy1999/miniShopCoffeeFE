import type { IProduct } from "@/models";
import { apiClient } from "../client";

export const productsApi = {
  getList: (params?: { page?: number; limit?: number; search?: string }) =>
    apiClient.get<IProduct[]>("/products", { params }),

  getById: (id: string) => apiClient.get<IProduct>(`/products/${id}`),

  create: (data: Omit<IProduct, "id">) =>
    apiClient.post<IProduct>("/products/create", data),

  update: (data: Partial<IProduct>) =>
    apiClient.post<IProduct>(`/products/update`, data),

  delete: (id: string) => apiClient.post(`/products/delete`, id),
};
