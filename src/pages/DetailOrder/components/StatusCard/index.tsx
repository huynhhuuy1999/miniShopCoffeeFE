export interface StatusCardProps {
  statusLabel: string;
  tableName: string;
  updatedAt: string;
}

export const StatusCard: React.FC<StatusCardProps> = ({
  statusLabel,
  tableName,
  updatedAt,
}) => {
  return (
    <div className="p-4">
      <div className="flex flex-col gap-4 rounded-xl bg-primary/10 dark:bg-primary/20 p-5 border border-primary/20">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span
              className="material-symbols-outlined text-primary"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              restaurant
            </span>
            <p className="text-primary text-sm font-bold uppercase tracking-wide">
              Trạng thái đơn
            </p>
          </div>
          <span className="bg-primary text-white text-xs font-semibold px-2.5 py-1 rounded-lg">
            {statusLabel}
          </span>
        </div>
        <div>
          <h3 className="text-2xl font-bold text-blackCustom dark:text-white mb-1">
            {tableName}
          </h3>
          <p className="text-[#896b61] dark:text-gray-300 text-sm">
            Cập nhật: {updatedAt}
          </p>
        </div>
      </div>
    </div>
  );
};
