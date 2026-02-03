import { ButtonCustom } from "@/components";

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
        <ButtonCustom
          onClick={onCancel ?? (() => {})}
          text={cancelLabel ?? "Hủy đơn"}
          className="flex-1 h-12! border border-gray-300 dark:border-white/20 text-blackCustom! dark:text-white text-sm hover:bg-gray-50 dark:hover:bg-white/5 mt-0! bg-white!"
          icon={
            <span className="material-symbols-outlined text-[20px]">
              cancel
            </span>
          }
        />

        <ButtonCustom
          onClick={onComplete ?? (() => {})}
          text={completeLabel ?? "Hoàn tất đơn"}
          icon={
            <span className="material-symbols-outlined text-[20px]">
              check_circle
            </span>
          }
          className="flex-[2] h-12! text-sm shadow-md mt-0!"
        />
      </div>
    </div>
  );
};
