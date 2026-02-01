export interface InputProps {
  type: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  icon?: React.ReactNode;
}

export const InputCustom: React.FC<InputProps> = ({
  type,
  placeholder,
  value,
  onChange,
  icon,
}) => {
  return (
    <div className="group flex w-full items-stretch rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 focus-within:border-primary focus-within:ring-1 focus-within:ring-primary transition-all duration-200 shadow-sm">
      <input
        className="flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-l-xl bg-transparent text-gray-900 dark:text-white h-14 placeholder:text-gray-400 dark:placeholder:text-gray-500 p-4 border-none outline-none focus:outline-none focus:ring-0 text-base font-normal leading-normal"
        placeholder={placeholder}
        type={type}
        value={value}
        onChange={onChange}
      />
      <div className="text-gray-400 dark:text-gray-500 flex items-center justify-center px-4 shrink-0">
        {icon}
      </div>
    </div>
  );
};
