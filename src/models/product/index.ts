export interface IProduct {
  id: string;
  name: string;
  price?: number;
  imageUrl?: string;
  [key: string]: unknown;
}
