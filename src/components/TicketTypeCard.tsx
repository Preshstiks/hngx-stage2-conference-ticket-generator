interface Card {
  title: string;
  numberLeft: number;
  amount: string;
}
interface TicketTypeCardProps {
  cards: Card[];
  setFieldValue: (field: string, value: string) => void;
  selectedTicket: string;
}

export const TicketTypeCard: React.FC<TicketTypeCardProps> = ({
  cards,
  setFieldValue,
  selectedTicket,
}) => {
  return (
    <div className="grid sm:grid-cols-3 grid-cols-1 gap-4">
      {cards.map((card, index) => (
        <div
          key={index}
          onClick={() => setFieldValue("selectedTicket", card.title)}
          className={`w-full flex h-[110px] p-[12px] cursor-pointer rounded-[12px] items-center justify-between 
            ${
              selectedTicket === card.title
                ? "bg-tertiary border border-[#2BA4B9]"
                : "border-[#197686] border-2"
            }
          `}
        >
          <div>
            <div className="h-[38px] rounded-[8px] font-robotoSemiBold text-[20px]">
              {card.amount}
            </div>
            <h1 className="uppercase font-robotoRegular pb-1">{card.title}</h1>
            <h1 className="font-robotoRegular text-[14px]">
              {card.numberLeft}/52
            </h1>
          </div>
        </div>
      ))}
    </div>
  );
};
