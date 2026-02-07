import { useNavigate } from "react-router";

interface IHeaderTitle {
  onBack?: () => void;
  title?: string;
}

export const HeaderTitle: React.FC<IHeaderTitle> = ({ onBack, title }) => {
  const navigate = useNavigate();
  return (
    <div className="fixed w-full h-16 top-0 z-50 bg-white/95 dark:bg-[#2a1a14]/95 backdrop-blur-sm border-b border-gray-100 dark:border-gray-800 max-w-md">
      <div className="flex items-center p-4 justify-between">
        <div className="flex items-center gap-3">
          <button
            className="flex items-center justify-center w-10 h-10 rounded-full hover:bg-gray-100 dark:hover:bg-white/10 transition-colors"
            onClick={() => onBack ?? navigate(-1)}
          >
            <span className="material-symbols-outlined text-blackCustom dark:text-white">
              arrow_back_ios_new
            </span>
          </button>
          <h2 className="text-blackCustom dark:text-white text-xl font-bold leading-tight tracking-[-0.015em]">
            {title}
          </h2>
        </div>
      </div>
    </div>
  );
};
