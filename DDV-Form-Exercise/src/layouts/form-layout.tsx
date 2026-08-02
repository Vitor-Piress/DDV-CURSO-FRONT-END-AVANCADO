import { useState } from "react";
import { ProgressBar } from "../components/ProgressBar/ProgressBar";
import { TitleHeader } from "../components/TitleHeader";
import { Button } from "../components/Button";
import { FormUserData } from "./FormUserData";
import { FormServices } from "./FormServices";
import { FormTextArea } from "./FormTextArea";
import icon from "../assets/icon.svg";

export const FormLayout = () => {
  const [next, setNext] = useState(1);

  const formRender = () => {
    switch (next) {
      case 1:
        return (
          <>
            <h2 className="text-center font-bold text-xl">Dados Pessoais</h2>
            <FormUserData></FormUserData>
          </>
        );
      case 2:
        return (
          <>
            <h2 className="text-center font-bold text-xl">
              Com o que podemos te ajudar?
            </h2>
            <FormServices></FormServices>
          </>
        );
      case 3:
        return (
          <>
            <h2 className="text-center font-bold text-xl">
              Nos fale mais sobre a sua demanda...
            </h2>
            <FormTextArea></FormTextArea>
          </>
        );
      case 4:
        return (
          <>
            <h2 className="text-center font-bold text-xl">
              Obrigado pela escolha! Entraremos em contato assim que possível ;)
            </h2>
            <div className="flex items-center justify-center h-full">
              <img src={icon} alt="" />
            </div>
          </>
        );
    }
  };

  return (
    <div className="flex flex-col justify-center item-center gap-4 h-142 w-156 p-8 border-[#d9d9d9] border rounded-lg">
      <TitleHeader
        title="Encomendar Serviço"
        paragraph="Preencha o formulário com suas informações para prosseguirmos com o pedido"
      ></TitleHeader>
      <ProgressBar actualLenght={next}></ProgressBar>
      {formRender()}
      <footer
        className={`flex ${next == 1 ? "justify-end" : null} ${next > 1 && next != 4 ? "justify-between" : null} ${next == 4 ? "justify-center" : null} mt-auto`}
      >
        {next > 1 && next != 4 ? (
          <Button
            variant="secondary"
            onClick={() => setNext((prevState) => prevState - 1)}
          >
            Retornar
          </Button>
        ) : null}
        {next == 4 ? (
          <Button variant="third" onClick={() => setNext(1)}>
            Concluir
          </Button>
        ) : null}
        {next == 4 ? null : (
          <Button onClick={() => setNext((prevState) => prevState + 1)}>
            Prosseguir
          </Button>
        )}
      </footer>
    </div>
  );
};
