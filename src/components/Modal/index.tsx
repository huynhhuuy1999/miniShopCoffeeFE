interface ModalProps {
  open: boolean;
  onClose: () => void;
  title?: string;
  children?: React.ReactNode;
}

export const Modal: React.FC<ModalProps> = ({
  open,
  onClose,
  title,
  children,
}) => {
  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="w-[90%] max-w-md rounded-xl bg-white dark:bg-background-dark shadow-2xl animate-scaleIn max-h-[95vh] overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between border-b border-gray-100 dark:border-gray-800 px-4">
          <h2 className="text-blackCustom dark:text-white text-[22px] font-bold leading-tight tracking-[-0.015em] py-5">
            {title}
          </h2>
          <button
            className="p-2 text-gray-400 hover:text-gray-600"
            onClick={onClose}
          >
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>

        {/* Body */}
        <div className="p-4 overflow-y-auto max-h-[87vh]">{children}</div>
      </div>
    </div>
  );
};

export default Modal;
