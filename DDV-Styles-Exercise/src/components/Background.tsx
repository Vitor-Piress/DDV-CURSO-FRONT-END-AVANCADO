import type { HTMLAttributes, ReactNode } from "react";

export type BackgroundProps = {
  children: ReactNode;
} & HTMLAttributes<HTMLDivElement>;

export const Background = ({ children, ...rest }: BackgroundProps) => {
  return (
    <div
      id="background"
      className="flex flex-col gap-10 justify-center items-center w-screen h-screen bg-linear-to-r from-[#407cfc] to-[#6431fe]"
      {...rest}
    >
      {children}
    </div>
  );
};
