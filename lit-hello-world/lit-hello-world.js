import {LitElement, html} from 'lit-element';

class HelloWorld extends LitElement {

    constructor(){
        super();
        this.name = "Lit sample widget";
        this.widgetAPI = (window).WS.widgetAPI();
    }

    static get properties(){
        return{
            name: { type: String },
        };
    }

    sendNotification() {
        this.widgetAPI.sendNotification('Hello World!', 'info');
      }

    render(){
        return html`
            <head>
                <link rel='stylesheet' href='assets/css/neo.min.css'>
            </head>
            <div class="neo-widget__content">
            <div class="neo-widget__header">
            <div class="neo-widget__header-left">
              <p>Lit Element</p>
            </div>
          </div>
            <div class="neo-widget__body">
                <div class="container">
                <h3><b>Sample widget demonstrating notification api methods</b></h3>
                <button class='neo-btn neo-btn-primary neo-btn-primary--primary' @click="${this.sendNotification}">Send Notification</button>
                </div>
                </div>
            </div>
        `;
    }
    }
    
customElements.define('lit-hello-world', HelloWorld);