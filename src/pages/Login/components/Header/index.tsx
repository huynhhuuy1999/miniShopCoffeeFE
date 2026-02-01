export const Header = () => {
  return (
    <div className="p-0 sm:p-4">
      <div
        className={`relative bg-cover bg-center flex flex-col justify-end 
            overflow-hidden h-[300px] sm:rounded-b-2xl sm:rounded-t-lg shadow-md
            bg-no-repeat`}
        data-alt="Barista pouring latte art into a coffee cup seen from above"
        style={{
          backgroundImage: "url('/src/assets/coffee.jpg')",
        }}
      >
        <div className="flex flex-col p-6 z-10">
          <h1 className="text-white tracking-tight text-[32px] font-bold leading-tight drop-shadow-md">
            Coffee Admin
          </h1>
          <p className="text-white/90 text-sm font-medium mt-1">
            Management Portal
          </p>
        </div>
      </div>
    </div>
  );
};
