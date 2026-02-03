import { ButtonCustom, HeaderTitle } from "@/components";
import { GroupInput, InfoAva } from "./components";

export const UpdateUser = () => {
  return (
    <div className="bg-background-light dark:bg-background-dark font-display antialiased text-text-main dark:text-white">
      <div className="relative flex h-full min-h-screen w-full flex-col overflow-x-hidden max-w-md mx-auto bg-white dark:bg-[#2a1a14] shadow-xl">
        <HeaderTitle title="Thông tin cá nhân" />
        <div className="flex-1 flex flex-col p-6 gap-8">
          <InfoAva />
          <GroupInput />
          <div className="flex flex-col gap-3 mt-4">
            <ButtonCustom
              text="Lưu thay đổi"
              onClick={() => {}}
              className="text-sm"
            />
            <ButtonCustom
              text="Hủy"
              className="text-sm bg-[#f4f1f0]! text-blackCustom!"
              onClick={() => {}}
            />
          </div>
        </div>
        <footer className="h-8"></footer>
      </div>
    </div>
  );
};
