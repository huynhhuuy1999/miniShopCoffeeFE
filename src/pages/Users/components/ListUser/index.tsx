import { TYPE_USER } from "@/constants";
import { ItemUser } from "../ItemUser";

export const ListUser = () => {
  return (
    <div className="mt-[47%]">
      <div className="px-4 pb-2">
        <p className="text-gray-500 dark:text-gray-400 text-xs font-bold uppercase tracking-widest font-display">
          Danh sách (12)
        </p>
      </div>

      <div className="flex flex-col gap-1 px-2">
        <ItemUser name="Lê Thị Bình" typeUser={TYPE_USER.ADMIN} />
        <ItemUser name="Lê Thị Bình" typeUser={TYPE_USER.STAFF} />
        <ItemUser name="Lê Thị Bình" typeUser={TYPE_USER.STAFF} />
        <ItemUser name="Lê Thị Bình" typeUser={TYPE_USER.STAFF} />
        <ItemUser name="Lê Thị Bình" typeUser={TYPE_USER.STAFF} />
        <ItemUser name="Lê Thị Bình" typeUser={TYPE_USER.STAFF} />
        <ItemUser name="Lê Thị Bình" typeUser={TYPE_USER.STAFF} />
        <ItemUser name="Lê Thị Bình" typeUser={TYPE_USER.STAFF} />
        <ItemUser name="Lê Thị Bình" typeUser={TYPE_USER.STAFF} />
        <ItemUser name="Lê Thị Bình" typeUser={TYPE_USER.STAFF} />
      </div>
    </div>
  );
};
