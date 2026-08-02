import "./App.scss";
import { CardFAQ } from "./components/card-FAQ";
import diamondIcon from "./assets/diamond-icon.svg";

export const App = () => {
  const lorem =
    "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis fugit, saepe corporis laudantium sunt ab possimus similique error at provident. Autem velit culpa, quis amet eum nisi veritatis debitis distinctio?";

  const cards = [
    {
      title: "Como posso abrir uma conta",
      content: "Conteudo de fato do card vindo do meu Array de Objetos cards[]",
    },
    {
      title: "Quais são os critérios para abertura e manutenção de uma conta?",
      content: lorem,
    },
    { title: "Como funciona a biometria", content: lorem },
    { title: "Caracoles mano!", content: lorem },
  ];

  return (
    <>
      <div id="everything-container">
        <div id="background-image"></div>
        <section id="FAQ-container">
          <header>
            <img src={diamondIcon} alt="diamond-icon" />
            <h2>FAQs</h2>
          </header>
          <main id="main-container">
            {cards.map((card) => (
              <CardFAQ {...card} />
            ))}
          </main>
        </section>
      </div>
    </>
  );
};
