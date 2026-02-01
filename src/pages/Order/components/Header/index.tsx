export interface OrderHeaderProps {
  onBack?: () => void;
  onAdd?: () => void;
}

export const Header: React.FC<OrderHeaderProps> = ({ onBack, onAdd }) => {
  return (
    <header className="sticky top-0 z-30 flex items-center bg-background-light/95 dark:bg-background-dark/95 backdrop-blur-md p-4 pb-2 justify-between border-b border-gray-100 dark:border-white/5">
      <button
        type="button"
        className="text-text-main dark:text-white flex size-10 shrink-0 items-center justify-center rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition-colors"
        onClick={onBack}
      >
        <span className="material-symbols-outlined text-[24px]">
          arrow_back
        </span>
      </button>
      <h2 className="text-text-main dark:text-white text-lg font-bold leading-tight tracking-[-0.015em] flex-1 text-center">
        Quản lý Đơn hàng
      </h2>
      <div className="flex w-10 items-center justify-end">
        <button
          type="button"
          className="flex size-10 cursor-pointer items-center justify-center overflow-hidden rounded-full bg-primary/10 dark:bg-primary/20 text-primary hover:bg-primary/20 transition-colors"
          onClick={onAdd}
        >
          <span
            className="material-symbols-outlined text-[24px]"
            style={{ fontVariationSettings: "'FILL' 1" }}
          >
            add
          </span>
        </button>
      </div>
    </header>
  );
};
