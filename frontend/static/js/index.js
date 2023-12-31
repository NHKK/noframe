console.log('boiler index js is loading')

function generateTabTemplate(){
  const template = document.createElement('template');
  template.innerHTML = `
    <style>
      .tab {
        overflow: hidden;
        border: 1px solid #ccc;
        background-color: #f1f1f1;
      }
      .tab button {
        background-color: inherit;
        float: left;
        border: none;
        outline: none;
        cursor: pointer;
        padding: 14px 16px;
        transition: 0.3s;
      }
      .tab button:hover {
        background-color: #ddd;
      }
      .tab button.active {
        background-color: #ccc;
      }
      .tabcontent {
        display: none;
        padding: 6px 12px;
        border: 1px solid #ccc;
        border-top: none;
      }
    </style>
    <div class="tab">
      <button class="tablinks" onclick="openTab(event, 'London')">London</button>
      <button class="tablinks" onclick="openTab(event, 'Paris')">Paris</button>
    </div>

    <div id="London" class="tabcontent">
      <h3>London</h3>
      <p>London is the capital city of England.</p>
    </div>

    <div id="Paris" class="tabcontent">
      <h3>Paris</h3>
      <p>Paris is the capital of France.</p>
    </div>
    `
  return template;
}

class FormConfig extends HTMLElement{
  constructor(){
    super();
    console.log('webcomp called');
    const shadow = this.attachShadow({mode: 'open'});

    const template = document.createElement('template');
    template.innerHTML = `
      <style>
        .tab {
          overflow: hidden;
          border: 1px solid #ccc;
          background-color: #f1f1f1;
        }
        .tab button {
          background-color: inherit;
          float: left;
          border: none;
          outline: none;
          cursor: pointer;
          padding: 14px 16px;
          transition: 0.3s;
        }

        .tab button:hover {
          background-color: #ddd;
        }

        .tab button.active {
          background-color: #ccc;
        }

        .tabcontent {
          display: none;
          padding: 6px 12px;
          border: 1px solid #ccc;
          border-top: none;
        }
      </style>
      <div class="tab">
        <button class="tablinks" onclick="openTab(event, 'London')">London</button>
        <button class="tablinks" onclick="openTab(event, 'Paris')">Paris</button>
      </div>

      <div id="London" class="tabcontent">
        <h3>London</h3>
        <p>London is the capital city of England.</p>
      </div>

      <div id="Paris" class="tabcontent">
        <h3>Paris</h3>
        <p>Paris is the capital of France.</p>
      </div>
    `
    const s = document.createElement('script');
    s.textContent = `
      function openTab(evt, cityName) {
        var i, tabcontent, tablinks;
        tabcontent = document.getElementsByClassName("tabcontent");
        console.log('tabContent', tabcontent);
        for (i = 0; i < tabcontent.length; i++) {
          tabcontent[i].style.display = "none";
        }

        tablinks = document.getElementsByClassName("tablinks");
        for (i = 0; i < tablinks.length; i++) {
          tablinks[i].className = tablinks[i].className.replace(" active", "");
        }

        document.getElementById(cityName).style.display = "block";
        evt.currentTarget.className += " active";
      } 
    `;
    this.shadowRoot.appendChild(template.content.cloneNode(true));
    this.shadowRoot.appendChild(s);
  }
}

window.customElements.define('form-config', FormConfig);
