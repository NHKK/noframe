class FormWC extends HTMLElement {
  constructor(){
    super();
    this.attachShadow({mode: 'open'});
  }

  connectedCallback(){
    this.render();
  }

  render(){
    this.shadowRoot.innerHTML = `
      <label>
        My Input
        <input type="text" />
      </label>
    `
  }
}

customElements.define('form-wc', FormWC);
