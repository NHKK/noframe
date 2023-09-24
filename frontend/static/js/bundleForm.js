class BundleForm extends HTMLElement {
  constructor(){
    super();
    this.attachShadow({mode: 'open'});
  }

  connectedCallback(){
    this.render();
    this.addEventListener();
  }

  render(){
    this.shadowRoot.innerHTML = `
      <style>
        #config{
          width: 100%;
          box-sizing: border-box;
        }
      </style>
      <form id="bundleForm">
        <label for="env"> Env: </label>
        <input id="env" name="env" type="text" required/>
        <label for="name"> Name: </label>
        <input id="name" name="name" type="text" required/>
        <label for="site"> Site: </label>
        <input id="site" name="site" type="text" required/>
        <fieldset>
          <legend> Select Products </legend>
          <div>
            <input type="checkbox" name="products" value="AD" />
            <label> AD </label>
            <input type="checkbox" name="products" value="AL" />
            <label> AL </label>
            <input type="checkbox" name="products" value="CS" />
            <label> CS </label>
            <input type="checkbox" name="products" value="IT" />
            <label> IT </label>
          </div>
        </fieldset>
        <label for="config"> Config: </label>
        <textarea id="config" name="config">
        </textarea>
        <br />
        <button type="submit">Submit</button>
      </form>
    `
    const script = document.createElement('script');
    script.src = "static/js/himom.js";
    this.shadowRoot.appendChild(script);
  }

  addEventListener(){
    const formEl = this.shadowRoot.getElementById('bundleForm');
    formEl.addEventListener('submit', function(e){
      e.preventDefault();
      const formData = new FormData(this);
      console.log(formData);
      console.log(formData.getAll('products'));
      fetch('/bundle')
        .then(response => {
          console.log('returned bundle from backend', response);
        })
        .catch(error => {
          console.error('sadness something went wrong', error);
        })
      // fetch('/bundle')
      //   .then(response => {
      //     return response.text();
      //   }).then(html => {
      //     console.log("here here",document.body);
      //     document.body.innerHTML = html;
      //   }).catch(error => {
      //     console.error('sadness', error);
      //   })
    });
  }
}

customElements.define('bundle-form', BundleForm);
