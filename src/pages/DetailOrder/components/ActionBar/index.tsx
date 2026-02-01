export interface ActionBarProps {
  onCancel?: () => void;
  onComplete?: () => void;
  cancelLabel?: string;
  completeLabel?: string;
}

export const ActionBar: React.FC<ActionBarProps> = ({
  onCancel,
  onComplete,
  cancelLabel = "Hủy đơn",
  completeLabel = "Hoàn tất đơn",
}) => {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-surface-light dark:bg-surface-dark border-t border-gray-100 dark:border-white/5 p-4 pb-8 z-40 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.05)] bg-background-light dark:bg-background-dark">
      <div className="flex gap-3">
        <button
          type="button"
          className="flex-1 h-12 rounded-xl border border-gray-300 dark:border-white/20 text-[#181311] dark:text-white font-bold text-sm hover:bg-gray-50 dark:hover:bg-white/5 transition-colors"
          onClick={onCancel}
        >
          {cancelLabel}
        </button>
        <button
          type="button"
          className="flex-[2] h-12 rounded-xl bg-primary text-white font-bold text-sm shadow-md hover:bg-primary/90 transition-colors flex items-center justify-center gap-2"
          onClick={onComplete}
        >
          <span className="material-symbols-outlined text-lg">
            check_circle
          </span>
          {completeLabel}
        </button>
      </div>
    </div>
  );
};
