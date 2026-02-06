import { useEffect, useRef } from "react";
import { Outlet, NavLink, useLocation } from "react-router";

export const MainLayout = () => {
  const mainRef = useRef<HTMLElement>(null);
  const { pathname } = useLocation();

  useEffect(() => {
    mainRef.current?.scrollTo({ top: 0, behavior: "instant" });
  }, [pathname]);

  return (
    <div className="bg-background-light dark:bg-background-dark font-display text-blackCustom dark:text-white h-screen flex flex-col overflow-hidden relative">
      <main
        ref={mainRef}
        className="flex-1 overflow-y-auto no-scrollbar pb-10 max-w-md w-full m-auto shadow-xl"
      >
        <Outlet />
      </main>

      <nav className="sticky m-auto bottom-0 z-30 flex w-full max-w-md items-center justify-around bg-card-light dark:bg-card-dark border-t border-gray-200 dark:border-gray-800 px-2 pb-safe pt-2 h-[80px]">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `flex flex-col items-center gap-1 p-2 transition-colors ${
              isActive
                ? "text-primary"
                : "text-gray-400 dark:text-gray-500 hover:text-primary dark:hover:text-primary"
            }`
          }
        >
          <span
            className="material-symbols-outlined"
            style={{ fontVariationSettings: "'FILL' 1" }}
          >
            grid_view
          </span>
          <span className="text-[10px] font-bold">Tổng quan</span>
        </NavLink>
        <NavLink
          to="/orders"
          className={({ isActive }) =>
            `flex flex-col items-center gap-1 p-2 transition-colors ${
              isActive
                ? "text-primary"
                : "text-gray-400 dark:text-gray-500 hover:text-primary dark:hover:text-primary"
            }`
          }
        >
          <span className="material-symbols-outlined">receipt_long</span>
          <span className="text-[10px] font-medium">Đơn hàng</span>
        </NavLink>

        {/* <button
          type="button"
          className="flex -mt-8 items-center justify-center h-14 w-14 rounded-full bg-primary shadow-lg shadow-primary/40 text-white transition-transform active:scale-95"
        >
          <span
            className="material-symbols-outlined"
            style={{ fontSize: "28px" }}
          >
            add
          </span>
        </button> */}
        <NavLink
          to="/menu"
          className={({ isActive }) =>
            `flex flex-col items-center gap-1 p-2 transition-colors ${
              isActive
                ? "text-primary"
                : "text-gray-400 dark:text-gray-500 hover:text-primary dark:hover:text-primary"
            }`
          }
        >
          <span className="material-symbols-outlined">menu_book</span>
          <span className="text-[10px] font-medium">Thực đơn</span>
        </NavLink>
        <NavLink
          to="/tables"
          className={({ isActive }) =>
            `flex flex-col items-center gap-1 p-2 transition-colors ${
              isActive
                ? "text-primary"
                : "text-gray-400 dark:text-gray-500 hover:text-primary dark:hover:text-primary"
            }`
          }
        >
          <span className="material-symbols-outlined">table_restaurant</span>
          <span className="text-[10px] font-medium">Bàn</span>
        </NavLink>
        <NavLink
          to="/users"
          className={({ isActive }) =>
            `flex flex-col items-center gap-1 p-2 transition-colors ${
              isActive
                ? "text-primary"
                : "text-gray-400 dark:text-gray-500 hover:text-primary dark:hover:text-primary"
            }`
          }
        >
          <span className="material-symbols-outlined">contacts_product</span>
          <span className="text-[10px] font-medium">Nhân viên</span>
        </NavLink>
      </nav>
    </div>
  );
};
