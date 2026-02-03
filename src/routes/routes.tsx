import { MainLayout } from "@/layouts";
import { Home } from "@/pages/Home";
import { Users } from "@/pages/Users";
import { Login } from "@/pages/Login";
import { Menu } from "@/pages/Menu";
import { Table } from "@/pages/Tables";
import { createBrowserRouter } from "react-router";
import { Test } from "@/pages/test";
import { Order } from "@/pages/Order";
import { DetailOrder } from "@/pages/DetailOrder";
import { InfoPersonal } from "@/pages/InfoPersonal";
import { UpdateUser } from "@/pages/UpdateUser";

export const router = createBrowserRouter([
  // {
  //   path: "/",
  //   element: <App />,
  // },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/orders/:orderId",
    element: <DetailOrder />,
  },
  {
    path: "/info-personal",
    element: <InfoPersonal />,
  },
  {
    path: "/update-user",
    element: <UpdateUser />,
  },
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "",
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
        path: "test",
        element: <Test />,
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
