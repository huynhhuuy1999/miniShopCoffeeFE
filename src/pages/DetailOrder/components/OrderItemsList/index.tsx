import type { ReactNode } from "react";

export interface OrderItemsListProps {
  title: string;
  count: number;
  children: ReactNode;
}

export const OrderItemsList: React.FC<OrderItemsListProps> = ({
  title,
  count,
  children,
}) => {
  return (
    <div className="px-4 mt-4">
      <h3 className="text-[#181311] dark:text-white text-base font-bold leading-tight px-1 mb-3">
        {title} ({count})
      </h3>
      <div className="flex flex-col gap-3">{children}</div>
    </div>
  );
};
