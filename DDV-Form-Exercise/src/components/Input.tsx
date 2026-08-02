import type { InputHTMLAttributes } from "react";

type InputProps = {
  title?: string;
} & InputHTMLAttributes<HTMLInputElement>;

export const Input = ({ title, ...rest }: InputProps) => {
  return (
    <div className="flex flex-col w-full">
      <label htmlFor={title}>{title}</label>
      <input
        {...rest}
        id={title}
        name={title}
        className="border border-gray-500 py-3 px-2.5 rounded-lg w-full"
      />
    </div>
  );
};
