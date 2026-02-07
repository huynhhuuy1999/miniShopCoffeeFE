export const Role = () => {
  return (
    <div className="flex flex-col w-full mt-2">
      <p className="text-blackCustom dark:text-white text-sm font-semibold leading-normal pb-3 uppercase tracking-wider">
        Phân quyền hệ thống
      </p>
      <div className="grid grid-cols-2 gap-3">
        {/* <!-- Admin Option --> */}
        <div className="relative flex flex-col p-4 border-2 border-primary bg-primary/5 rounded-xl cursor-pointer">
          <div className="flex justify-between items-start mb-1">
            <span className="material-symbols-outlined text-primary">
              admin_panel_settings
            </span>
            <div className="w-5 h-5 rounded-full border-2 border-primary flex items-center justify-center">
              <div className="w-2.5 h-2.5 rounded-full bg-primary"></div>
            </div>
          </div>
          <span className="text-blackCustom dark:text-white font-bold text-sm">
            Quản trị viên
          </span>
          <span className="text-blackCustom/60 dark:text-white/60 text-xs">
            Toàn quyền truy cập
          </span>
        </div>
        {/* <!-- Staff Option --> */}
        <div className="relative flex flex-col p-4 border border-[#e6dedb] dark:border-white/10 bg-white dark:bg-white/5 rounded-xl cursor-pointer hover:border-primary/50 transition-colors">
          <div className="flex justify-between items-start mb-1">
            <span className="material-symbols-outlined text-[#896b61] dark:text-white/60">
              person
            </span>
            <div className="w-5 h-5 rounded-full border border-[#e6dedb] dark:border-white/30"></div>
          </div>
          <span className="text-blackCustom dark:text-white font-bold text-sm">
            Nhân viên
          </span>
          <span className="text-blackCustom/60 dark:text-white/60 text-xs">
            Chỉ xem đơn &amp; bán hàng
          </span>
        </div>
      </div>
    </div>
  );
};
