import { TYPE_SELL } from "@/constants";
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
import { useNavigate } from "react-router";

export const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="relative flex min-h-screen w-full flex-col justify-between max-w-md mx-auto bg-background-light dark:bg-background-dark overflow-hidden antialiased">
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
            typeOrder={TYPE_SELL.AT_SHOP}
          />
          <CardOrderItem
            name="Mang về"
            orderId="1024"
            numberOfItem={2}
            orderValue={35000}
            statusOrder={1}
            typeOrder={TYPE_SELL.BRING_BACK}
          />
          <CardOrderItem
            name="Bàn 04"
            orderId="1023"
            numberOfItem={2}
            orderValue={35000}
            statusOrder={1}
            typeOrder={TYPE_SELL.AT_SHOP}
          />
        </div>
      </div>
      <div className="px-4 pb-6 mt-4">
        <h3 className="text-lg font-bold mb-3">Món bán chạy</h3>
        <div className="flex gap-4 overflow-x-auto no-scrollbar pb-2">
          <CardProductBest
            name="Cà phê sữa đá"
            number={120}
            onClick={() => navigate("/menu")}
          />
          <CardProductBest name="Trà đào cam sả" number={85} />
          <CardProductBest name="Latte nóng" number={60} />
        </div>
      </div>
    </div>
  );
};
