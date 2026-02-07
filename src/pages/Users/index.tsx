import { HeaderTitle, Plus, SearchBar } from "@/components";
import { useUser } from "@/stores/users";
import { useEffect } from "react";
import { FilterUser, ListUser, Search } from "./components";

export const Users = () => {
  return (
    <div className="mx-auto max-w-md relative overflow-x-hidden">
      <HeaderTitle title="Quản lý Người dùng" />
      <div className="mt-16 fixed w-full max-w-md top-0">
        <SearchBar />
        <FilterUser />
      </div>
      <ListUser />
      <Plus />
    </div>
  );
};
