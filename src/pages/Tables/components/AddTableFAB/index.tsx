export interface AddTableFABProps {
  onClick?: () => void;
}

export const AddTableFAB: React.FC<AddTableFABProps> = ({ onClick }) => {
  return (
    <div className="fixed bottom-24 right-4 z-40">
      <button
        type="button"
        className="flex items-center justify-center w-14 h-14 bg-primary hover:bg-primary-dark text-white rounded-full shadow-[0_8px_30px_rgba(238,91,43,0.4)] transition-all active:scale-90 group"
        onClick={onClick}
      >
        <span className="material-symbols-outlined text-3xl transition-transform group-hover:rotate-90">
          add
        </span>
      </button>
    </div>
  );
};
