import { useState, type SyntheticEvent } from "react";

export const InputExample = () => {
  const [login, setLogin] = useState("");

  function updateLoginValue() {
    setLogin("Valor atualizado via Código!");
  }

  function handleSubtmit(event: SyntheticEvent<HTMLFormElement>) {
    event.preventDefault();

    // Devido a captura via DOM o React não entende se o elemento com Id "login" terá o atributo value, pois ele não sabe que é um input
    // Input não controlado:
    console.log(document.getElementById("login").value);

    // Input controlado:
    console.log(login);
  }

  return (
    <>
      <form onSubmit={handleSubtmit}>
        <input
          onChange={(event) => setLogin(event.target.value)}
          value={login}
          type="text"
          name="login"
          id="login"
        />
        <button>Enviar</button>
        <button type="button" onClick={updateLoginValue}>
          Atualizar
        </button>
      </form>
    </>
  );
};
