import { ItemFunc } from "../ItemFunc";

export const FuncGroup = () => {
  return (
    <div className="mt-8 space-y-1">
      <ItemFunc
        icon={<span className="material-symbols-outlined">notifications</span>}
        title="Cài đặt thông báo"
        onClick={() => {}}
      />
      <ItemFunc
        icon={<span className="material-symbols-outlined">lock</span>}
        title="Đổi mật khẩu"
        onClick={() => {}}
      />
    </div>
  );
};
