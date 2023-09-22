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
              .tab{
                display: none;
              }
              .tab.active {
                display: block;
              }
            </style>
            <div id="tabs">
              <button class="tab-button">Tab 1</button>
              <button class="tab-button">Tab 2</button>
              <div id="tab1" class="tab active">
                <p>
                Content for Tab 1
                  </p>
                <slot name="bundle"></slot>
              </div>
              <div id="tab2" class="tab">Content for Tab 2</div>
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

