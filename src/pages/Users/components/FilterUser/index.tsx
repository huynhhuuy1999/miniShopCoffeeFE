export const FilterUser = () => {
  return (
    <div className="flex gap-3 px-4 pb-4 overflow-x-auto no-scrollbar">
      <div className="flex h-9 shrink-0 items-center justify-center gap-x-2 rounded-full bg-primary px-5 shadow-md shadow-primary/20">
        <p className="text-white text-sm font-semibold leading-normal font-display">
          Tất cả
        </p>
      </div>
      <div className="flex h-9 shrink-0 items-center justify-center gap-x-2 rounded-full bg-white dark:bg-[#332520] border border-gray-100 dark:border-gray-800 px-5">
        <p className="text-gray-600 dark:text-gray-300 text-sm font-medium leading-normal font-display">
          Quản trị viên
        </p>
      </div>
      <div className="flex h-9 shrink-0 items-center justify-center gap-x-2 rounded-full bg-white dark:bg-[#332520] border border-gray-100 dark:border-gray-800 px-5">
        <p className="text-gray-600 dark:text-gray-300 text-sm font-medium leading-normal font-display">
          Nhân viên
        </p>
      </div>
    </div>
  );
};
