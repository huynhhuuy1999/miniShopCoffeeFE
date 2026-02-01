import type { ICardHome } from "@/models";

export const CardHome: React.FC<ICardHome> = ({ name, image, onClick }) => {
  return (
    <div className="flex flex-col items-center w-[45%]" onClick={onClick}>
      <img src={image} alt={name} className="w-[45%] aspect-square " />
      <span>{name}</span>
    </div>
  );
};
