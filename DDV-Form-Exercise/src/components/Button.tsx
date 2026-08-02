import type { ButtonHTMLAttributes, ReactNode } from "react";

type ButtonVariant = "primary" | "secondary" | "third";

type ButtonProps = {
  children: ReactNode;
  variant?: ButtonVariant;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = ({
  children,
  variant = "primary",
  className,
  ...rest
}: ButtonProps) => {
  const variantClasses = {
    primary: "bg-[#CC58F6] text-white hover:bg-[#cc58f6ac]",
    secondary:
      "bg-transparent text-black border border-[#B1B1B1] hover:bg-[#b1b1b11a]",
    third:
      "bg-transparent text-black border border-[#CC58F6] hover:bg-[#cc58f627]",
  };

  return (
    <button
      {...rest}
      className={`cursor-pointer rounded-sm py-3 px-6 font-semibold ${variantClasses[variant]} ${className ?? ""}`.trim()}
    >
      {children}
    </button>
  );
};
