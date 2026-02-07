import { ButtonCustom } from "@/components";
import { FuncGroup, Info, InfoAva } from "./components";
import { useNavigate } from "react-router";

export const InfoPersonal = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-background-light dark:bg-background-dark">
      <div className="relative flex h-full overflow-y-hidden min-h-screen w-full flex-col overflow-x-hidden max-w-md mx-auto bg-background-light dark:bg-background-dark font-display antialiased shadow-xl dark:text-white">
        <div className="flex-1 flex flex-col pt-5 px-6 relative">
          <InfoAva />
          <Info />
          <FuncGroup />
          <div className="mt-6">
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
        </div>
      </div>
    </div>
  );
};
