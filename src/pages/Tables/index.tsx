import { useState } from "react";
import type { FilterValue } from "./components/TableFilter";
import { AddTable, Header, TableCard, TableFilter } from "./components";
import { Modal, Plus } from "@/components";
import { useNavigate } from "react-router";

export const Table = () => {
  const navigate = useNavigate();
  const [filter, setFilter] = useState<FilterValue>("all");
  const [showModal, setShowModal] = useState<boolean>(false);
  const onClickTable = (idOrder: string) => {
    navigate(`/orders/${idOrder}`);
  };

  return (
    <div className="bg-background-light dark:bg-background-dark font-display text-blackCustom dark:text-white overflow-x-hidden min-h-screen flex flex-col antialiased selection:bg-primary selection:text-white">
      <Header />
      <TableFilter value={filter} onChange={setFilter} />
      <div className="flex-1 px-4 mt-[38%]">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 md:gap-4">
          <TableCard
            name="Bàn 01"
            occupied
            duration="1h 20m"
            onMore={() => {}}
            onClick={() => onClickTable("123")}
          />
          <TableCard name="Bàn 02" occupied={false} />
          <TableCard
            name="Bàn 03"
            occupied
            duration="0h 45m"
            onMore={() => {}}
            onClick={() => onClickTable("123")}
          />
          <TableCard name="Bàn 04" occupied={false} />
          <TableCard name="Bàn 05" occupied={false} />
          <TableCard
            name="Bàn 06"
            occupied
            duration="2h 10m"
            onMore={() => {}}
          />
          <TableCard name="Bàn 07" occupied={false} />
          <TableCard name="Bàn 08" occupied={false} />
        </div>
      </div>

      <Plus onClick={() => setShowModal(!showModal)} />
      <Modal
        open={showModal}
        onClose={() => {
          setShowModal(false);
        }}
        title="Thêm bàn mới"
      >
        <AddTable />
      </Modal>
    </div>
  );
};
