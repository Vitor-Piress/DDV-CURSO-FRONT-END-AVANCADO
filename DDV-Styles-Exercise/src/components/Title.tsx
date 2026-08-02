import icon from "../assets/icon.svg";

export const Title = () => {
  return (
    <h1 className="flex gap-2.5 text-white font-light text-5xl">
      Nossos Planos <img src={icon} alt="Ícone" />
    </h1>
  );
};
