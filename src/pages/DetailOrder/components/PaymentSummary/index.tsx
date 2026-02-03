export interface PaymentSummaryProps {
  subtotal: string;
  discount?: string;
  total: string;
}

interface IItemPayment {
  nameItem?: string;
  value?: string;
  classNameItem?: string;
  classNameValue?: string;
}

const ItemPayment: React.FC<IItemPayment> = ({
  nameItem,
  value,
  classNameItem,
  classNameValue,
}) => {
  return (
    <div className="flex justify-between items-center py-2 border-b border-dashed border-gray-200 dark:border-white/10">
      <span
        className={`text-sm text-[#896b61] dark:text-gray-400 ${classNameItem}`}
      >
        {nameItem}
      </span>
      <span
        className={`text-sm font-medium text-blackCustom dark:text-white ${classNameValue}`}
      >
        {value}
      </span>
    </div>
  );
};

export const PaymentSummary: React.FC<PaymentSummaryProps> = ({
  subtotal,
  discount = "-0đ",
  total,
}) => {
  return (
    <div className="px-4 mt-6 mb-4">
      <div className="bg-surface-light dark:bg-surface-dark rounded-xl p-4 shadow-sm border border-gray-100 dark:border-white/5">
        <ItemPayment nameItem="Tạm tính" value={subtotal} />
        <ItemPayment
          nameItem="Giảm giá (Voucher)"
          value={discount}
          classNameValue="text-green-600"
        />
        <div className="flex justify-between items-center pt-3">
          <span className="text-base font-bold text-blackCustom dark:text-white">
            Tổng cộng
          </span>
          <span className="text-xl font-bold text-primary">{total}</span>
        </div>
      </div>
    </div>
  );
};
