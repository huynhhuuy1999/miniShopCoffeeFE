import { useState } from "react";

export const Form = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  return (
    <>
      <label className="flex flex-col w-full">
        <p className="text-blackCustom dark:text-white text-sm font-semibold leading-normal pb-2 uppercase tracking-wider">
          Họ tên
        </p>
        <div className="relative">
          <input
            className="form-input flex w-full rounded-lg text-blackCustom dark:text-white focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-[#e6dedb] dark:border-white/10 bg-white dark:bg-white/5 h-14 placeholder:text-[#896b61] p-[15px] text-base font-normal"
            placeholder="Nhập họ và tên nhân viên"
          />
        </div>
      </label>

      <label className="flex flex-col w-full">
        <p className="text-blackCustom dark:text-white text-sm font-semibold leading-normal pb-2 uppercase tracking-wider">
          Email / Tên đăng nhập
        </p>
        <div className="relative">
          <input
            className="form-input flex w-full rounded-lg text-blackCustom dark:text-white focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-[#e6dedb] dark:border-white/10 bg-white dark:bg-white/5 h-14 placeholder:text-[#896b61] p-[15px] text-base font-normal"
            placeholder="example@coffee.com"
            type="email"
          />
        </div>
      </label>
      {/* <!-- Password Field --> */}
      <label className="flex flex-col w-full">
        <p className="text-blackCustom dark:text-white text-sm font-semibold leading-normal pb-2 uppercase tracking-wider">
          Mật khẩu
        </p>
        <div className="relative flex items-center">
          <input
            className="form-input flex w-full rounded-lg text-blackCustom dark:text-white focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-[#e6dedb] dark:border-white/10 bg-white dark:bg-white/5 h-14 placeholder:text-[#896b61] p-[15px] pr-12 text-base font-normal"
            placeholder="••••••••"
            type="password"
          />
          <span className="material-symbols-outlined absolute right-4 text-[#896b61] cursor-pointer">
            visibility
          </span>
        </div>
      </label>
    </>
  );
};
