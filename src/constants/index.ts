export const API_BASE_URL =
  import.meta.env.BASE_URL_API ?? "http://localhost:3000";

export const STORAGE_KEYS = {
  ACCESS_TOKEN: "access_token",
  REFRESH_TOKEN: "refresh_token",
  USER: "user",
} as const;

export const TYPE_SELL = {
  BRING_BACK: 1,
  AT_SHOP: 2,
};

export const TYPE_USER = {
  ADMIN: 1,
  STAFF: 2,
};

export const ROLE = {
  STAFF: "staff",
  ADMIN: "admin",
};

export const TABLE_STATUS = {
  AVAILABLE: "available",
  OCCUPIED: "occupied",
};

export const ORDER_STATUS = {
  PENDING: "pending",
  SERVING: "serving",
  COMPLETED: "completed",
  CANCELLED: "cancelled",
};

export const TYPE_ORDER = {
  BRING_BACK: "BringBack",
  AT_SHOP: "AtShop",
};
