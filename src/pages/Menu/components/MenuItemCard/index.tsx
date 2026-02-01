export interface MenuItemCardProps {
  name: string;
  description: string;
  price: string;
  imageUrl: string;
  imageAlt?: string;
  active?: boolean;
  soldOut?: boolean;
  onToggleActive?: (active: boolean) => void;
  onMore?: () => void;
  onDelete?: () => void;
}

export const MenuItemCard: React.FC<MenuItemCardProps> = ({
  name,
  description,
  price,
  imageUrl,
  imageAlt,
  active = true,
  soldOut = false,
  onToggleActive,
  onMore,
  onDelete,
}) => {
  const cardContent = (
    <div className="flex items-center gap-4 p-3 pr-2 bg-white dark:bg-[#2a1a14] z-20 relative">
      <div className="relative h-20 w-20 shrink-0">
        <div
          className={`bg-center bg-no-repeat bg-cover rounded-lg h-20 w-20 shadow-sm ${
            soldOut ? "grayscale" : ""
          }`}
          style={{ backgroundImage: `url("${imageUrl}")` }}
          data-alt={imageAlt ?? name}
        />
        {soldOut && (
          <div className="absolute inset-0 bg-black/40 rounded-lg flex items-center justify-center z-10">
            <span className="text-white text-[10px] font-bold uppercase tracking-wider border border-white px-1 py-0.5 rounded">
              Hết hàng
            </span>
          </div>
        )}
      </div>
      <div className="flex flex-col flex-1 justify-center min-w-0">
        <div className="flex justify-between items-start">
          <h3
            className={`text-base leading-tight truncate pr-2 ${
              soldOut
                ? "text-text-main dark:text-gray-400 line-through decoration-gray-400 font-medium"
                : "text-text-main dark:text-white font-bold"
            }`}
          >
            {name}
          </h3>
          <button
            type="button"
            className="text-text-secondary hover:text-primary transition-colors"
            onClick={(e) => {
              e.stopPropagation();
              onMore?.();
            }}
          >
            <span
              className="material-symbols-outlined"
              style={{ fontSize: 20 }}
            >
              more_vert
            </span>
          </button>
        </div>
        <p className="text-text-secondary text-xs font-normal leading-normal line-clamp-1 mt-1">
          {description}
        </p>
        <div className="flex items-center justify-between mt-2">
          <p
            className={
              soldOut
                ? "text-text-secondary text-base font-medium"
                : "text-primary text-base font-bold"
            }
          >
            {price}
          </p>
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              className="sr-only peer"
              checked={active}
              disabled={soldOut}
              onChange={(e) => onToggleActive?.(e.target.checked)}
            />
            <div className="w-9 h-5 bg-gray-200 peer-focus:outline-none rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:peer-checked:bg-primary peer-checked:bg-primary peer-disabled:opacity-50" />
          </label>
        </div>
      </div>
    </div>
  );

  const wrapperClass = soldOut ? "opacity-80 hover:opacity-100" : "";

  if (onDelete) {
    return (
      <div
        className={`group relative overflow-hidden rounded-xl bg-white dark:bg-white/5 shadow-sm border border-gray-100 dark:border-white/5 transition-all hover:shadow-md ${wrapperClass}`}
      >
        <div
          className="absolute right-0 top-0 bottom-0 w-20 bg-red-500 flex items-center justify-center translate-x-full group-hover:translate-x-0 transition-transform duration-300 cursor-pointer z-10"
          onClick={onDelete}
          onKeyDown={(e) => e.key === "Enter" && onDelete()}
          role="button"
          tabIndex={0}
        >
          <span className="material-symbols-outlined text-white">delete</span>
        </div>
        {cardContent}
      </div>
    );
  }

  return (
    <div
      className={`group relative overflow-hidden rounded-xl bg-white dark:bg-white/5 shadow-sm border border-gray-100 dark:border-white/5 transition-all hover:shadow-md ${wrapperClass}`}
    >
      {cardContent}
    </div>
  );
};
