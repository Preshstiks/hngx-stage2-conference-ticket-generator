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
              ? "bg-secondary border-[#197686]"
              : " border-[#07373F]"
          } w-full flex h-[65px] p-[8px] cursor-pointer rounded-[12px] items-center justify-between border`}
        >
          <div>
            <h1 className="uppercase  font-robotoRegular">{card.title}</h1>
            <h1 className="font-robotoRegular">{`${card.numberLeft} left!`}</h1>
          </div>
          <div className="max-w-[80px] w-full h-[38px] flex justify-end items-center rounded-[8px] bg-tertiary font-robotoSemiBold border border-[#2BA4B9] p-[8px] text-[20px]">
            {card.amount}
          </div>
        </div>
      ))}
    </div>
  );
};

export default TicketTypeCard;
