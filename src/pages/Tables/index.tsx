import { useEffect, useState } from "react";
import { AddTable, Header, TableCard, TableFilter } from "./components";
import { Modal, Plus } from "@/components";
import { useNavigate } from "react-router";
import { useTableStore } from "@/stores/tables";
import { TABLE_STATUS } from "@/constants";
import type { ICreateTableRequest } from "@/models";

export const Table = () => {
  const navigate = useNavigate();
  const [filter, setFilter] = useState<string>("all");
  const [showModal, setShowModal] = useState<boolean>(false);
  const onClickTable = (idOrder: string) => {
    navigate(`/orders/${idOrder}`);
  };
  const { getListTable, loading, listTable, createTable, searchTable } =
    useTableStore();

  useEffect(() => {
    getListTable();
  }, []);

  const handleCreateTable = async (dataReq: ICreateTableRequest) => {
    await createTable(dataReq);
    setShowModal(false);
    await getListTable();
  };

  useEffect(() => {
    const fetchData = async () => {
      if (filter !== "all") {
        await searchTable?.(filter);
      } else {
        await getListTable();
      }
    };
    fetchData();
  }, [filter]);

  return (
    <div className="bg-background-light dark:bg-background-dark font-display text-blackCustom dark:text-white overflow-x-hidden min-h-screen flex flex-col antialiased selection:bg-primary selection:text-white">
      <Header />
      <TableFilter value={filter} onChange={(value) => setFilter(value)} />
      <div className="flex-1 px-4 mt-[38%]">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 md:gap-4">
          {listTable?.map((table) => {
            return (
              <TableCard
                key={table.id}
                name={table.tableName}
                occupied={table.status === TABLE_STATUS.OCCUPIED}
                duration="1h 20m"
                onMore={() => {}}
                onClick={() => onClickTable(table.id.toString())}
              />
            );
          })}
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
        <AddTable
          onCancel={() => setShowModal(false)}
          onSave={(text) =>
            handleCreateTable({
              tableName: text,
              status: TABLE_STATUS.AVAILABLE,
            })
          }
        />
      </Modal>
    </div>
  );
};
