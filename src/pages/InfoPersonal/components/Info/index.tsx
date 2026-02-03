import { ItemInfo } from "../ItemInfo";

export const Info = () => {
  return (
    <div className="space-y-4">
      <ItemInfo
        icon={<span className="material-symbols-outlined">mail</span>}
        title="Email"
        value="tuan.nguyen@coffeeadmin.vn"
      />
      <ItemInfo
        icon={<span className="material-symbols-outlined">phone_iphone</span>}
        title="Số điện thoại"
        value="090 123 4567"
      />
    </div>
  );
};
