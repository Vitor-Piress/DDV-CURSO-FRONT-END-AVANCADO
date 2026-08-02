import classNames from "classnames";
import { type ButtonHTMLAttributes, type ReactNode } from "react";

export enum BUTTON_VARIATION {
  DEFAULT = "DEFAULT",
  OUTLINE = "OUTLINE",
}

type ButtonProps = {
  children: ReactNode;
  variaton?: BUTTON_VARIATION;
} & HTMLAttributes<HTMLButtonElement>;

export const Button = ({
  children,
  variaton = BUTTON_VARIATION.DEFAULT,
  ...rest
}: ButtonProps) => {
  return (
    <button
      className={classNames(
        " text-sm font-medium py-2 rounded mt-2 transition-colors shadow-sm cursor-pointer",
        {
          "bg-[#6faeed] hover:bg-[#5b9cd8] text-white ":
            variaton == BUTTON_VARIATION.DEFAULT,
          "border border-[#6faeed] bg-white text-[#6faeed] hover:bg-[#6faeed] hover:text-white":
            variaton == BUTTON_VARIATION.OUTLINE,
        },
      )}
      {...rest}
    >
      {children}
    </button>
  );
};
