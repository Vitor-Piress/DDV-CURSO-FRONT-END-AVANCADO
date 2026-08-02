import { Textarea } from "../components/Textarea";

export const FormTextArea = () => {
  return (
    <>
      <div className="flex items-center gap-4 mb-14.5">
        <Textarea
          name="textarea"
          type="textarea"
          placeholder="Digite sua Demanda"
          className="h-34"
        />
      </div>
    </>
  );
};
