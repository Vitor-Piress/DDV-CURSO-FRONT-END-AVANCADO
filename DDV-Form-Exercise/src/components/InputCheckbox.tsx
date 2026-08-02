import type { InputHTMLAttributes } from "react";

type RadioProps = {
  title?: string;
  name?: string;
} & InputHTMLAttributes<HTMLInputElement>;

export const InputCheckbox = ({
  title,
  name = "selection",
  ...rest
}: RadioProps) => {
  return (
    <label className="cursor-pointer" htmlFor={title}>
      <input
        {...rest}
        id={title}
        type="checkbox"
        name={name}
        value={title}
        className="peer sr-only"
      />

      <div className="flex flex-col items-center justify-center w-44 h-44 border-4 border-[#CC58F6] rounded-2xl text-xl text-[#CC58F6] font-bold transition-all hover:border-purple-300 peer-checked:bg-[#CC58F6] peer-checked:text-white">
        <span>{title}</span>
      </div>
    </label>
  );
};
