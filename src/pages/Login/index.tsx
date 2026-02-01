import { useState } from "react";
import { Header, InputCustom, Welcome } from "./components";

export const Login = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleLogin = () => {
    console.log(username, password);
  };

  return (
    <div className="bg-background-light dark:bg-background-dark font-display text-gray-900 dark:text-gray-100 antialiased overflow-x-hidden m-0 p-0">
      <div className="relative flex min-h-screen w-full flex-col justify-between max-w-md mx-auto bg-background-light dark:bg-background-dark shadow-xl overflow-hidden">
        {/* <!-- Main Content Wrapper --> */}
        <div className="flex-1 flex flex-col">
          {/* <!-- Header Image Section --> */}
          <div className="@container w-full">
            {/* <!-- Using slightly tighter padding for mobile aesthetic --> */}
            <Header />
          </div>
          {/* <!-- Welcome Text --> */}
          <Welcome />
          {/* <!-- Login Form --> */}
          <div className="flex flex-col gap-5 px-6 py-4">
            {/* <!-- Username Field --> */}
            <label className="flex flex-col w-full">
              <span className="text-gray-700 dark:text-gray-300 text-sm font-medium leading-normal pb-2">
                Username or Staff ID
              </span>
              <InputCustom
                type="text"
                placeholder="Username hoặc SĐT"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                icon={
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden
                  >
                    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                  </svg>
                }
              />
            </label>
            {/* <!-- Password Field --> */}
            <label className="flex flex-col w-full">
              <span className="text-gray-700 dark:text-gray-300 text-sm font-medium leading-normal pb-2">
                Password
              </span>
              <InputCustom
                type={showPassword ? "text" : "password"}
                placeholder="Mật khẩu"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                icon={
                  <button
                    className="text-gray-400 dark:text-gray-500 hover:text-primary dark:hover:text-primary transition-colors flex items-center justify-center size-full min-w-0 focus:outline-none shrink-0"
                    type="button"
                    onClick={() => setShowPassword((prev) => !prev)}
                    aria-label={showPassword ? "Ẩn mật khẩu" : "Hiện mật khẩu"}
                  >
                    {!showPassword ? (
                      <svg
                        className="w-6 h-6"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden
                      >
                        <path d="M12 7c2.76 0 5 2.24 5 5 0 .65-.13 1.26-.36 1.83l2.92 2.92c1.51-1.26 2.7-2.89 3.43-4.75-1.73-4.39-6-7.5-11-7.5-1.4 0-2.74.25-3.98.7l2.16 2.16C10.74 7.13 11.35 7 12 7zM2 4.27l2.28 2.28.46.46C3.08 8.3 1.78 10.02 1 12c1.73 4.39 6 7.5 11 7.5 1.55 0 3.03-.3 4.38-.84l.42.42L19.73 22 21 20.73 3.27 3 2 4.27zM7.53 9.8l1.55 1.55c-.05.21-.08.43-.08.65 0 1.66 1.34 3 3 3 .22 0 .44-.03.65-.08l1.55 1.55c-.67.33-1.41.53-2.2.53-2.76 0-5-2.24-5-5 0-.79.2-1.53.53-2.2zm4.31-.78l3.15 3.15.02-.16c0-1.66-1.34-3-3-3l-.17.01z" />
                      </svg>
                    ) : (
                      <svg
                        className="w-6 h-6"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden
                      >
                        <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5-1.4 0-2.74.25-3.98.7l2.16 2.16C10.74 7.13 11.35 7 12 7zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z" />
                      </svg>
                    )}
                  </button>
                }
              />
            </label>
            {/* <!-- Forgot Password --> */}
            <div className="flex justify-end">
              <a
                className="text-primary hover:text-primary/80 text-sm font-medium leading-normal transition-colors"
                href="#"
              >
                Forgot Password?
              </a>
            </div>
            {/* <!-- Login Button --> */}
            <button
              onClick={handleLogin}
              className="w-full h-14 mt-2 bg-primary hover:bg-red-600 active:scale-[0.98] transition-all text-white rounded-xl text-lg font-bold shadow-lg shadow-orange-900/10 flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Login</span>
              <span className="material-symbols-outlined text-[20px]">
                Login
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
