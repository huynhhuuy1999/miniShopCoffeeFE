export interface SearchBarProps {
  value?: string;
  onChange?: (value: string) => void;
  placeholder?: string;
}

export const SearchBar: React.FC<SearchBarProps> = ({
  value = "",
  onChange,
  placeholder = "Tìm kiếm mã đơn, tên khách...",
}) => {
  return (
    <div className="px-4 py-3 w-full z-20 bg-background-light dark:bg-background-dark">
      <div className="relative w-full">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <span className="material-symbols-outlined text-text-sub text-[20px]">
            search
          </span>
        </div>
        <input
          className="block w-full p-3 pl-10 text-sm  bg-white
          text-blackCustom dark:text-white dark:bg-transparent
          rounded-xl border-none shadow-sm ring-1 ring-gray-100 dark:ring-white/5 
          focus:ring-2 focus:ring-primary focus:outline-none placeholder:text-text-sub 
          dark:placeholder:text-white/40"
          placeholder={placeholder}
          type="text"
          value={value}
          onChange={(e) => onChange?.(e.target.value)}
        />
      </div>
    </div>
  );
};
