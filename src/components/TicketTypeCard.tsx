import { useState } from "react";

interface Card {
  title: string;
  numberLeft: number;
  amount: string;
}

interface TicketTypeCardProps {
  cards: Card[];
}
const TicketTypeCard: React.FC<TicketTypeCardProps> = ({ cards }) => {
  const [activeCard, setActiveCard] = useState(0);
  return (
    <div className="grid grid-cols-2 gap-4">
      {cards.map((card, index) => (
        <div
          key={index}
          onClick={() => setActiveCard(index)}
          className={`${
            activeCard === index
              ? "bg-tertiary border-[#2BA4B9]"
              : " border-[#07373F]"
          } w-full flex h-[110px] p-[12px] cursor-pointer rounded-[12px] items-center justify-between border`}
        >
          <div>
            <div className=" h-[38px] rounded-[8px] font-robotoSemiBold text-[20px]">
              {card.amount}
            </div>
            <h1 className="uppercase  font-robotoRegular">{card.title}</h1>
            <h1 className="font-robotoRegular">{`${card.numberLeft} left!`}</h1>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TicketTypeCard;
