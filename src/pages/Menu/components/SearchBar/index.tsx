export interface SearchBarProps {
  value?: string;
  onChange?: (value: string) => void;
  placeholder?: string;
}

export const SearchBar: React.FC<SearchBarProps> = ({
  value = "",
  onChange,
  placeholder = "Tìm món ăn, đồ uống...",
}) => {
  return (
    <div className="px-4 py-2">
      <label className="flex flex-col w-full">
        <div className="flex w-full items-center rounded-xl h-11 bg-[#f4f1f0] dark:bg-white/5 transition-colors group focus-within:ring-2 focus-within:ring-primary/50">
          <div className="text-text-secondary flex items-center justify-center pl-4 pr-2">
            <span
              className="material-symbols-outlined"
              style={{ fontSize: 20 }}
            >
              search
            </span>
          </div>
          <input
            className="w-full bg-transparent border-none text-text-main dark:text-white placeholder:text-text-secondary focus:ring-0 h-full text-base font-normal leading-normal px-2 outline-none"
            placeholder={placeholder}
            value={value}
            onChange={(e) => onChange?.(e.target.value)}
          />
        </div>
      </label>
    </div>
  );
};
