export const EmptyState = () => {
  return (
    <div className="flex flex-col items-center justify-center py-12 px-4">
      <div className="bg-orange-50 dark:bg-orange-900/20 p-6 rounded-full mb-4">
        <span className="material-symbols-outlined text-primary text-4xl">
          local_cafe
        </span>
      </div>
      <h3 className="text-blackCustom dark:text-white font-bold text-lg mb-1">
        Chưa có đơn hàng nào
      </h3>
      <p className="text-text-sub text-center text-sm">
        Đơn hàng mới sẽ xuất hiện tại đây
      </p>
    </div>
  );
};
