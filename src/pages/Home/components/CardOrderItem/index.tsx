import type { ICardOrderItem } from "@/models";

export const CardOrderItem: React.FC<ICardOrderItem> = ({
  orderValue,
  numberOfItem,
  name,
  orderId,
  statusOrder,
  typeOrder,
}) => {
  return (
    <div className="flex items-center justify-between p-3 rounded-xl bg-card-light dark:bg-card-dark border border-gray-100 dark:border-gray-800">
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400">
          <span className="material-symbols-outlined text-[20px]">
            table_restaurant
          </span>
        </div>
        <div className="flex flex-col">
          <p className="text-sm font-bold text-blackCustom dark:text-white">
            {name}
          </p>
          <p className="text-xs text-gray-500 dark:text-gray-400">
            #{orderId} • {numberOfItem} món
          </p>
        </div>
      </div>
      <div className="flex flex-col items-end">
        <p className="text-sm font-bold">{orderValue}đ</p>
        <span className="inline-flex items-center rounded-full bg-green-50 dark:bg-green-900/20 px-2 py-0.5 text-[10px] font-medium text-green-700 dark:text-green-400">
          Hoàn thành
        </span>
      </div>
    </div>
  );
};
