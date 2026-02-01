export const TimeFilter = () => {
  return (
    <div className="flex gap-3 px-4 pb-2 overflow-x-auto no-scrollbar">
      <button className="flex h-9 shrink-0 items-center justify-center rounded-full bg-primary px-5 shadow-sm shadow-primary/30 transition-transform active:scale-95">
        <p className="text-white text-sm font-semibold">Hôm nay</p>
      </button>
      <button className="flex h-9 shrink-0 items-center justify-center rounded-full bg-white dark:bg-card-dark border border-gray-100 dark:border-gray-800 px-5 transition-transform active:scale-95">
        <p className="text-gray-600 dark:text-gray-300 text-sm font-medium">
          Tuần này
        </p>
      </button>
      <button className="flex h-9 shrink-0 items-center justify-center rounded-full bg-white dark:bg-card-dark border border-gray-100 dark:border-gray-800 px-5 transition-transform active:scale-95">
        <p className="text-gray-600 dark:text-gray-300 text-sm font-medium">
          Tháng này
        </p>
      </button>
    </div>
  );
};
