export const InfoAva = () => {
  return (
    <div className="flex flex-col items-center mb-8">
      <div className="relative">
        <div className="w-32 h-32 rounded-full border-4 border-primary/20 p-1">
          <div
            className="w-full h-full rounded-full bg-center bg-cover shadow-inner"
            style={{
              backgroundImage:
                "url('https://lh3.googleusercontent.com/aida-public/AB6AXuA3NuNywOEhE9d0uGHi-2ZyqTw4QtFn7GeWSOAUHvWbnyuVv5UmgZHjyS_bAC27_9Z990iR1LrA0ZtG0_8aWFFKRywsf-b-aZGPwEzz7CWodbF_caxKt231LCmhUd7AWOD8ESDgx2ZVUVc_pLjNafpbY6ErlOFWVcpX45BKqvbEzR7HTtlUSzCnoJrLPAP6w1ife6Zod34dUYrqfbxes-h9X2-c92QGxkuMExKalHY7tRkRcL6Sbe6Y2ANEI42P6UDmwXVddFX6gRyS')",
            }}
          ></div>
        </div>
        <button className="absolute h-[38px] bottom-1 right-1 bg-primary text-white p-2 rounded-full shadow-lg border-2 border-white dark:border-[#2a1a14] active:scale-90 transition-transform">
          <span
            className="material-symbols-outlined"
            style={{ fontSize: "18px" }}
          >
            photo_camera
          </span>
        </button>
      </div>
      <h2 className="mt-4 text-2xl font-bold text-blackCustom dark:text-white">
        Nguyễn Minh Tuấn
      </h2>
      <div className="mt-1 px-3 py-1 bg-primary/10 text-primary rounded-full">
        <span className="text-xs font-bold uppercase tracking-wider">
          Quản trị viên
        </span>
      </div>
    </div>
  );
};
