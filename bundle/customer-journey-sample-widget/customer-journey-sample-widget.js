var shadowRoot = null;
class CustomerJourneySampleWidget extends HTMLElement {
  constructor() {
    super();
    shadowRoot = this.attachShadow({ mode: 'closed' });
    const div = document.createElement('div');
    div.style.height = 'calc(100% - 20px)';
    const interactionId = this.getAttribute('interactionid');
    const api = window.WS.widgetAPI(interactionId);
    let interactionData = {};
    const configuration = api.getConfiguration();

    api.onDataEvent('onInteractionEvent', (data) => {
      interactionData = data;
    });

    div.innerHTML = getTemplate(interactionData, configuration);
    shadowRoot.appendChild(div);
  }
}
// Define Web Component
customElements.define('customer-journey-sample-widget', CustomerJourneySampleWidget);
// Returns html to use in component
function getTemplate(data, configuration) {
  return (
    `<head>
     <link rel='stylesheet' href='assets/css/neo.min.css'>
     </head>
    <div class='neo-widget__content sample__widget'>
    <div class="neo-widget__header">
      <div class="neo-widget__header-left">
        <h4>Sample API</h4>
      </div>
    </div>
    <div class='neo-widget__body'>
      <h5 class="data__heading">Interaction Data</h5>
      <p>See below for examples of Interaction Data properties.</p>
      <p>Please refer to Widget API Docs for complete list.</p>
      <div>
        <ul class="neo-group-list--actions">
          <li class="neo-group-list--actions__item">
            <div class="neo-group-list__actions--left">
              <span class="neo-icon-signature"></span>
              <p>Interaction ID:&nbsp ${data?.id}</p>
            </div>
          </li>
          <li class="neo-group-list--actions__item">
            <div class="neo-group-list__actions--left">
              <span class="neo-icon-signature"></span>
              <p>Interaction State:&nbsp ${data?.state}</p>
            </div>
          </li>
          <li class="neo-group-list--actions__item">
            <div class="neo-group-list__actions--left">
              <span class="neo-icon-signature"></span>
              <p>Interaction Channel:&nbsp ${data?.channel}</p>
            </div>
          </li>
          <li class="neo-group-list--actions__item">
            <div class="neo-group-list__actions--left">
              <span class="neo-icon-signature"></span>
              <p>Interaction Direction:&nbsp ${data?.direction}</p>
            </div>
          </li>
          <li class="neo-group-list--actions__item">
            <div class="neo-group-list__actions--left">
              <span class="neo-icon-signature"></span>
              <p>Interaction Capabilities - canReject:&nbsp ${data?.capabilities?.canReject}</p>
            </div>
          </li>
        </ul>
      </div>
      <div class="token__container">
        <h5 class="data__heading">Access Token</h5>
      </div>
      <p class="token">${configuration?.token}</p>
    </div>` +
    `<style> .token {
          max-width: 100%; 
          word-break: break-word; 
          background: whitesmoke;
          padding: 10px;
          border-radius: 20px;
          margin-top: 10px;
        }
        .sample__widget {
          margin: 10px 10px 0 0;
        }
          .token__container {
            margin-top: 25px;
          }
          .data__heading {
            font-weight: bold; 
            font-size: 16px;}</style>
    </div>`
  );
}
