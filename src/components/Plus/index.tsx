interface IPlus {
  onClick?: () => void;
}

export const Plus: React.FC<IPlus> = ({ onClick }) => {
  return (
    <div className="fixed bottom-30 right-6 z-40 max-w-md w-full mx-auto pointer-events-none flex justify-end px-6">
      <button
        type="button"
        className="pointer-events-auto shadow-lg shadow-primary/40 flex items-center justify-center size-14 rounded-full bg-primary text-white hover:bg-primary-dark transition-all transform hover:scale-105 active:scale-95"
        onClick={onClick}
      >
        <span className="material-symbols-outlined text-[28px]">add</span>
      </button>
    </div>
  );
};
