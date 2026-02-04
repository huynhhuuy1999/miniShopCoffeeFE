import { ButtonCustom, HeaderTitle } from "@/components";
import { FuncGroup, Info, InfoAva } from "./components";
import { useNavigate } from "react-router";

export const InfoPersonal = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-background-light dark:bg-background-dark font-display antialiased text-text-main dark:text-white">
      <div className="relative flex h-full min-h-screen w-full flex-col overflow-x-hidden max-w-md mx-auto bg-white dark:bg-[#2a1a14] shadow-xl">
        <HeaderTitle title="Hồ sơ cá nhân" />
        <main className="flex-1 flex flex-col px-6 pb-10">
          <InfoAva />
          <Info />
          <FuncGroup />
          <div className="mt-auto pt-10">
            <ButtonCustom
              text="Chỉnh sửa thông tin"
              icon={<span className="material-symbols-outlined">edit</span>}
              onClick={() => {
                navigate("/update-user");
              }}
            />
            <button
              className="w-full mt-4 h-12 text-red-500 font-semibold flex items-center justify-center gap-2"
              onClick={() => navigate("/login")}
            >
              <span className="material-symbols-outlined">logout</span>
              Đăng xuất
            </button>
          </div>
        </main>
      </div>
    </div>
  );
};
