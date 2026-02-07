export const AddMenu = () => {
  return (
    <div>
      <div className="relative z-20 w-full max-w-md bg-white dark:bg-background-dark rounded-xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
        {/* <!-- Content Area --> */}
        <div className="flex-1 overflow-y-auto px-4 py-2">
          {/* <!-- Image Upload Section --> */}
          <div className="py-4">
            <p className="text-blackCustom dark:text-white text-base font-medium leading-normal pb-3">
              Hình ảnh món ăn
            </p>
            <div className="relative flex items-center justify-center border-2 border-dashed border-[#e6dedb] dark:border-gray-700 rounded-xl aspect-video bg-gray-50 dark:bg-gray-800/50 group cursor-pointer overflow-hidden">
              <div className="flex flex-col items-center gap-2">
                <span className="material-symbols-outlined text-primary text-4xl">
                  add_a_photo
                </span>
                <span className="text-sm text-gray-500">
                  Tải lên hoặc chụp ảnh
                </span>
              </div>
              {/* <!-- Hidden input simulation --> */}
              <div
                className="absolute inset-0 opacity-0 bg-center bg-no-repeat bg-cover"
                data-alt="a delicious Vietnamese salt coffee in a glass"
                style={{
                  backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuDuceYA2T7BDF0RWsyewr8QRmb8HLWqx8gRtYKIR4KdneNZ3-CTT6KRKKP7mPh0uyiyv6RcVbqb6c8kFCD1umEJ0_PgzOE8pWrFmGl6IlG7JouZ6iNkQFWOlOY_1IvOyyrlBNTqdxW0YN4vZU3nQz5tRIkvC_uGmEVS_WDLUuwXseutjqjDaONY0XRlHFH-7neAPuiNjar8dDmQKButCIUNsmluFLM8_x50ecw3HhcvB-P0wGOD15CoMmYZX413RrX-Ulu4tOqcGI4q")`,
                }}
              ></div>
            </div>
          </div>
          {/* <!-- TextField: Tên món --> */}
          <div className="flex flex-wrap items-end gap-4 py-3">
            <label className="flex flex-col min-w-40 flex-1">
              <p className="text-blackCustom dark:text-white text-base font-medium leading-normal pb-2">
                Tên món
              </p>
              <input
                className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-blackCustom dark:text-white focus:outline-0 focus:ring-1 focus:ring-primary border border-[#e6dedb] dark:border-gray-700 bg-white dark:bg-gray-800 focus:border-primary h-14 placeholder:text-[#896b61] p-[15px] text-base font-normal leading-normal"
                placeholder="Ví dụ: Cà phê Muối"
                value=""
              />
            </label>
          </div>
          {/* <!-- TextField: Giá --> */}
          <div className="flex flex-wrap items-end gap-4 py-3">
            <label className="flex flex-col min-w-40 flex-1">
              <p className="text-blackCustom dark:text-white text-base font-medium leading-normal pb-2">
                Giá (VNĐ)
              </p>
              <input
                className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-blackCustom dark:text-white focus:outline-0 focus:ring-1 focus:ring-primary border border-[#e6dedb] dark:border-gray-700 bg-white dark:bg-gray-800 focus:border-primary h-14 placeholder:text-[#896b61] p-[15px] text-base font-normal leading-normal"
                placeholder="0.000"
                type="number"
                value=""
              />
            </label>
          </div>
          {/* <!-- Dropdown: Danh mục --> */}
          <div className="flex flex-wrap items-end gap-4 py-3 mb-4">
            <div className="flex flex-col min-w-40 flex-1">
              <div className="flex items-center justify-between pb-2">
                <p className="text-blackCustom dark:text-white text-base font-medium leading-normal">
                  Danh mục
                </p>
                <div className="text-primary flex items-center gap-1 cursor-pointer">
                  <span className="material-symbols-outlined text-[18px]">
                    add_circle
                  </span>
                  Thêm danh mục mới
                </div>
              </div>

              <div className="relative">
                <select className="form-select appearance-none w-full rounded-lg text-blackCustom dark:text-white border border-[#e6dedb] dark:border-gray-700 bg-white dark:bg-gray-800 h-14 px-[15px] focus:outline-0 focus:ring-1 focus:ring-primary focus:border-primary">
                  <option value="">Chọn danh mục</option>
                  <option value="1">Cà phê</option>
                  <option value="2">Trà trái cây</option>
                  <option value="3">Đá xay</option>
                  <option value="4">Bánh ngọt</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4">
                  <span className="material-symbols-outlined text-gray-500">
                    expand_more
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- Footer Actions --> */}
        <div className="p-4 bg-white dark:bg-background-dark border-t border-gray-100 dark:border-gray-800 flex flex-col gap-3">
          <button className="w-full bg-primary text-white font-bold py-4 rounded-xl shadow-lg shadow-primary/30 active:scale-[0.98] transition-all">
            Thêm món
          </button>
          <button className="w-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 font-medium py-4 rounded-xl active:scale-[0.98] transition-all">
            Hủy
          </button>
        </div>
      </div>
    </div>
  );
};
