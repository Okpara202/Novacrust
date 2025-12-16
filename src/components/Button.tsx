interface ButtonProps {
  text: string;
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
}

export default function Button({
  text,
  className = "",
  onClick,
  type = "button",
  disabled = false,
}: ButtonProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`mt-8 sm:mt-10 w-full mb-8 sm:mb-10 bg-green hover:bg-green-600 transition-colors duration-200 
      py-4 sm:py-5 px-6 sm:px-10 rounded-[30px] text-white text-sm sm:text-base leading-[100%] font-bold 
      button disabled:opacity-70 disabled:cursor-not-allowed ${className}`}
    >
      {text}
    </button>
  );
}
