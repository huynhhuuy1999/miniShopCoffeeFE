export interface ICardSumOrder {
  name: string;
  value: number;
  onClick?: () => void;
  valueChange?: number;
  status?: number;
}

export interface ICardOrderItem {
  typeOrder: number;
  name: string;
  orderId: string;
  numberOfItem: number;
  orderValue: number;
  statusOrder: number;
}

export interface ICardProductBest {
  name: string;
  image?: string;
  number?: number;
}

export interface TableCardProps {
  name: string;
  occupied: boolean;
  duration?: string;
  onMore?: () => void;
  onClick?: () => void;
}
