import type { InputHTMLAttributes } from "react";
import type { UseFormRegister } from "react-hook-form";
import type { FormValues } from "../pages/form-example-reacthook";

export type InputProps = {
  label: string;
  errorMessage?: string;
  register: UseFormRegister<FormValues>;
} & InputHTMLAttributes<HTMLInputElement>;

export const Input = ({
  label,
  errorMessage,
  register,
  ...rest
}: InputProps) => {
  return (
    <div>
      <label htmlFor={rest.id}>{label}</label>
      <input {...rest} {...register(rest.id as keyof FormValues)} />
      {errorMessage ? <span>{errorMessage}</span> : null}
    </div>
  );
};
