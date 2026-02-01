import type { ICardSumOrder } from "@/models";

export const CardSumOrder: React.FC<ICardSumOrder> = ({
  name,
  value,
  valueChange,
  status,
  onClick,
}) => {
  return (
    <div
      className="flex flex-col gap-1 rounded-xl p-4 bg-card-light dark:bg-card-dark shadow-sm border border-gray-100 dark:border-gray-800"
      onClick={onClick}
    >
      <p className="text-gray-600 dark:text-gray-400 text-sm font-medium">
        {name}
      </p>
      <p className="text-2xl font-bold">{value}</p>
      <p className="text-[#07880b] text-xs font-medium flex items-center">
        <span className="material-symbols-outlined text-[14px]">
          arrow_upward
        </span>{" "}
        {valueChange}%
      </p>
    </div>
  );
};
