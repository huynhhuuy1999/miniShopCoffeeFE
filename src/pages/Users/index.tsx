import { HeaderTitle, Plus } from "@/components";
import { useUser } from "@/stores/users";
import { useEffect } from "react";
import { FilterUser, ListUser, Search } from "./components";

export const Users = () => {
  // const { loading, error, fetchUsers, users } = useUser();
  // useEffect(() => {
  //   fetchUsers();
  // }, []);
  return (
    <div className="body bg-background-light dark:bg-background-dark s text-[#181311] dark:text-white">
      <div className="relative flex h-auto  w-full max-w-[430px] mx-auto flex-col bg-background-light dark:bg-background-dark overflow-x-hidden ">
        <HeaderTitle title="Quản lý Người dùng" />
        <div className="mt-[18%] fixed top-0 w-full">
          <Search />
          <FilterUser />
        </div>
        <ListUser />
        <Plus />
      </div>
    </div>
  );
};
