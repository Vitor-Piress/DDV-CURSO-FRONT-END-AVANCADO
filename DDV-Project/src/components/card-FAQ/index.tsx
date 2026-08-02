import "./Styles.scss";
import { useState } from "react";
import minusSvg from "../../assets/minus-icon.svg";
import plusSvg from "../../assets/plus-icon.svg";

type CardProps = {
  title?: string;
  content?: string;
};

export const CardFAQ = ({ title, content }: CardProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <section id="card-container">
        <div
          id="card-header"
          onClick={() => setIsOpen((prevState) => !prevState)}
        >
          <h2>{title ? title : "Título pendente "}</h2>
          <img id="icon" src={isOpen ? minusSvg : plusSvg} alt="toggle-icon" />
        </div>
        {isOpen ? (
          <div id="content-container">
            <p>{content ? content : ""}</p>
          </div>
        ) : null}
      </section>
    </>
  );
};
