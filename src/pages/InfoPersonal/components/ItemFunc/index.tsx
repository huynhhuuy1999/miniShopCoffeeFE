interface IItemFunc {
  icon?: React.ReactNode;
  title?: string;
  onClick?: () => void;
}

export const ItemFunc: React.FC<IItemFunc> = ({ icon, title, onClick }) => {
  return (
    <button
      className="w-full flex items-center justify-between p-4 rounded-xl hover:bg-gray-100 dark:hover:bg-white/5 transition-colors group mt-4"
      onClick={onClick}
    >
      <div className="flex items-center gap-3">
        {icon}
        <span className="font-medium">{title}</span>
      </div>
      <span
        className="material-symbols-outlined text-gray-400"
        style={{ fontSize: "20px" }}
      >
        chevron_right
      </span>
    </button>
  );
};
