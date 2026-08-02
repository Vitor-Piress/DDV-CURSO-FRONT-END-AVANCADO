import { Fragment, type SyntheticEvent } from "react";
import "./App.css";
import { User } from "./components/User";
import { Button } from "./components/button";
import { Contador } from "./components/Contador";

function Beginning() {
  const variavel = "texto da variável";
  const number = 10;
  const users = [
    { name: "Vitor", occupattion: "Front-end Developer" },
    { name: "Jorge", occupattion: "Back-end Developer" },
    { name: "Joao", occupattion: "DevOps" },
    { name: "Jonas", occupattion: "Full-Stack Developer" },
  ];

  const usersArr = ["User01", "User02", "User03", "User04"];

  function showAlert() {
    alert("Alerta!");
  }

  function formSubmit(event: SyntheticEvent<HTMLFormElement>) {
    event.preventDefault();
    alert("Form submetido realizando o preventDefault()!");
  }

  return (
    <>
      <h1>{variavel}</h1>
      <p>{variavel}</p>

      <br />
      <h2>Retornando valor de número:</h2>
      <p>
        {number > 20 ? (
          <span>{number} Maior que 20</span>
        ) : (
          <strong>{number} Menor que 20</strong>
        )}
      </p>
      <br />
      {/* RENDERIZAÇÃO COM LOOP, COMPONENTIZAÇÃO E PROPS */}
      <h2>Retornando Usuários:</h2>
      <ul>
        {users.map((user) => (
          <User
            onClick={() => alert(`Alerta! Usuário ${user.name}`)}
            key={user.name}
            name={user.name}
            occupattion={user.occupattion}
          />
        ))}
      </ul>
      <br />
      <button onClick={showAlert}>Botão</button>
      <input
        type="text"
        onChange={(event) => console.log(event.target.value)}
      />
      <form onSubmit={formSubmit}>
        <br />
        <button type="submit">Submit Form</button>
      </form>
      <br />
      <Button type="button" onClick={() => alert("Clicou!")}>
        <a href="https://www.google.com" target="blank">
          Google
        </a>
      </Button>

      <Contador />

      {usersArr.map((user) => (
        <Fragment>
          <h2>{user}</h2>
          <p>{user}</p>
        </Fragment>
      ))}
    </>
  );
}

export default Beginning;
