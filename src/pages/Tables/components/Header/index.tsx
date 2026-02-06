export const Header = () => {
  return (
    <header className="fixed h-16 top-0 w-full max-w-md z-50 bg-white dark:bg-[#2a1a14]/95 px-4 py-3 shadow-[0_1px_3px_rgba(0,0,0,0.05)] flex items-center justify-between transition-colors duration-200">
      <div className="flex items-center gap-3">
        <h1 className="text-xl font-bold tracking-tight text-text-main dark:text-white">
          Sơ đồ bàn
        </h1>
        <div
          className="h-1.5 w-1.5 rounded-full bg-green-500 animate-pulse"
          title="Online"
        />
      </div>
      <div className="flex items-center gap-1">
        <button
          type="button"
          className="flex items-center justify-center w-10 h-10 rounded-full hover:bg-gray-100 dark:hover:bg-white/5 text-text-main dark:text-white transition-colors"
        >
          <span className="material-symbols-outlined">search</span>
        </button>
        <button
          type="button"
          className="flex items-center justify-center w-10 h-10 rounded-full hover:bg-gray-100 dark:hover:bg-white/5 text-text-main dark:text-white relative transition-colors"
        >
          <span className="material-symbols-outlined">notifications</span>
          <span className="absolute top-2.5 right-2.5 w-2 h-2 bg-primary rounded-full ring-2 ring-white dark:ring-surface-dark" />
        </button>
      </div>
    </header>
  );
};
