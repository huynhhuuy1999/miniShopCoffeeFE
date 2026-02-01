export type FilterValue = "all" | "empty" | "occupied";

export interface TableFilterOption {
  value: FilterValue;
  label: string;
}

const DEFAULT_OPTIONS: TableFilterOption[] = [
  { value: "all", label: "Tất cả (15)" },
  { value: "empty", label: "Trống (8)" },
  { value: "occupied", label: "Có khách (7)" },
];

export interface TableFilterProps {
  value?: FilterValue;
  onChange?: (value: FilterValue) => void;
  options?: TableFilterOption[];
}

export const TableFilter: React.FC<TableFilterProps> = ({
  value = "all",
  onChange,
  options = DEFAULT_OPTIONS,
}) => {
  return (
    <div className="px-4 py-4 sticky top-[64px] z-20 bg-background-light/95 dark:bg-background-dark/95 backdrop-blur-sm">
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
