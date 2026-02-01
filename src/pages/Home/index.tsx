import {
  CardOrderItem,
  CardProductBest,
  CardSumOrder,
  Chart,
  Greeting,
  Header,
  Revenue,
  TimeFilter,
} from "./components";

export const Home = () => {
  return (
    <>
      <Header />
      <Greeting />
      <TimeFilter />
      <div className="grid grid-cols-2 gap-3 p-4">
        <Revenue />
        <CardSumOrder name="Đơn hàng" value={45} valueChange={5} />
        <CardSumOrder name="Trung bình đơn" value={55} valueChange={2} />
      </div>
      <Chart />
      <div className="px-4 pb-2">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-lg font-bold">Đơn mới nhất</h3>
          <button className="text-primary text-sm font-medium hover:underline">
            Xem tất cả
          </button>
        </div>
        <div className="flex flex-col gap-3">
          <CardOrderItem
            name="Bàn 04"
            orderId="1023"
            numberOfItem={2}
            orderValue={35000}
            statusOrder={1}
            typeOrder={1}
          />
          <CardOrderItem
            name="Mang về"
            orderId="1024"
            numberOfItem={2}
            orderValue={35000}
            statusOrder={1}
            typeOrder={1}
          />
          <CardOrderItem
            name="Bàn 04"
            orderId="1023"
            numberOfItem={2}
            orderValue={35000}
            statusOrder={1}
            typeOrder={1}
          />
        </div>
      </div>
      <div className="px-4 pb-6 mt-4">
        <h3 className="text-lg font-bold mb-3">Món bán chạy</h3>
        <div className="flex gap-4 overflow-x-auto no-scrollbar pb-2">
          <CardProductBest name="Cà phê sữa đá" number={120} />
          <CardProductBest name="Trà đào cam sả" number={85} />
          <CardProductBest name="Latte nóng" number={60} />
        </div>
      </div>
    </>
  );
};
