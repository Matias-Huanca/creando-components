export function init() {
  class Header extends HTMLElement {
    constructor() {
      super();
      this.render();
    }
    render() {
      this.innerHTML = "Header";

      // Todos los elementos tiene la prop. por default STYLE
      this.style.height = "60px";
      this.style.backgroundColor = "#FF8282";
      this.style.fontSize = "22px";
      this.style.display = "flex";
      this.style.justifyContent = "center";
      this.style.alignItems = "center";
    }
  }

  //  Registramos un elemento personalizado en el DOM
  customElements.define("custom-header", Header);
}
