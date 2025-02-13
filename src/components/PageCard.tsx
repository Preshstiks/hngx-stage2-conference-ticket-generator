interface PageCardProps {
  title: string;
  step: number;
  children: React.ReactNode;
  isBooked?: boolean;
}
const PageCard: React.FC<PageCardProps> = ({
  title,
  step,
  isBooked,
  children,
}) => {
  return (
    <div className="max-w-[700px] w-full bg-[#041E23] mx-auto mt-[50px] sm:p-[48px] p-[24px] border rounded-[40px] border-tertiary">
      <div>
        <div className="flex items-center justify-between">
          <h1 className="sm:text-[32px] text-[24px] font-jejuRegular text-white">
            {title}
          </h1>
          <h1 className="text-white font-robotoRegular">{`Step ${step}/3`}</h1>
        </div>
        <div className="w-full h-[4px] rounded-[5px] bg-tertiary mt-[8px]">
          <div className="w-[232px] h-full bg-blue rounded-[5px]"></div>
        </div>
        {!isBooked ? (
          <div className="sm:border border-tertiary rounded-[32px] sm:p-[24px] mt-[24px] sm:bg-[#08252B]">
            {children}
          </div>
        ) : (
          <>{children}</>
        )}
      </div>
    </div>
  );
};

export default PageCard;
