import { InputCheckbox } from "../components/InputCheckbox";

export const FormServices = () => {
  return (
    <>
      <div className="flex items-center gap-4">
        <InputCheckbox
          name="Website"
          title="Website"
          type="text"
          placeholder="Digite seu Nome"
        ></InputCheckbox>
        <InputCheckbox
          name="E-Commerce"
          title="E-Commerce"
          type="text"
          placeholder="Digite seu Sobrenome"
        ></InputCheckbox>
        <InputCheckbox
          name="Mobile"
          title="Mobile App"
          type="Date"
        ></InputCheckbox>
      </div>
    </>
  );
};
