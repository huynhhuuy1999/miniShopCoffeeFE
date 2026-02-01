export interface SectionHeaderProps {
  title: string;
  actionLabel?: string;
  onAction?: () => void;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  title,
  actionLabel,
  onAction,
}) => {
  return (
    <div className="flex justify-between items-end mt-2">
      <p className="text-xs font-bold text-text-secondary uppercase tracking-wider">
        {title}
      </p>
      {actionLabel && (
        <button
          type="button"
          className="text-xs text-primary font-semibold"
          onClick={onAction}
        >
          {actionLabel}
        </button>
      )}
    </div>
  );
};
