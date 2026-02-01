export const Chart = () => {
  return (
    <div className="px-4 pb-6">
      <div className="rounded-xl bg-card-light dark:bg-card-dark p-5 shadow-sm border border-gray-100 dark:border-gray-800">
        <div className="flex justify-between items-end mb-4">
          <div>
            <h3 className="text-base font-bold">Doanh thu theo giờ</h3>
            <p className="text-xs text-gray-400">Cập nhật 5 phút trước</p>
          </div>
          <div className="text-right">
            <p className="text-primary font-bold text-lg">2.5M</p>
            <p className="text-xs text-gray-400">Tổng cộng</p>
          </div>
        </div>
        <div className="relative h-40 w-full">
          {/* <!-- Custom Chart SVG with Primary Color --> */}
          <svg
            className="w-full h-full overflow-visible"
            preserveAspectRatio="none"
            viewBox="0 0 300 100"
          >
            <defs>
              <linearGradient id="chartGradient" x1="0" x2="0" y1="0" y2="1">
                <stop offset="0%" stopColor="#ee5b2b" stopOpacity="0.2"></stop>
                <stop
                  offset="100%"
                  stop-color="#ee5b2b"
                  stop-opacity="0"
                ></stop>
              </linearGradient>
            </defs>
            {/* <!-- Area --> */}
            <path
              d="M0,80 C30,75 50,40 80,30 C110,20 140,60 170,50 C200,40 230,10 260,15 C280,18 290,25 300,30 V100 H0 Z"
              fill="url(#chartGradient)"
            ></path>
            {/* <!-- Line --> */}
            <path
              d="M0,80 C30,75 50,40 80,30 C110,20 140,60 170,50 C200,40 230,10 260,15 C280,18 290,25 300,30"
              fill="none"
              stroke="#ee5b2b"
              stroke-linecap="round"
              stroke-width="3"
            ></path>
            {/* <!-- Points --> */}
            <circle
              className="dark:stroke-card-dark stroke-white"
              cx="80"
              cy="30"
              fill="#ee5b2b"
              r="3"
              stroke-width="2"
            ></circle>
            <circle
              className="dark:stroke-card-dark stroke-white"
              cx="260"
              cy="15"
              fill="#ee5b2b"
              r="3"
              stroke-width="2"
            ></circle>
          </svg>
          {/* <!-- X Axis Labels --> */}
          <div className="flex justify-between text-[10px] text-gray-400 mt-2">
            <span>8h</span>
            <span>10h</span>
            <span>12h</span>
            <span>14h</span>
            <span>16h</span>
            <span>18h</span>
          </div>
        </div>
      </div>
    </div>
  );
};
