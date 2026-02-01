export const Revenue = () => {
  return (
    <div className="col-span-2 flex flex-col gap-1 rounded-xl p-5 bg-card-light dark:bg-card-dark shadow-sm border border-gray-100 dark:border-gray-800">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="p-1.5 rounded-md bg-primary/10">
            <span className="material-symbols-outlined text-primary text-[20px]">
              payments
            </span>
          </div>
          <p className="text-gray-600 dark:text-gray-400 text-sm font-medium">
            Doanh thu
          </p>
        </div>
        <span className="flex items-center text-[#07880b] text-xs font-bold bg-[#07880b]/10 px-2 py-0.5 rounded-full">
          <span className="material-symbols-outlined text-[14px] mr-0.5">
            trending_up
          </span>
          +12%
        </span>
      </div>
      <p className="text-3xl font-bold tracking-tight mt-2">2,500,000đ</p>
      <p className="text-xs text-gray-400">So với hôm qua</p>
    </div>
  );
};
