export const Header = () => {
  return (
    <div className="sticky top-0 z-20 bg-background-light/95 dark:bg-background-dark/95 backdrop-blur-sm px-4 pt-6 pb-2 flex items-center justify-between border-b border-gray-100 dark:border-gray-800">
      <div className="flex items-center gap-3">
        <div
          className="h-10 w-10 rounded-full bg-cover bg-center ring-2 ring-primary/20"
          data-alt="Portrait of the shop administrator smiling"
          style={{
            backgroundImage:
              "url('https://lh3.googleusercontent.com/aida-public/AB6AXuD3h-yUaVA8_yYaoIvZEnRv0G6bi4712JJJCQX_ZfF7HGTsVtQMzVZ77AO8H1X7JHxArCYXfjvvjynkiA8Sm_zFaiTr9n6SIP_142TANy2Vr2V30IJt6HJqMM-R3lj9P5NIjAnN4J0VOrRGScvmOuMGW4OkxZD6C4LBjogtqcwspPD46DkrRRN4hGKWuv4S0m29r0E5g8XAVionGSVis_06jqCFeB2JdwaMMPBaWZGi5vV2Rr4vDZIuTQkX1cQlX_qHnKsuTQEhWLyR')",
          }}
        ></div>
        <div>
          <h1 className="text-sm font-medium text-gray-500 dark:text-gray-400 leading-none">
            Quản lý Cà Phê
          </h1>
          <span className="text-xs text-primary font-bold">Chi nhánh 1</span>
        </div>
      </div>
      <button className="relative p-2 rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition-colors">
        <span
          className="material-symbols-outlined text-[#181311] dark:text-white"
          style={{ fontSize: "24px" }}
        >
          notifications
        </span>
        <span className="absolute top-2 right-2 h-2 w-2 rounded-full bg-primary ring-2 ring-white dark:ring-[#221510]"></span>
      </button>
    </div>
  );
};
