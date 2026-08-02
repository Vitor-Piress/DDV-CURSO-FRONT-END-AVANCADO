export enum Colors {
  DEFAULT = "DEFAULT",
  PICKED = "PICKED",
}

export enum Category {
  BASIC = "BASIC",
  STANDARD = "STANDARD",
  PREMIUM = "PREMIUM",
}

export enum Position {
  LEFT = "LEFT",
  RIGHT = "RIGHT",
  CENTER = "CENTER",
}

const VariantStyles = {
  [Category.BASIC]: {
    maxSimultaneousScreens: 2,
    maxDowloadDevices: 2,
    maxExtraMembers: 0,
    resolutionAvailable: "1080p (Full HD)",
    category: "Básico",
    value: "19,90",
  },
  [Category.STANDARD]: {
    maxSimultaneousScreens: 3,
    maxDowloadDevices: 2,
    maxExtraMembers: 1,
    resolutionAvailable: "1080p (Full HD)",
    category: "Padrão",
    value: "29,90",
  },
  [Category.PREMIUM]: {
    maxSimultaneousScreens: 4,
    maxDowloadDevices: 6,
    maxExtraMembers: 2,
    resolutionAvailable: "4K (Ultra HD) + HDR",
    category: "Premium",
    value: "35,90",
  },
};

const VariantColors = {
  [Colors.DEFAULT]: {
    backgroundColor: "bg-[#F2F6FF]",
    backgroundColorButton: "bg-[#6394FD] text-[#f2f6ff]",
    backgroundColorBlue: "text-[#6394FD]",
    hoverButton: "hover:bg-[#f2f6ff] hover:text-[#6394fd]",
    borderButton: "border  border-[#6394fd]",
    text: "text-[#213258]",
    category: "text-[#6394FD]",
    line: "bg-[#ddd]",
  },
  [Colors.PICKED]: {
    backgroundColor: "bg-[#6394FD]",
    backgroundColorButton: "bg-[#F2F6FF] text-[#6394FD] ",
    backgroundColorBlue: "text-[#F2F6FF]",
    hoverButton: "hover:bg-[#6394fd] hover:text-[#f2f6ff]",
    borderButton: "border  border-[#f2f6ff]",
    text: "text-[#F2F6FF]",
    category: "text-[#F2F6FF]",
    line: "bg-[#F2F6FF]",
  },
};

const VariantPositions = {
  [Position.CENTER]: {
    border: "rounded-2xl",
    shadow: null,
  },
  [Position.LEFT]: {
    border: "rounded-l-2xl",
    shadow: "shadow-[inset_-4px_0_15px_0px_rgba(0,0,0,0.2)]",
  },
  [Position.RIGHT]: {
    border: "rounded-r-2xl",
    shadow: "shadow-[inset_4px_0_15px_0px_rgba(0,0,0,0.2)]",
  },
};

export type CardProps = {
  category: Category;
  picked?: Colors;
  position?: Position;
};

export const Card = ({
  category,
  picked = Colors.DEFAULT,
  position = Position.CENTER,
}: CardProps) => {
  const options = VariantStyles[category];
  const colors = VariantColors[picked];
  const positions = VariantPositions[position];

  return (
    <div
      id="card-container"
      className={`flex flex-col items-center justify-center ${colors.backgroundColor} ${positions.border} p-4 gap-6 w-74 ${picked == Colors.DEFAULT ? "h-123.5" : "h-132.5"} ${picked == Colors.DEFAULT ? null : "py-8"} ${positions.shadow} hover:scale-105 transition-transform ease-in-out `}
    >
      <p className={`${colors.category} text-[20px] font-medium`}>
        {options.category}
      </p>
      <h2 className={`text-2xl font-bold ${colors.text}`}>
        R$
        <span
          className={`text-[56px] font-bold
        `}
        >
          {options.value}
        </span>
      </h2>
      <section id="content-container" className="flex items-center h-62">
        <ul
          className={`flex text-center items-center flex-col gap-2 text-base ${colors.text}`}
        >
          <li className="flex flex-col gap-2 w-full">
            Assista em {options.maxSimultaneousScreens} aparelhos compatíveis
            por vez
            <div id="line" className={`h-px w-full ${colors.line}`}></div>
          </li>
          <li className="flex flex-col gap-2 w-full">
            Assista em {options.resolutionAvailable}
            <div id="line" className={`h-px w-full ${colors.line}`}></div>
          </li>
          <li className="flex flex-col gap-2 w-full">
            Baixe filmes e séries em {options.maxDowloadDevices} aparelhos
            compatíveis por vez
            {options.maxExtraMembers !== 0 && (
              <div id="line" className={`h-px w-full ${colors.line}`}></div>
            )}
          </li>
          {options.maxExtraMembers != 0 && (
            <li className="w-full">
              Opção de adicionar {options.maxExtraMembers} assinante(s) extra
              que não more com você
            </li>
          )}
        </ul>
      </section>
      <button
        className={`cursor-pointer w-full ${colors.backgroundColorButton} ${colors.borderButton} font-bold text-base rounded-sm py-3 px-4 ${colors.hoverButton}`}
      >
        Saiba Mais
      </button>
    </div>
  );
};
