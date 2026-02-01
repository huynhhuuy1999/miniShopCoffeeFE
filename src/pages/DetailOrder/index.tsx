import { useNavigate, useParams } from "react-router";
import {
  ActionBar,
  CustomerInfo,
  DetailOrderItem,
  Header,
  OrderItemsList,
  PaymentSummary,
  StatusCard,
} from "./components";

const ORDER_DATA = {
  orderId: "1234",
  statusLabel: "Đang chuẩn bị",
  tableName: "Bàn số 5",
  updatedAt: "10:35 AM • 12/06/2024",
  customer: {
    name: "Nguyễn Văn A",
    phone: "0909 123 456",
    note: "Mang ra cùng lúc",
  },
  items: [
    {
      id: "1",
      name: "Cà phê đen",
      price: "25.000đ",
      options: "Size M • Không đường",
      quantity: 1,
      imageUrl:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuBGH0hUcwEqfvFvkCBQ8iI3bVW6PVVocDdTnq83RiFfQIqRz65Q9cy5ZgxXQ2xga9w50mkrZkNdhKkXYHjygKkMPfx-R2oUDeyuIi9t8PXhKev6FV5QRHdMQ64nx8HnVl_2pE04T9-qKOZmy-kdyyfVCHAWgUDIaTVzPNEWh90sVu81G1nlLGumURMbf-av2uYmiZxfET1Dab2UGbkG0SsZl-h1Cf4dShgzOIQyahKkxmucSBRRYEEccM_DQ306WTGByzKjILCfJyT6",
    },
    {
      id: "2",
      name: "Bạc xỉu",
      price: "70.000đ",
      note: "Nhiều sữa",
      quantity: 2,
      unitPrice: "35.000đ",
      imageUrl:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuBbuMpxKSKNoo3hREHBgYqdxfIIkLh9spfnttiWTvgr49_xX7ucNQTpkl2qzG3RZr4t7fgUU0z4i_scLMSRipQLTKo12X1y1I4yxi71KEf8bYYwBzHadnKpUbuOjQgdrD0G-NCWOP7b9gthbC_68wy39wLo-8DR5eG6xGy2jvREBsKNTCNwiUYHNAdNOl5ct3AYy9EFf9B5zQ7mDsG2e4fL8DTCEYAxaStTx5-x54pHikoUiuug2bT7dpl6kERNzbvBAhmMBFqrQrko",
    },
  ],
  payment: {
    subtotal: "95.000đ",
    discount: "-0đ",
    total: "95.000đ",
  },
};

export const DetailOrder = () => {
  const navigate = useNavigate();
  const { orderId: orderIdParam } = useParams<{ orderId: string }>();
  const { orderId, statusLabel, tableName, updatedAt, customer, items, payment } =
    ORDER_DATA;
  const displayOrderId = orderIdParam ?? orderId;

  return (
    <div className="bg-background-light dark:bg-background-dark text-[#181311] dark:text-gray-100">
      <div className="relative flex h-full min-h-screen w-full flex-col overflow-x-hidden pb-24">
        <Header orderId={displayOrderId} onBack={() => navigate(-1)} />
        <StatusCard
          statusLabel={statusLabel}
          tableName={tableName}
          updatedAt={updatedAt}
        />
        <CustomerInfo
          customerName={customer.name}
          phone={customer.phone}
          note={customer.note}
        />
        <OrderItemsList title="Danh sách món" count={items.length}>
          {items.map((item) => (
            <DetailOrderItem
              key={item.id}
              name={item.name}
              price={item.price}
              options={item.options}
              note={item.note}
              quantity={item.quantity}
              imageUrl={item.imageUrl}
              unitPrice={item.unitPrice}
            />
          ))}
        </OrderItemsList>
        <PaymentSummary
          subtotal={payment.subtotal}
          discount={payment.discount}
          total={payment.total}
        />
        <ActionBar onCancel={() => {}} onComplete={() => {}} />
      </div>
    </div>
  );
};
