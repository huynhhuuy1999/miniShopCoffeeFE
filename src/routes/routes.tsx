import { createBrowserRouter } from "react-router";
import { MainLayout, NoFooterLayout } from "@/layouts";
import { Home } from "@/pages/Home";
import { Users } from "@/pages/Users";
import { Login } from "@/pages/Login";
import { Menu } from "@/pages/Menu";
import { Table } from "@/pages/Tables";
import { Order } from "@/pages/Order";
import { DetailOrder } from "@/pages/DetailOrder";
import { InfoPersonal } from "@/pages/InfoPersonal";
import { UpdateUser } from "@/pages/UpdateUser";
import { CreateUser } from "@/pages/CreateUser";

export const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },

  {
    path: "/",
    element: <NoFooterLayout />,
    children: [
      {
        path: "info-personal",
        element: <InfoPersonal />,
        handle: { title: "Hồ sơ cá nhân" },
      },
      {
        path: "orders/:orderId",
        element: <DetailOrder />,
        handle: { title: "Chi tiết đơn hàng" },
      },

      {
        path: "update-user",
        element: <UpdateUser />,
        handle: { title: "Cập nhật thông tin" },
      },
      {
        path: "create-user",
        element: <CreateUser />,
        handle: { title: "Tạo tài khoản" },
      },
    ],
  },
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "tables",
        element: <Table />,
      },
      {
        path: "users",
        element: <Users />,
      },
      {
        path: "orders",
        element: <Order />,
      },
      {
        path: "menu",
        element: <Menu />,
      },
    ],
  },
]);
