import { HeaderTitle } from "@/components";
import { useEffect, useRef } from "react";
import { Outlet, useLocation, useMatches } from "react-router";

export const NoFooterLayout = () => {
  const mainRef = useRef<HTMLElement>(null);
  const { pathname } = useLocation();
  const matches = useMatches();
  const current: any = matches[matches.length - 1];
  const title: string = current?.handle?.title || "";

  useEffect(() => {
    mainRef.current?.scrollTo({ top: 0, behavior: "instant" });
  }, [pathname]);
  return (
    <div className="bg-background-light dark:bg-background-dark font-display text-blackCustom dark:text-white h-screen flex flex-col overflow-hidden relative">
      <main
        ref={mainRef}
        className="flex-1 overflow-y-auto no-scrollbar max-w-md w-full m-auto shadow-xl"
      >
        <div className="relative flex h-full min-h-screen w-full flex-col overflow-x-hidden max-w-md mx-auto bg-background-light dark:bg-background-dark font-display antialiased text-blackCustom dark:text-white shadow-xl">
          <HeaderTitle title={title} />
          <div className="mt-16">
            <Outlet />
          </div>
        </div>
      </main>
    </div>
  );
};
