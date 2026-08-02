import "./App.css";
import { Background } from "./components/Background";
import { Title } from "./components/Title";
import { CardShowCase } from "./layouts/CardShowCase";

export const App = () => {
  return (
    <>
      <Background>
        <Title></Title>
        <CardShowCase></CardShowCase>
      </Background>
    </>
  );
};
