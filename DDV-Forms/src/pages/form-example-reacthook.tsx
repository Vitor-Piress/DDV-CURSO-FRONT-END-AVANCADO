import { Input } from "../components/Input";
import { useForm } from "react-hook-form";
import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

// Instanciando schema como objeto z com a biblioteca zod
const schema = z
  .object({
    email: z.string().email("E-mail inválido!"),
    password: z.string().min(6, "A senha deve conter no mínimo 06 caracteres!"),
    confirmPassword: z
      .string()
      .min(6, "A senha deve conter no mínimo 06 caracteres!"),
  })
  // Condição para caso password != confirmPassword
  .refine((data) => data.password === data.confirmPassword, {
    message: "As senhas não conferem!",
    path: ["confirmPassword"],
  });

// Instanciando tipagem para o Objeto de useState()
export type FormValues = z.infer<typeof schema>;

// Instanciando componente
export const FormExampleReactHook = () => {
  // Instanciando o Hook useForm() da biblioteca react-hook-form com errors da biblioteca zod + @hookform/resolvers
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
  });

  //   Instanciando função para ldiar com o submit do formulário
  function onSubmit(data: FormValues) {
    console.log(data);
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h1>Registre-se</h1>
      {/* Componente Input personalizado */}
      <Input
        // Definindo register para alterar values e eventos dentro do input
        register={register}
        label="Digite seu e-mail:"
        // Definindo a mensagem de erro para ser renderizada no nosso componente personalizado do input
        errorMessage={errors.email?.message}
        type="email"
        name="email"
        id="email"
      />
      <Input
        // Definindo register para alterar values e eventos dentro do input
        register={register}
        label="Digite sua senha:"
        // Definindo a mensagem de erro para ser renderizada no nosso componente personalizado do input
        errorMessage={errors.password?.message}
        type="password"
        name="password"
        id="password"
      />
      <Input
        // Definindo register para alterar values e eventos dentro do input
        register={register}
        label="Confirme sua senha:"
        // Definindo a mensagem de erro para ser renderizada no nosso componente personalizado do input
        errorMessage={errors.confirmPassword?.message}
        type="password"
        name="confirmPassword"
        id="confirmPassword"
      />
      <button>Register</button>
    </form>
  );
};
