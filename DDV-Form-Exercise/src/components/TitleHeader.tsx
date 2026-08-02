import type { HTMLAttributes } from "react";

export type TitleHeaderProps = {
  title: string;
  paragraph: string;
} & HTMLAttributes<HTMLHeadingElement>;

export const TitleHeader = ({
  title,
  paragraph,
  ...rest
}: TitleHeaderProps) => {
  return (
    <header className="flex flex-col justify-center items-center gap-1 w-full">
      <h2 {...rest} className="font-bold text-3xl">
        {title}
      </h2>
      <p className="text-[#B1B1B1] text-sm ">{paragraph}</p>
    </header>
  );
};
