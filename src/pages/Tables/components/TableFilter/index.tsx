import { TABLE_STATUS } from "@/constants";

export interface TableFilterOption {
  value: string;
  label: string;
}

const DEFAULT_OPTIONS: TableFilterOption[] = [
  { value: "all", label: "Tất cả" },
  { value: TABLE_STATUS.AVAILABLE, label: "Trống" },
  { value: TABLE_STATUS.OCCUPIED, label: "Có khách" },
];

export interface TableFilterProps {
  value: string;
  onChange?: (value: string) => void;
  options?: TableFilterOption[];
}

export const TableFilter: React.FC<TableFilterProps> = ({
  value = undefined,
  onChange,
  options = DEFAULT_OPTIONS,
}) => {
  return (
    <div className="px-4 py-4 w-full max-w-md fixed top-16 z-20 bg-background-light/95 dark:bg-background-dark/95 backdrop-blur-sm">
      <div className="flex p-1 bg-gray-200/60 dark:bg-white/5 rounded-xl">
        {options.map((opt) => (
          <label
            key={opt.value}
            className="flex-1 relative cursor-pointer group"
          >
            <input
              checked={value === opt.value}
              className="peer sr-only"
              name="filter"
              type="radio"
              value={opt.value}
              onChange={() => onChange?.(opt.value)}
            />
            <div className="flex items-center justify-center py-2.5 text-sm font-semibold rounded-lg transition-all duration-200 text-text-muted dark:text-gray-400 peer-checked:bg-white dark:peer-checked:bg-surface-dark peer-checked:text-primary dark:peer-checked:text-primary peer-checked:shadow-sm">
              {opt.label}
            </div>
          </label>
        ))}
      </div>
    </div>
  );
};
