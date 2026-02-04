import type { ICardProductBest } from "@/models";

export const CardProductBest: React.FC<ICardProductBest> = ({
  name,
  image,
  number,
  onClick,
}) => {
  return (
    <div
      className="min-w-[140px] flex flex-col gap-2 rounded-xl bg-card-light dark:bg-card-dark p-2 border border-gray-100 dark:border-gray-800"
      onClick={onClick}
    >
      <div
        className="aspect-square w-full rounded-lg bg-gray-100 dark:bg-gray-800 bg-cover bg-center"
        data-alt="Close up of a glass of Vietnamese iced milk coffee"
        style={{
          backgroundImage: `url(${
            image
              ? image
              : "https://lh3.googleusercontent.com/aida-public/AB6AXuCuiDPjhhqcn6oL2xKCdN-CJrY_4GXeYXJ_lNHi3licB6RPfCB7oOaytrjTsFFDylBfmQpSezHYaecOvTahYrIFUIuARevXE0sgRoop7MStDThDvzIiSauTJcLu-CZL3s2eUMcQ7qMd2JgfJ2MZIFMHp7sndR5EVF17GMDMiK_EA7_9pxpp9JaNaRs4oJiwwEDz67xT4JfK66y9BSc2-8cxaaiNxEVzNWaI_ZuqerOV4M3FddAGI1EhxkindB0FUp0yKKMCLPigqBT2)"
          }`,
        }}
      ></div>
      <div>
        <p className="text-sm font-bold line-clamp-1">{name}</p>
        {number ? (
          <p className="text-xs text-primary font-medium">Bán {number} ly</p>
        ) : null}
      </div>
    </div>
  );
};
