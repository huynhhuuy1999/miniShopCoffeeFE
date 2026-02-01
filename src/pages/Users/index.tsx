import { useUser } from "@/stores/users";
import { useEffect } from "react";

export const Users = () => {
  const { loading, error, fetchUsers, users } = useUser();
  useEffect(() => {
    fetchUsers();
  }, []);
  return <div>Users</div>;
};
