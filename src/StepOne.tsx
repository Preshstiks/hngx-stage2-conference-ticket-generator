import PageCard from "./components/PageCard";
import TicketTypeCard from "./components/TicketTypeCard";

const StepOne = () => {
  const cardDetails = [
    { title: "Regular Access", numberLeft: 20, amount: "Free" },
    { title: "VIP Access", numberLeft: 20, amount: "$50" },
    { title: "VVIP Access", numberLeft: 20, amount: "$150" },
  ];
  return (
    <PageCard title="Ticket Selection" step={1}>
      <div className="rounded-[24px] bg-radialCard text-center h-[200px] max-w-[556px] w-full border-x border-b border-[#07373F]">
        <h1 className="text-[62px] font-roadrageRegular text-white">
          Techember Fest ”25
        </h1>
        <h1 className="text-white mb-2 font-robotoRegular w-[340px] mx-auto">
          Join us for an unforgettable experience at [Event Name]! Secure your
          spot now.
        </h1>
        <div className="text-white flex items-center justify-center gap-[16px] font-robotoRegular">
          <h1>📍 [Event Location]</h1>
          <h1>| |</h1>
          <h1>March 15, 2025 | 7:00 PM</h1>
        </div>
      </div>
      <div className="w-full h-[4px] rounded-[5px] bg-[#07373F] my-10"></div>
      <div>
        <h1 className="text-light font-robotoRegular">Select Ticket Type:</h1>
        <div className="min-h-[186px] p-4 w-full bg-[#052228] border border-[#07373F] rounded-[24px] text-white">
          <TicketTypeCard cards={cardDetails} />
        </div>
      </div>
      <div>
        <div>
          <label className="font-robotoRegular text-white">
            Number of Tickets
          </label>
        </div>
      </div>
    </PageCard>
  );
};

export default StepOne;
