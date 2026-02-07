import { ButtonCustom } from "@/components";

export const AddTable = () => {
  return (
    <>
      {/* <!-- Modal Popup Container --> */}
      <div className="relative z-10 w-full max-w-[400px] bg-white dark:bg-[#2d1e18] rounded-xl shadow-2xl overflow-hidden flex flex-col">
        {/* <!-- Content Area --> */}
        <div className="p-6">
          {/* <!-- HeadlineText --> */}
          <h3 className="text-blackCustom dark:text-white tracking-light text-xl font-bold leading-tight pb-4">
            Thông tin bàn mới
          </h3>
          {/* <!-- TextField for Table Number --> */}
          <div className="flex flex-col gap-2 mb-6">
            <p className="text-blackCustom dark:text-gray-300 text-sm font-medium leading-normal">
              Số thứ tự bàn
            </p>
            <div className="relative">
              <input
                className="form-input flex w-full rounded-lg text-blackCustom dark:text-white focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-[#e6dedb] dark:border-gray-700 bg-white dark:bg-background-dark h-14 placeholder:text-[#896b61] p-[15px] text-base font-normal"
                placeholder="Ví dụ: 01, 02..."
                type="text"
                value=""
              />
              <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 text-sm">
                edit
              </span>
            </div>
          </div>

          {/* <!-- Action Buttons --> */}
          <div className="flex flex-col gap-3">
            <ButtonCustom
              text="Lưu bàn mới"
              onClick={() => {}}
              className="text-base!"
            />
            <ButtonCustom
              text="Hủy bỏ"
              onClick={() => {}}
              className="text-base! bg-transparent text-[#896b61]! dark:text-gray-400! hover:bg-gray-50 dark:hover:bg-gray-800/30"
            />
          </div>
        </div>
      </div>
    </>
  );
};
