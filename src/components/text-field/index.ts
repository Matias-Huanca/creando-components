export function init() {
  class TextField extends HTMLElement {
    constructor() {
      super();
      this.render();
    }
    render() {
      // Creamos un shadow root
      const shadow = this.attachShadow({ mode: "open" });

      // Tomamos el atributo ue viene de nuestro nuevo elemento mediante el DOM del HTML
      const label = this.getAttribute("label");

      // Agregamos una hoja de estilo a nuestro nuevo elemento, ue va a tener por defecto
      const style = document.createElement("style");
      style.innerHTML = `
        .root{
          display: flex;
          flex-direction: column;
        }
        .label{
          font-size:18px;
        }
        .input{
          padding: 17px 13px;
          font-size:18px;
          margin-top: 3px;
          border:solid 2px black;
          border-radius: 4px
        }
      `;

      const div = document.createElement("div");
      div.classList.add("root");

      div.innerHTML = `
        <label class= "label  ">${label}</label>
        <input class="input" type="text" placeholder= "Ingrese su ${label}"/>
      `;

      //Agregamos al shadow el elemento div
      shadow.appendChild(div);
      shadow.appendChild(style);
    }
  }

  //  Registramos un elemento personalizado en el DOM
  customElements.define("text-field", TextField);
}
