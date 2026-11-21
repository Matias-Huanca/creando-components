import { init as initHeaderEl } from "./components/header";
import { init as initTextFieldEL } from "./components/text-field";
// con as lo renombras a la funcion exportada
(function main() {
  initHeaderEl();
  initTextFieldEL();
})();
