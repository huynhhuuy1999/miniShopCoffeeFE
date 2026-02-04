import { useState } from "react";
import type { OrderStatus } from "./components/OrderCard";
import { EmptyState, OrderCard, OrderFilter, SearchBar } from "./components";
import { HeaderTitle, Plus } from "@/components";
import { useNavigate } from "react-router";

type OrderFilterValue = "all" | "pending" | "preparing" | "completed";

interface OrderItem {
  id: string;
  orderId: string;
  timeLabel: string;
  status: OrderStatus;
  items: string[];
  customerName: string;
  total: string;
}

const ORDERS_DATA: OrderItem[] = [
  {
    id: "1",
    orderId: "ORD-10235",
    timeLabel: "Vừa xong",
    status: "pending",
    items: ["2x Cà phê sữa đá", "1x Bánh Croissant"],
    customerName: "Nguyễn Văn A",
    total: "95.000đ",
  },
  {
    id: "2",
    orderId: "ORD-10234",
    timeLabel: "10:30 AM",
    status: "preparing",
    items: ["1x Espresso (Đá)", "1x Trà đào cam sả"],
    customerName: "Chị Lan (Bàn 4)",
    total: "85.000đ",
  },
  {
    id: "3",
    orderId: "ORD-10233",
    timeLabel: "10:15 AM",
    status: "completed",
    items: ["1x Bạc xỉu", "1x Bánh mì que Pate"],
    customerName: "Khách vãng lai",
    total: "45.000đ",
  },
  {
    id: "4",
    orderId: "ORD-10232",
    timeLabel: "09:50 AM",
    status: "completed",
    items: ["4x Trà sữa trân châu"],
    customerName: "Nhóm Cty ABC",
    total: "140.000đ",
  },
  {
    id: "5",
    orderId: "ORD-10231",
    timeLabel: "09:10 AM",
    status: "cancelled",
    items: ["1x Cappuccino"],
    customerName: "Khách vãng lai",
    total: "45.000đ",
  },
];

export const Order = () => {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState<OrderFilterValue>("all");
  const [orders] = useState<OrderItem[]>(ORDERS_DATA);

  const filteredOrders =
    filter === "all" ? orders : orders.filter((o) => o.status === filter);

  return (
    <div className="bg-background-light dark:bg-background-dark text-text-main dark:text-white antialiased transition-colors duration-200">
      <div className="relative flex h-full min-h-screen w-full flex-col overflow-x-hidden max-w-md mx-auto shadow-2xl bg-background-light dark:bg-background-dark">
        <HeaderTitle title="Quản lý Đơn hàng" />
        <SearchBar value={search} onChange={setSearch} />
        <OrderFilter value={filter} onChange={setFilter} />

        <main className="flex-1 flex flex-col w-full pb-20">
          <div className="flex flex-col gap-4 px-4 mt-2">
            {filteredOrders.length === 0 ? (
              <EmptyState />
            ) : (
              filteredOrders.map((order) => (
                <OrderCard
                  key={order.id}
                  orderId={order.orderId}
                  timeLabel={order.timeLabel}
                  status={order.status}
                  items={order.items}
                  customerName={order.customerName}
                  total={order.total}
                  onClick={() => {
                    navigate(`/orders/${order.id}`);
                  }}
                />
              ))
            )}
          </div>
        </main>

        <Plus />
      </div>
    </div>
  );
};
