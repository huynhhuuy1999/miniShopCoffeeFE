export interface DetailOrderItemProps {
  name: string;
  price: string;
  options?: string;
  note?: string;
  quantity: number;
  imageUrl: string;
  imageAlt?: string;
  unitPrice?: string;
}

export const DetailOrderItem: React.FC<DetailOrderItemProps> = ({
  name,
  price,
  options,
  note,
  quantity,
  imageUrl,
  imageAlt,
  unitPrice,
}) => {
  return (
    <div className="flex items-start gap-3 bg-surface-light dark:bg-surface-dark p-3 rounded-xl shadow-sm border border-gray-100 dark:border-white/5">
      <div
        className="bg-center bg-no-repeat bg-cover rounded-lg size-16 shrink-0"
        style={{ backgroundImage: `url("${imageUrl}")` }}
        data-alt={imageAlt ?? name}
      />
      <div className="flex flex-col flex-1 h-full justify-between">
        <div className="flex justify-between items-start w-full">
          <p className="text-blackCustom dark:text-white text-base font-semibold leading-tight line-clamp-1">
            {name}
          </p>
          <p className="text-blackCustom dark:text-white text-base font-bold shrink-0">
            {price}
          </p>
        </div>
        {options && (
          <p className="text-[#896b61] dark:text-gray-400 text-sm mt-0.5">
            {options}
          </p>
        )}
        {note && (
          <p className="dark:text-gray-400 text-sm mt-0.5 italic text-primary">
            Ghi chú: {note}
          </p>
        )}
        {!options && !note && (
          <p className="text-[#896b61] dark:text-gray-400 text-sm mt-0.5">
            &nbsp;
          </p>
        )}
        <div className="flex items-center gap-2 mt-2">
          <span className="bg-gray-100 dark:bg-white/10 text-xs font-bold px-2 py-0.5 rounded text-blackCustom dark:text-gray-200">
            x{quantity}
          </span>
          {unitPrice && (
            <span className="text-xs text-gray-400 line-through">
              {unitPrice}/ly
            </span>
          )}
        </div>
      </div>
    </div>
  );
};
