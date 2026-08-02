import { Input } from "../components/Input";

export const FormUserData = () => {
  return (
    <>
      <div className="flex items-center gap-1">
        <Input
          name="Nome"
          title="Nome"
          type="text"
          placeholder="Digite seu Nome"
        ></Input>
        <Input
          name="Sobrenome"
          title="Sobrenome"
          type="text"
          placeholder="Digite seu Sobrenome"
        ></Input>
      </div>
      <div className="flex items-center gap-1">
        <Input name="Nascimento" title="Data de Nascimento" type="Date"></Input>
        <Input
          name="email"
          title="E-mail"
          type="email"
          placeholder="Digite seu e-mail"
        ></Input>
      </div>
      <div className="flex items-center gap-1">
        <Input
          name="Address"
          title="Endereço"
          type="Text"
          placeholder="Digite seu endereço"
        ></Input>
      </div>
    </>
  );
};
