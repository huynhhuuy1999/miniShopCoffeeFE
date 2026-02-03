export const InfoAva = () => {
  return (
    <div className="flex flex-col items-center gap-4">
      <div className="relative group">
        <div className="w-32 h-32 rounded-full overflow-hidden ring-4 ring-primary/10 shadow-lg">
          <img
            alt="Admin Avatar"
            className="w-full h-full object-cover"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDQx823VQYnXrVoNJcWKzBcX66buvO1yTuIJv_MI4FnsFLv_Sku5ucJGk2IEvujyG5m5BzGe8k5dNEDAmS_Tu_4SosDF74jIwNZW3o80IXiqcFuAH1wUPz4ayW64cxX2Km-rGgybk5cbHHDFAYeWMtpETA0_9rcqmzToNRur1MWQDk5CNfK7rhGJXnXyQG7zYv_bgQ9tznBnghfZCfz9uECbd4Yqtty8G3J7IZMVjA8__MrQA9VXzalALf8J4HuJKk6t-KwDFqtxGXW"
          />
        </div>
        <button className="absolute h-[38px] bottom-0 right-0 bg-primary text-white p-2.5 rounded-full shadow-lg hover:bg-primary-dark transition-colors active:scale-95">
          <span
            className="material-symbols-outlined block"
            style={{ fontSize: 20 }}
          >
            photo_camera
          </span>
        </button>
      </div>
      <div className="text-center">
        <p className="text-text-secondary text-sm font-medium">
          Thay đổi ảnh đại diện
        </p>
      </div>
    </div>
  );
};
