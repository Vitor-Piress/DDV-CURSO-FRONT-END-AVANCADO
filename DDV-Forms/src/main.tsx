import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { InputExample } from "./pages/input-example";
import { FormExample } from "./pages/form-example";
import { FormExampleReactHook } from "./pages/form-example-reacthook";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    {/* <InputExample></InputExample> */}
    {/* <FormExample></FormExample> */}
    <FormExampleReactHook></FormExampleReactHook>
  </StrictMode>,
);
