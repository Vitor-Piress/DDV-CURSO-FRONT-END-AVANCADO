import { useState, type SyntheticEvent } from "react";
import { Input } from "../components/Input";

// Instanciando tipagem para o Objeto de useState()
type FormValues = {
  email: string;
  password: string;
  confirmPassword: string;
};

// Instanciando componente
export const FormExample = () => {
  // Instanciando regex para verificação do e-mail
  const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

  //   Instanciando useState para os valores atuais dos inputs
  const [formValues, setFormValues] = useState<FormValues>({
    email: "",
    password: "",
    confirmPassword: "",
  });

  //   Instanciando useState para os valores dos erros dos inputs
  const [formErrors, setformErrors] = useState<FormValues>({
    email: "",
    password: "",
    confirmPassword: "",
  });

  //   Instanciando função para ldiar com o submit do formulário
  function handleSubmit(event: SyntheticEvent<HTMLFormElement>) {
    event.preventDefault();

    // console.log(formValues);

    // Setando default caso não haja erros (evita o else nas condicionais)
    setformErrors({
      email: "",
      password: "",
      confirmPassword: "",
    });

    // Condicionais
    if (!emailRegex.test(formValues.email)) {
      setformErrors((prevState) => ({
        ...prevState,
        email: "O e-mail não confere!",
      }));
    }
    if (formValues.password !== formValues.confirmPassword) {
      setformErrors((prevState) => ({
        ...prevState,
        confirmPassword: "As senhas não conferem",
      }));
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <h1>Registre-se</h1>
      {/* Componente Input personalizado */}
      <Input
        label="Digite seu e-mail:"
        // Definindo a mensagem de erro para ser renderizada no nosso componente personalizado do input
        errorMessage={formErrors.email}
        // Definindo a cada mudança o valor no nosso Objeto do useState()
        onChange={(event) =>
          setFormValues((prevState) => ({
            ...prevState,
            email: event.target.value,
          }))
        }
        type="email"
        name="email"
        id="email"
        // Definindo o valor do input ao valor correspondente no Objeto do useState()
        value={formValues.email}
      />
      <Input
        label="Digite sua senha:"
        // Definindo a mensagem de erro para ser renderizada no nosso componente personalizado do input
        errorMessage={formErrors.password}
        // Definindo a cada mudança o valor no nosso Objeto do useState()
        onChange={(event) =>
          setFormValues((prevState) => ({
            ...prevState,
            password: event.target.value,
          }))
        }
        type="password"
        name="password"
        id="password"
        // Definindo o valor do input ao valor correspondente no Objeto do useState()
        value={formValues.password}
      />
      <Input
        label="Confirme sua senha:"
        // Definindo a mensagem de erro para ser renderizada no nosso componente personalizado do input
        errorMessage={formErrors.confirmPassword}
        // Definindo a cada mudança o valor no nosso Objeto do useState()
        onChange={(event) =>
          setFormValues((prevState) => ({
            ...prevState,
            confirmPassword: event.target.value,
          }))
        }
        type="password"
        name="confirmPassword"
        id="confirmPassword"
        // Definindo o valor do input ao valor correspondente no Objeto do useState()
        value={formValues.confirmPassword}
      />
      <button>Register</button>
    </form>
  );
};
