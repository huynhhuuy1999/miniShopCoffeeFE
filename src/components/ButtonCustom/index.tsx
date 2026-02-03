interface IButtonCustom {
  onClick: () => void;
  disabled?: boolean;
  loading?: boolean;
  children?: React.ReactNode;
  textLoading?: string;
  icon?: React.ReactNode;
  text?: string;
  className?: string;
}

export const ButtonCustom: React.FC<IButtonCustom> = ({
  onClick,
  loading = false,
  textLoading = "Loading...",
  icon,
  text,
  className,
}) => {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={loading}
      className={`w-full h-14 mt-2 bg-primary hover:bg-red-600 active:scale-[0.98] transition-all text-white rounded-xl text-lg font-bold shadow-lg shadow-orange-900/10 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed ${className}`}
    >
      {loading ? (
        <span>{textLoading}</span>
      ) : (
        <>
          <span>{text}</span>
          {icon}
        </>
      )}
    </button>
  );
};
