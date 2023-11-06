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
      fetch("/bundle", {
        method: "POST",
        body: JSON.stringify({
          title: "foo",
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8"
        }
      }).then(response => console.log("done"));
    });
  }
}

customElements.define('bundle-form', BundleForm);
