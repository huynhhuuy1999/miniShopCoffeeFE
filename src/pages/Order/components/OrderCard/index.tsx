export type OrderStatus = "pending" | "preparing" | "completed" | "cancelled";

const STATUS_CONFIG: Record<
  OrderStatus,
  {
    label: string;
    icon: string;
    iconBg: string;
    badge: string;
  }
> = {
  pending: {
    label: "Chờ xác nhận",
    icon: "receipt_long",
    iconBg:
      "bg-orange-100 text-orange-600 dark:bg-orange-500/20 dark:text-orange-400",
    badge:
      "bg-orange-50 text-orange-700 ring-1 ring-inset ring-orange-600/20 dark:bg-orange-900/30 dark:text-orange-300",
  },
  preparing: {
    label: "Đang pha",
    icon: "coffee_maker",
    iconBg: "bg-blue-100 text-blue-600 dark:bg-blue-500/20 dark:text-blue-400",
    badge:
      "bg-blue-50 text-blue-700 ring-1 ring-inset ring-blue-700/10 dark:bg-blue-900/30 dark:text-blue-300",
  },
  completed: {
    label: "Hoàn thành",
    icon: "check_circle",
    iconBg:
      "bg-green-100 text-green-600 dark:bg-green-500/20 dark:text-green-400",
    badge:
      "bg-green-50 text-green-700 ring-1 ring-inset ring-green-600/20 dark:bg-green-900/30 dark:text-green-300",
  },
  cancelled: {
    label: "Đã hủy",
    icon: "cancel",
    iconBg: "bg-gray-100 text-gray-600 dark:bg-gray-700 dark:text-gray-400",
    badge:
      "bg-gray-50 text-gray-600 ring-1 ring-inset ring-gray-500/10 dark:bg-gray-800 dark:text-gray-400",
  },
};

export interface OrderCardProps {
  orderId: string;
  timeLabel: string;
  status: OrderStatus;
  items: string[];
  customerName: string;
  total: string;
  onClick?: () => void;
}

export const OrderCard: React.FC<OrderCardProps> = ({
  orderId,
  timeLabel,
  status,
  items,
  customerName,
  total,
  onClick,
}) => {
  const config = STATUS_CONFIG[status];
  const isCancelled = status === "cancelled";

  return (
    <div
      role="button"
      tabIndex={0}
      className={`flex flex-col bg-white dark:bg-card-dark rounded-xl p-4 shadow-sm border border-gray-100 dark:border-white/5 active:scale-[0.98] transition-transform duration-100 cursor-pointer ${
        isCancelled
          ? "opacity-75 grayscale-[0.8]"
          : status === "completed"
            ? "opacity-90"
            : ""
      }`}
      onClick={onClick}
      onKeyDown={(e) => e.key === "Enter" && onClick?.()}
    >
      <div className="flex justify-between items-start mb-3 border-b border-gray-50 dark:border-white/5 pb-3">
        <div className="flex items-center gap-2">
          <span className={`${config.iconBg} p-1.5 rounded-lg`}>
            <span className="material-symbols-outlined text-[18px]">
              {config.icon}
            </span>
          </span>
          <div>
            <h3
              className={`text-blackCustom dark:text-white text-base font-bold ${
                isCancelled ? "line-through decoration-slate-400" : ""
              }`}
            >
              #{orderId}
            </h3>
            <p className="text-text-sub text-xs">{timeLabel}</p>
          </div>
        </div>
        <span
          className={`inline-flex items-center rounded-md px-2 py-1 text-xs font-medium ring-1 ring-inset ${config.badge}`}
        >
          {config.label}
        </span>
      </div>
      <div className="space-y-1 mb-3">
        {items.map((item, i) => (
          <div key={i} className="flex justify-between items-center text-sm">
            <span className="text-blackCustom dark:text-gray-200">{item}</span>
          </div>
        ))}
      </div>
      <div className="flex justify-between items-center pt-1">
        <div className="flex items-center gap-1 text-text-sub text-xs">
          <span className="material-symbols-outlined text-[14px]">person</span>
          <span>{customerName}</span>
        </div>
        <span
          className={`text-lg font-bold ${
            status === "pending"
              ? "text-primary"
              : "text-blackCustom dark:text-white"
          }`}
        >
          {total}
        </span>
      </div>
    </div>
  );
};
