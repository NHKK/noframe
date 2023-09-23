class TabsComponent extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
      this.render();
      this.addEventListeners();
    }

    render() {
        this.shadowRoot.innerHTML = `
            <style>
              #tabs{
                font-family: "Open Sans", "Helvetica Neue", Helvetica, sans-serif;
              }
              .tab{
                display: none;
                margin: 0 auto;
                width: 75%;
              }
              .tab.active {
                display: block;
              }
            </style>
            <div id="tabs">
              <button class="tab-button">Tab 1</button>
              <button class="tab-button">Tab 2</button>
              <div id="tab1" class="tab active">
                <slot name="bundle"></slot>
              </div>
              <div id="tab2" class="tab">
                <slot name="timer"></slot>
              </div>
            </div>
        `;
    }
    addEventListeners() {
      const tabsbtn = this.shadowRoot.querySelectorAll('.tab-button');
        tabsbtn.forEach((btn, index) => {
            btn.addEventListener('click', (event) => {
              const tabs = this.shadowRoot.querySelectorAll('.tab');
              tabs.forEach((tab) => {
                tab.classList.remove('active');
              });
              tabs[index].classList.add('active');
              const buttons = this.shadowRoot.querySelectorAll('.tab-button');
              buttons.forEach((button) => button.classList.remove('active'));
              event.currentTarget.classList.add('active');
            });
        });
    }


}
customElements.define('my-tabs', TabsComponent);

