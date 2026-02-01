export interface MenuHeaderProps {
  onBack?: () => void;
  onAdd?: () => void;
}

export const Header: React.FC<MenuHeaderProps> = ({ onBack, onAdd }) => {
  return (
    <div className="flex items-center p-4 pb-2 justify-between">
      <div className="flex items-center gap-3">
        <button
          type="button"
          className="flex items-center justify-center w-10 h-10 rounded-full hover:bg-gray-100 dark:hover:bg-white/10 transition-colors"
          onClick={onBack}
        >
          <span
            className="material-symbols-outlined text-text-main dark:text-white"
            style={{ fontSize: 24 }}
          >
            arrow_back_ios_new
          </span>
        </button>
        <h2 className="text-text-main dark:text-white text-xl font-bold leading-tight tracking-[-0.015em]">
          Thực đơn
        </h2>
      </div>
      <div className="flex items-center justify-end">
        <button
          type="button"
          className="flex items-center justify-center rounded-full h-10 w-10 bg-primary/10 text-primary hover:bg-primary hover:text-white transition-all active:scale-95"
          onClick={onAdd}
        >
          <span
            className="material-symbols-outlined"
            style={{ fontSize: 24 }}
          >
            add
          </span>
        </button>
      </div>
    </div>
  );
};
