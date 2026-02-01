import type { TableCardProps } from "@/models";

export const TableCard: React.FC<TableCardProps> = ({
  name,
  occupied,
  duration,
  onMore,
  onClick,
}) => {
  if (occupied) {
    return (
      <div
        role="button"
        tabIndex={0}
        className="group relative flex flex-col justify-between p-4 rounded-xl bg-primary text-white shadow-glow cursor-pointer hover:bg-primary-dark transition-all active:scale-[0.98]"
        onClick={onClick}
        onKeyDown={(e) => e.key === "Enter" && onClick?.()}
      >
        <div className="flex justify-between items-start mb-4">
          <span
            className="material-symbols-outlined text-3xl opacity-90"
            style={{ fontVariationSettings: "'FILL' 1" }}
          >
            table_restaurant
          </span>
          {onMore && (
            <button
              type="button"
              className="hover:bg-white/20 rounded-full p-1 -mr-2 -mt-2 transition-colors"
              onClick={(e) => {
                e.stopPropagation();
                onMore();
              }}
            >
              <span className="material-symbols-outlined text-xl opacity-80">
                more_horiz
              </span>
            </button>
          )}
        </div>
        <div>
          <h3 className="text-lg font-bold leading-tight">{name}</h3>
          {duration && (
            <div className="mt-2 flex items-center gap-1.5 text-xs font-medium text-white/90 bg-white/10 w-fit px-2 py-1 rounded-lg">
              <span className="material-symbols-outlined text-[14px]">
                schedule
              </span>
              <span>{duration}</span>
            </div>
          )}
        </div>
        <div className="absolute top-4 right-10">
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-white" />
          </span>
        </div>
      </div>
    );
  }

  return (
    <div
      role="button"
      tabIndex={0}
      className="group relative flex flex-col justify-between p-4 rounded-xl bg-surface-light dark:bg-surface-dark border border-gray-200 dark:border-gray-700/50 shadow-sm cursor-pointer hover:border-primary/50 dark:hover:border-primary/50 transition-all active:scale-[0.98]"
      onClick={onClick}
      onKeyDown={(e) => e.key === "Enter" && onClick?.()}
    >
      <div className="flex justify-between items-start mb-4">
        <span className="material-symbols-outlined text-3xl text-gray-300 dark:text-gray-600 group-hover:text-primary/70 transition-colors">
          table_restaurant
        </span>
      </div>
      <div>
        <h3 className="text-lg font-bold text-text-main dark:text-white">
          {name}
        </h3>
        <div className="mt-2 flex items-center gap-1.5 text-xs font-medium text-text-muted">
          <span>Trống</span>
        </div>
      </div>
    </div>
  );
};
