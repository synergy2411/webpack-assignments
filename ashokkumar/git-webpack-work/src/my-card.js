import styles from "./css/my-card.scss";

const temp = document.createElement("template");
temp.innerHTML = `
<h1>Element</h1>
<div class="my-card">
<div class="user-name"><slot name="name"/></div>
<div class="user-info"><slot name="info"/></div>

</div>`;

class Mycard extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    const style = document.createElement('style');
    style.textContent = styles;
    this.shadowRoot.appendChild(style);
    this.shadowRoot.appendChild(temp.content.cloneNode(true));
  }
}
window.customElements.define("my-card", Mycard);
