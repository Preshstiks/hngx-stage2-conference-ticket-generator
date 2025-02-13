interface ButtonProps {
  children: React.ReactNode;
  outline?: boolean;
  solid?: boolean;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
}
const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  outline,
  solid,
  type,
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`${
        outline
          ? " text-[#24A0B5] border border-[#24A0B5]"
          : solid
          ? "bg-[#24A0B5] text-white"
          : null
      } py-2.5 rounded-[8px] cursor-pointer font-jejuRegular w-full text-[16px]`}
    >
      {children}
    </button>
  );
};

export default Button;
