export interface DetailOrderHeaderProps {
  orderId: string;
  onBack?: () => void;
}

export const Header: React.FC<DetailOrderHeaderProps> = ({
  orderId,
  onBack,
}) => {
  return (
    <div className="sticky top-0 z-50 flex items-center bg-surface-light dark:bg-surface-dark px-4 py-3 shadow-sm justify-between transition-colors">
      <button
        type="button"
        className="text-[#181311] dark:text-white flex size-10 shrink-0 items-center justify-center rounded-full hover:bg-gray-100 dark:hover:bg-white/10 transition-colors"
        onClick={onBack}
      >
        <span className="material-symbols-outlined text-2xl">arrow_back</span>
      </button>
      <h2 className="text-[#181311] dark:text-white text-lg font-bold leading-tight tracking-tight flex-1 text-center pr-10">
        Đơn hàng #{orderId}
      </h2>
    </div>
  );
};
