import type { InputHTMLAttributes } from "react";

type TextareaProps = {
  title?: string;
} & InputHTMLAttributes<HTMLTextAreaElement>;

export const Textarea = ({ title, ...rest }: TextareaProps) => {
  return (
    <div className="w-full h-34">
      <textarea
        {...rest}
        id={title}
        name={title}
        className="border border-gray-500 py-3 px-2.5 rounded-lg w-full h-full resize-none alignt-top"
      />
    </div>
  );
};
