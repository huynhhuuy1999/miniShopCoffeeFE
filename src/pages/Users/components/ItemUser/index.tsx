import { TYPE_USER } from "@/constants";

interface IItemUser {
  bg?: string;
  name?: string;
  typeUser?: number;
}

export const ItemUser: React.FC<IItemUser> = ({ bg, name, typeUser }) => {
  return (
    <div className="flex items-center gap-4 bg-white dark:bg-[#2d1e18] px-3 py-3 rounded-2xl justify-between shadow-sm border border-gray-50 dark:border-gray-800/50">
      <div className="flex items-center gap-3">
        <div
          className="bg-center bg-no-repeat aspect-square bg-cover rounded-full h-14 w-14 border-2 border-primary/10"
          data-alt="Portrait of a cheerful male waiter"
          style={{
            backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuA5hpQTtdKIt0B318yhMuKK4Y91yPebk2cp6QpxnVcxLZNA7F4jBjcuxVBO-kttLt-6ZFGdhFMyJJ-PSBosaaimEgy0NxK2YwaWzCqIp-MpznPEzhdNMtTh8Gms1HdJHaocxArTAVXRMFpIkg7rtQHClUeBVdhZ8tBnIKHFHiY_7p9lvacFllVGak93IsI4ahFaoZ_yJqsRK05GXfD3EmPAFIW16j3k9qnzygrKZ0fcBM3Dc8SQ-w-Fa8-D8u1X6-87gJHyJa7Z-3lV")`,
          }}
        ></div>
        <div className="flex flex-col justify-center">
          <p className="text-blackCustom dark:text-white text-base font-bold leading-tight font-display">
            {name}
          </p>
          <div className="flex items-center gap-1 mt-1">
            {typeUser === TYPE_USER.ADMIN ? (
              <>
                <span className="inline-block w-2 h-2 rounded-full bg-primary"></span>
                <p className="text-primary text-xs font-semibold leading-normal font-display">
                  Quản trị viên
                </p>
              </>
            ) : (
              <p className="text-gray-500 dark:text-gray-400 text-xs font-medium leading-normal font-display mt-1">
                Nhân viên pha chế
              </p>
            )}
          </div>
        </div>
      </div>
      <div className="flex items-center gap-1">
        <button className="p-2 text-gray-400 hover:text-primary transition-colors">
          <span className="material-symbols-outlined">edit</span>
        </button>
        <button className="p-2 text-gray-400 hover:text-red-500 transition-colors">
          <span className="material-symbols-outlined">delete</span>
        </button>
      </div>
    </div>
  );
};
