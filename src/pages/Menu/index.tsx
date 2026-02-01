import { useState } from "react";
import {
  Header,
  MenuFilter,
  MenuItemCard,
  SectionHeader,
  SearchBar,
} from "./components";
import { Plus } from "@/components";

const MENU_ITEMS = [
  {
    id: "1",
    name: "Cà phê Sữa đá",
    description: "Đậm đà hương vị Việt Nam truyền thống",
    price: "25.000đ",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDDVdCzjJ0xRe9VkkZBdCf4fQ3HxHoG4KPSmhyac109N4FWPL7tBbuiLqFOAc64ligeD51Y_Fxbm26LfbIW86uaTqFm2iFLU9N3eC8_zFUW0otzQtiRMD7qb-VIiKZqV7IOLgC5_mmWXZOqmxt69dQtK8WTPoOTcSm0luiuCqoaSTE5GpMSU7UWpwSVD32YxiOmBTwmFfsqcc2v-DdAhakFqI-5lttuIh1R7z8BfWK4aPbxn90ri0uJAuq0KSjhQASr0fPbADYhRedc",
    active: true,
    soldOut: false,
    showDelete: true,
  },
  {
    id: "2",
    name: "Bạc xỉu",
    description: "Nhiều sữa, ít cà phê, ngọt ngào",
    price: "29.000đ",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAW_P2vWAmnYmkcpsfjo-V2OYViM32wjY29bTT0p9CG03cAXcSeJKIH27Jy0Cc3FiLZQ-fYBi1ucw0wtD3H91siFIYgCbwFSbLHjIHW9e8c9gFRpiGoCuxkB9EkhSE6mjvNgMg9jNVRcdEHa8ovhy33Ucj-KOgLF6pOLOpPeeLHCKB7_LarOE3jgAZdpyb64UdkRVQ_a0tTJAukd3VYVxnpk2BvTJPZnKxXEienh40C2TAQjYHeEmfMKJ6fjSfmnaL1GI6TummYZumW",
    active: true,
    soldOut: false,
    showDelete: true,
  },
  {
    id: "3",
    name: "Croissant Trứng Muối",
    description: "Bánh sừng bò nhân trứng muối tan chảy",
    price: "45.000đ",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBOpTPHHq8wvijMc-JvhJpVFnzWn9D_olnjK93rATQ3SFOuCbVy7kmWv-e_rYx1KlW5skrEU_nfTzj5yWirxKs1Xacde9zoZfuAb2FXRyrpfoN0dbD-j6sq5HovuJ70lebc6Nm_k92DGrRye30bGuUaeFPFXmpgc006Z8T-6A-cjIvEHYYEB_4OlvMcJ8WE0SEpbKkLzMAUhQepdbwaSS-b11-5pz7h0sEvKBlqd_jdW1psvwgwZWDo4vo_vgG0ofqZiyPbzDK7kEfO",
    active: false,
    soldOut: true,
    showDelete: false,
  },
  {
    id: "4",
    name: "Trà Đào Cam Sả",
    description: "Thanh mát, giải nhiệt mùa hè",
    price: "35.000đ",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAtSrYR2cLM_cBRX-u5VnD9yFQCtED1L8nU2lGXeB2RKI9uoTVDNOx-Puw3LpO-8w2CTUuHanP9U2hQwDX7ydnRqCSqB7WPFFMc8NCJRnw2ty5RN5M057KeanbiHieMk5rv6p2fHNaA4lG3Umm_WZkQj26gkYfWEDrdz2UGbH8gluMXVcp2U8LGSja40pTUh42XRygV0dfr7NVWKH_Um1Zz7PfRZSxTpkLw9b4qhck8fC9bg0vVmw4aUPkPvGVQpHafmaW9UA3Rn916",
    active: true,
    soldOut: false,
    showDelete: false,
  },
  {
    id: "5",
    name: "Bánh Mousse Matcha",
    description: "Vị trà xanh Nhật Bản, mềm mịn",
    price: "42.000đ",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCcLVD9HILarW1h0b1Qp8ps9pd9OdCQ9N2aTHxXdHsscw9WbVKEe9oLC8NRK8b4v4khMHVocMMaAicSOXoAlj4muNfWMgj1C7mR6V8Frkv2WlmG1qHFaFDacqSQLzCFxmetJlgZ-hbvJQmeTx25s7PbMOs8e-mp9J2UXKuYct42hZlUi9jiZUzGg-du-IhTuTZ6oDVis10oCgSnQ529VSAiufClSRyGg7FE-s0VzLHfHXtBJ8NJW7UggwH9Kjttig-nRUmhrzsyh7sQ",
    active: true,
    soldOut: false,
    showDelete: false,
  },
];

export const Menu = () => {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("all");
  const [items, setItems] = useState(MENU_ITEMS);

  const handleToggleActive = (id: string, active: boolean) => {
    setItems((prev) =>
      prev.map((item) => (item.id === id ? { ...item, active } : item))
    );
  };

  const handleDelete = (id: string) => {
    setItems((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <div className="bg-background-light dark:bg-background-dark font-display antialiased text-text-main dark:text-white">
      <div className="relative flex h-full min-h-screen w-full flex-col overflow-x-hidden max-w-md mx-auto bg-white dark:bg-[#2a1a14] shadow-xl">
        <header className="sticky top-0 z-50 bg-white/95 dark:bg-[#2a1a14]/95 backdrop-blur-sm border-b border-gray-100 dark:border-gray-800">
          <Header onBack={() => {}} onAdd={() => {}} />
          <SearchBar value={search} onChange={setSearch} />
          <MenuFilter value={filter} onChange={setFilter} />
        </header>
        <main className="flex-1 flex flex-col pb-20 px-4 pt-2 gap-4">
          <SectionHeader
            title="Món nổi bật"
            actionLabel="Sắp xếp"
            onAction={() => {}}
          />
          {items.map((item) => (
            <MenuItemCard
              key={item.id}
              name={item.name}
              description={item.description}
              price={item.price}
              imageUrl={item.imageUrl}
              active={item.active}
              soldOut={item.soldOut}
              onToggleActive={(active) => handleToggleActive(item.id, active)}
              onMore={() => {}}
              onDelete={
                item.showDelete ? () => handleDelete(item.id) : undefined
              }
            />
          ))}
        </main>
        <Plus />
      </div>
    </div>
  );
};
