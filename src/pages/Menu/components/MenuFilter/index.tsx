export interface MenuFilterOption {
  id: string;
  label: string;
}

const DEFAULT_OPTIONS: MenuFilterOption[] = [
  { id: "all", label: "Tất cả" },
  { id: "coffee", label: "Cà phê" },
  { id: "tea", label: "Trà" },
  { id: "cake", label: "Bánh ngọt" },
  { id: "smoothie", label: "Smoothie" },
];

export interface MenuFilterProps {
  value?: string;
  onChange?: (id: string) => void;
  options?: MenuFilterOption[];
}

const chipBase =
  "flex h-9 shrink-0 items-center justify-center px-4 rounded-full transition-all active:scale-95";
const chipActive =
  "bg-primary text-white shadow-sm shadow-primary/30";
const chipInactive =
  "bg-[#f4f1f0] dark:bg-white/5 text-text-main dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-white/10";

export const MenuFilter: React.FC<MenuFilterProps> = ({
  value = "all",
  onChange,
  options = DEFAULT_OPTIONS,
}) => {
  return (
    <div className="flex gap-2 px-4 py-3 overflow-x-auto no-scrollbar mask-linear-fade">
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
                ? "text-sm font-bold leading-normal"
                : "text-sm font-medium leading-normal"
            }
          >
            {opt.label}
          </p>
        </button>
      ))}
    </div>
  );
};
