const iosInputStyle =
  "@apply w-full bg-[#f4f1f0] dark:bg-white/5 border-none rounded-xl h-14 px-4 text-text-main dark:text-white placeholder:text-text-secondary focus:ring-2 focus:ring-primary/50 transition-all;";

export const GroupInput = () => {
  return (
    <div className="flex flex-col gap-5">
      <div className="flex flex-col gap-1.5">
        <label className="text-xs font-bold text-text-secondary uppercase tracking-wider ml-1">
          Họ và tên
        </label>
        <input
          className={`${iosInputStyle} focus:outline-none focus:font-normal`}
          placeholder="Nhập họ và tên"
          type="text"
          value="Nguyễn Văn Admin"
        />
      </div>
      <div className="flex flex-col gap-1.5">
        <label className="text-xs font-bold text-text-secondary uppercase tracking-wider ml-1">
          Email
        </label>
        <input
          className={`${iosInputStyle} focus:outline-none focus:font-normal`}
          placeholder="Nhập địa chỉ email"
          type="email"
          value="admin@caphe-nho.com"
        />
      </div>
      <div className="flex flex-col gap-1.5">
        <label className="text-xs font-bold text-text-secondary uppercase tracking-wider ml-1">
          Số điện thoại
        </label>
        <input
          className={`${iosInputStyle} focus:outline-none focus:font-normal`}
          placeholder="Nhập số điện thoại"
          type="tel"
          value="0987 654 321"
        />
      </div>
    </div>
  );
};
