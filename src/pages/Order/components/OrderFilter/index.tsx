export type OrderFilterValue = "all" | "pending" | "preparing" | "completed";

export interface OrderFilterOption {
  id: OrderFilterValue;
  label: string;
}

const DEFAULT_OPTIONS: OrderFilterOption[] = [
  { id: "all", label: "Tất cả" },
  { id: "pending", label: "Chờ xử lý" },
  { id: "preparing", label: "Đang pha" },
  { id: "completed", label: "Hoàn thành" },
];

export interface OrderFilterProps {
  value?: OrderFilterValue;
  onChange?: (value: OrderFilterValue) => void;
  options?: OrderFilterOption[];
}

const chipBase =
  "group flex h-9 shrink-0 items-center justify-center gap-x-2 rounded-full pl-5 pr-5 transition-all";
const chipActive = "bg-primary shadow-md shadow-primary/20";
const chipInactive =
  "bg-white dark:bg-card-dark border border-gray-100 dark:border-white/5 hover:border-primary/50";

export const OrderFilter: React.FC<OrderFilterProps> = ({
  value = "all",
  onChange,
  options = DEFAULT_OPTIONS,
}) => {
  return (
    <div className="flex gap-3 px-4 py-2 overflow-x-auto no-scrollbar w-full sticky top-[120px] z-10 bg-background-light dark:bg-background-dark pb-4">
      {options.map((opt) => (
        <button
          key={opt.id}
          type="button"
          className={`${chipBase} ${
            value === opt.id ? chipActive : chipInactive
          }`}
          onClick={() => onChange?.(opt.id)}
        >
          <p
            className={
              value === opt.id
                ? "text-white text-sm font-semibold leading-normal"
                : "text-text-sub dark:text-white/70 group-hover:text-primary text-sm font-medium leading-normal"
            }
          >
            {opt.label}
          </p>
        </button>
      ))}
    </div>
  );
};
