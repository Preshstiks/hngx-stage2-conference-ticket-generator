interface ButtonProps {
  children: React.ReactNode;
  outline?: boolean;
  solid?: boolean;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  id?: string;
}
const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  outline,
  solid,
  type,
  id,
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      id={id}
      className={`${
        outline
          ? " text-[#24A0B5] hover:bg-active/20 border border-[#24A0B5]"
          : solid
          ? "bg-[#24A0B5] hover:bg-[#24A0B5]/80 text-white"
          : null
      } py-2.5 rounded-[8px] cursor-pointer font-jejuRegular w-full text-[16px]`}
    >
      {children}
    </button>
  );
};

export default Button;
