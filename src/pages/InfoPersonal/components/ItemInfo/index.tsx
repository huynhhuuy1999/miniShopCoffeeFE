interface IItemInfo {
  icon?: React.ReactNode;
  title?: string;
  value?: string;
}

export const ItemInfo: React.FC<IItemInfo> = ({ icon, title, value }) => {
  return (
    <div className="bg-gray-50 dark:bg-white/5 p-4 rounded-2xl border border-gray-100 dark:border-white/5">
      <div className="flex items-center gap-4">
        <div className="w-10 h-10 rounded-xl bg-orange-100 dark:bg-orange-900/30 flex items-center justify-center text-primary">
          {icon}
        </div>
        <div className="flex-1">
          <p className="text-[10px] font-bold text-text-secondary uppercase tracking-widest">
            {title}
          </p>
          <p className="text-base font-medium text-blackCustom dark:text-gray-200">
            {value}
          </p>
        </div>
      </div>
    </div>
  );
};
