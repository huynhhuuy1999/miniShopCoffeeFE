import { Form, Role } from "./components";
import { ButtonCustom } from "@/components";

export const CreateUser = () => {
  return (
    <div>
      <div className="pt-6">
        <h3 className="text-blackCustom dark:text-white tracking-light text-2xl font-bold leading-tight px-4 text-left pb-2">
          Thông tin nhân viên
        </h3>
        <p className="text-blackCustom/70 dark:text-white/70 text-base font-normal leading-normal pb-3 px-4">
          Vui lòng điền các thông tin bên dưới để cấp quyền truy cập cho nhân
          viên mới.
        </p>
      </div>
      {/* <!-- Form Fields --> */}
      <div className="flex flex-col gap-4 px-4 py-4">
        {/* <!-- Name Field --> */}
        <Form />
        <Role />
      </div>
      {/* <!-- Additional Help/Info --> */}
      <div className="px-4 py-4 flex items-start gap-3 bg-primary/5 mx-4 rounded-xl border border-primary/20">
        <span className="material-symbols-outlined text-primary text-xl">
          info
        </span>
        <p className="text-xs text-blackCustom/80 dark:text-white/80 leading-relaxed">
          Mật khẩu tạm thời sẽ được gửi qua email của nhân viên. Họ sẽ được yêu
          cầu đổi mật khẩu trong lần đăng nhập đầu tiên.
        </p>
      </div>

      {/* <!-- Sticky Footer with Action Button --> */}
      <div className="p-4 bg-white dark:bg-background-dark border-t border-[#e6dedb] dark:border-white/10">
        <ButtonCustom
          onClick={() => {}}
          text="Tạo tài khoản"
          icon={<span className="material-symbols-outlined">person_add</span>}
        />
        <div className="h-2"></div>
      </div>
    </div>
  );
};
