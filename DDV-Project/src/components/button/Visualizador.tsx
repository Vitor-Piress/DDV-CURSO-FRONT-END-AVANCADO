import { Fragment } from "react/jsx-runtime";

export const Visualizador = ({ count }: { count: number }) => {
  // console.log("Renderizou");

  return (
    <Fragment>
      <p>Contagem: {count}</p>
    </Fragment>
  );
};
