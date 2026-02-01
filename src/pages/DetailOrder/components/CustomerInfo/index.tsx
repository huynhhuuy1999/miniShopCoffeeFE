export interface CustomerInfoProps {
  customerName: string;
  phone: string;
  note?: string;
}

export const CustomerInfo: React.FC<CustomerInfoProps> = ({
  customerName,
  phone,
  note,
}) => {
  return (
    <div className="px-4 pb-2">
      <h3 className="text-[#181311] dark:text-white text-base font-bold leading-tight px-1 mb-3">
        Thông tin khách hàng
      </h3>
      <div className="bg-surface-light dark:bg-surface-dark rounded-xl p-4 shadow-sm border border-gray-100 dark:border-white/5">
        <div className="grid grid-cols-[24px_1fr] gap-x-4 gap-y-4 items-center">
          <span className="material-symbols-outlined text-gray-400 dark:text-gray-500 text-[20px]">
            person
          </span>
          <div className="flex flex-col">
            <span className="text-xs text-gray-500 dark:text-gray-400">
              Khách hàng
            </span>
            <span className="text-sm font-medium text-[#181311] dark:text-gray-200">
              {customerName}
            </span>
          </div>
          <span className="material-symbols-outlined text-gray-400 dark:text-gray-500 text-[20px]">
            call
          </span>
          <div className="flex flex-col">
            <span className="text-xs text-gray-500 dark:text-gray-400">
              Số điện thoại
            </span>
            <span className="text-sm font-medium text-[#181311] dark:text-gray-200">
              {phone}
            </span>
          </div>
          <span className="material-symbols-outlined text-gray-400 dark:text-gray-500 text-[20px]">
            edit_note
          </span>
          <div className="flex flex-col">
            <span className="text-xs text-gray-500 dark:text-gray-400">
              Ghi chú chung
            </span>
            <span className="text-sm font-medium text-primary italic">
              {note ?? "—"}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
