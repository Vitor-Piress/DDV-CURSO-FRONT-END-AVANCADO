import { useEffect, useState } from "react";
import { Visualizador } from "./button/Visualizador";

export const Contador = () => {
  // Reatividade
  const [count, setCount] = useState(0);
  //   let a = 1;
  // console.log("Renderizou");

  useEffect(() => {
    console.log("Renderizou dentro do useEffect");
  }, [count]);

  return (
    <>
      <br />
      <Visualizador count={count} />
      <button
        onClick={() => setCount((prevState) => prevState + 1)}
        type="button"
      >
        Somar +1
      </button>
    </>
  );
};
