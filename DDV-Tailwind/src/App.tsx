import "./App.css";
import { Button, BUTTON_VARIATION } from "./components/button";

function App() {
  return (
    <>
      <div className="min-h-screen bg-[#8abce8] flex flex-col font-sans">
        {/* Barra de Navegação Superior */}
        <header className="w-full bg-white py-2 shadow-sm flex justify-center items-center">
          <span className="text-gray-800 text-sm font-medium">
            Code Commerce
          </span>
        </header>

        {/* Conteúdo Principal */}
        <main className="flex justify-center items-center p-4">
          {/* Card do Formulário */}
          <div className="bg-white rounded shadow-xl p-8 w-full max-w-sm">
            {/* Cabeçalho do Card */}
            <div className="flex justify-center items-center gap-2 mb-6">
              <h2 className="text-gray-700 text-base">Login</h2>
              <span className="text-gray-800 font-code font-bold">{"<>"}</span>
            </div>

            {/* Formulário */}
            <form
              className="flex flex-col gap-4"
              onSubmit={(e) => e.preventDefault()}
            >
              {/* Campo Login */}
              <div className="flex flex-col">
                <label htmlFor="login" className="text-gray-700 text-sm mb-1">
                  Login
                </label>
                <input
                  type="text"
                  id="login"
                  className="bg-[#eeeeee] rounded px-3 py-2 text-gray-700 text-sm focus:outline-none focus:ring-2 focus:ring-[#6faeed] transition-all"
                />
              </div>

              {/* Campo Senha */}
              <div className="flex flex-col">
                <label htmlFor="senha" className="text-gray-700 text-sm mb-1">
                  Senha
                </label>
                <input
                  type="password"
                  id="senha"
                  className="bg-[#eeeeee] rounded px-3 py-2 text-gray-700 text-sm focus:outline-none focus:ring-2 focus:ring-[#6faeed] transition-all"
                />
              </div>

              {/* Botão de Entrar */}
              <Button variaton={BUTTON_VARIATION.OUTLINE} type="submit">
                Entrar
              </Button>
            </form>

            {/* Link de Registro */}
            <div className="mt-4 text-center">
              <a
                href="#"
                className="text-[11px] text-gray-600 hover:text-gray-900 transition-colors underline"
              >
                Registrar-se
              </a>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}

export default App;
