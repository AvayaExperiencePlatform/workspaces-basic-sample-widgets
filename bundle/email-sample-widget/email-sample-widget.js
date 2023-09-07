var shadowRoot = null;

class EmailSampleWidget extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const interactionId = this.getAttribute('interactionid');
    const widgetId = this.getAttribute('widgetid');
    const api = window.WS.widgetAPI(interactionId);
    const configuration = api.getConfiguration();
    let interactionData = {};
    let participantData = {};
    let interactionMedia = {};
    const emailType = 'MESSAGE';

    api.onDataEvent('onInteractionEvent', (data) => {
      interactionData = data;
    });

    api.onDataEvent('onMediaEvent', (data) => {
      interactionMedia = data;
    });

    api.onDataEvent('onParticipantsAdded', (data) => {
      participantData = data;
    });

    this.innerHTML = getTemplate(configuration, interactionData, interactionMedia, participantData);

    // notification selectors
    const sendInfoBtn = document.getElementById('sendInfoBtn');
    const sendErrorBtn = document.getElementById('sendErrorBtn');
    const sendWarningBtn = document.getElementById('sendWarningBtn');
    const sendWidgetMessageBtn = document.getElementById('sendWidgetMessageBtn');
    const toastInput = document.getElementById('toastInput');

    // interaction media selectors
    const messageBody = document.getElementById('mediaMessageBody');
    const messageImportance = document.getElementById('mediaMessageImportance');
    const messageSensitivity = document.getElementById('mediaMessageSensitivity');

    // message event selectors
    const messageInput = document.getElementById('messageInput');
    const messageArea = document.getElementById('messageArea');

    // email selectors
    const toInput = document.getElementById('toInput');
    const ccInput = document.getElementById('ccInput');
    const bccInput = document.getElementById('bccInput');
    const subjectInput = document.getElementById('subjectInput');
    const emailMessageInput = document.getElementById('emailMessageInput');
    const sendEmailBtn = document.getElementById('sendEmailBtn');
    const newEmailBtn = document.getElementById('newEmailBtn');
    const sentArea = document.getElementById('sentArea');
    const emailArea = document.getElementById('emailArea');

    api.onDataEvent('onMediaMessageEvent', (data) => {
      messageBody.innerHTML = data.message.body;
      messageImportance.innerHTML = data.message.importance;
      messageSensitivity.innerHTML = data.message.sensitivity;
    });

    api.onDataEvent('onMessageEvent:' + widgetId, (data) => {
      messageArea.innerHTML = data;
    });

    // Notifications
    sendInfoBtn.addEventListener('click', () => {
      api.sendNotification(toastInput.value, 'info');
    });
    sendErrorBtn.addEventListener('click', () => {
      api.sendNotification(toastInput.value, 'error');
    });
    sendWarningBtn.addEventListener('click', () => {
      api.sendNotification(toastInput.value, 'warning');
    });

    newEmailBtn.addEventListener('click', () => {
      showElement(emailArea);
      showElement(sendEmailBtn);
      hideElement(sentArea);
      hideElement(newEmailBtn);
    });

    sendWidgetMessageBtn.addEventListener('click', () => {
      api.sendMessage(messageInput.value, widgetId);
      messageInput.value = '';
    });

    function hideElement(element) {
      element.classList.add('hide');
      element.classList.remove('show');
    }

    function showElement(element) {
      element.classList.add('show');
      element.classList.remove('hide');
    }

    sendEmailBtn.addEventListener('click', () => {
      let email = {
        bcc: bccInput.value.split(','),
        cc: ccInput.value.split(','),
        from: '',
        message: emailMessageInput.value,
        subject: subjectInput.value,
        to: toInput.value.split(','),
        type: emailType,
      };

      api.sendEmailMessage(email);

      showElement(sentArea);
      showElement(newEmailBtn);
      hideElement(emailArea);
      hideElement(sendEmailBtn);

      subjectInput.value = '';
      emailMessageInput.value = '';
      bccInput.value = '';
      ccInput.value = '';
      toInput.value = '';
    });
  }
}

// Define Web Component
customElements.define('email-sample-widget', EmailSampleWidget);
// Returns html to use in component
function getTemplate(configuration, interactionData, interactionMedia, participantData) {
  return (
    `
      <div class='neo-widget__content sample-widget'>
        <div class='neo-widget__header'>
          <div class='neo-widget__header-left'>
            <span class="neo-icon-email"></span>
            <h4>Sample Email Widget</h4>
          </div>
        </div>
        <div class="neo-widget__body">
          <div>
            <div id="emailArea" class="show">
              <span class="data__heading">Send Email API</span>
              <p>The below input fields are making use of the <strong>sendEmailMessage</strong> method</p>
              <div class='neo-form-control'>
                <input id='toInput' class='neo-input'placeholder='To' role='textbox'/>
              </div>
              <div class='neo-form-control'>
                <input id='ccInput' class='neo-input'placeholder='Cc' role='textbox'/>
              </div>
              <div class='neo-form-control'>
                <input id='bccInput' class='neo-input'placeholder='Bcc' role='textbox'/>
              </div>
              <div class='neo-form-control'>
                <input id='subjectInput' class='neo-input'placeholder='Subject' role='textbox'/>
              </div>
              <div class='neo-form-control'>
                <textarea class='neo-input' id='emailMessageInput' rows='5' aria-label='description' role='textbox'></textarea>
              </div>
            </div>
            <div id="sentArea" class="sent-text hide">
            Message sent using the Widget API
            <span class="neo-icon-check"></span>
            </div>
            <div class='neo-widget__footer'>
              <button class='neo-btn neo-btn-primary neo-btn-primary--primary show' id='sendEmailBtn'>Send</button>
            </div>
            <div class='neo-widget__footer'>
              <button class='neo-btn neo-btn-primary neo-btn-primary--primary hide' id='newEmailBtn'>New Email</button>
            </div>
          </div>
          <div class="method__container">
          <span class="data__heading">Interaction Media</span>
          <p>See below for examples of Media properties that are available on the <strong>onMediaEvent</strong>.</p>
          <ul class="neo-group-list--actions">
            <li class="neo-group-list--actions__item">
              <div class="neo-group-list__actions--left">
                <span class="neo-icon-signature"></span>
                <p>Work Request ID:&nbsp ${interactionMedia?.workRequestId}</p>
              </div>
            </li>
            <li class="neo-group-list--actions__item">
              <div class="neo-group-list__actions--left">
                <span class="neo-icon-signature"></span>
                <p>Customer Connected:&nbsp ${interactionMedia?.isCustomerConnected}</p>
              </div>
            </li>
          </ul>
        </div>
        <div class="method__container">
          <span class="data__heading">Participants</span>
          <p>See below for examples of participant properties that are available on the <strong>onParticipantsAdded</strong>.</p>
          <ul class="neo-group-list--actions">
            <li class="neo-group-list--actions__item">
              <div class="neo-group-list__actions--left">
                <span class="neo-icon-signature"></span>
                <p>Participant 1:&nbsp Name: ${participantData[0]?.name} | Type: ${participantData[0]?.type}</p>
              </div>
            </li>
            <li class="neo-group-list--actions__item">
              <div class="neo-group-list__actions--left">
                <span class="neo-icon-signature"></span>
                <p>Participant 2:&nbsp Name: ${participantData[1]?.name} | Type: ${participantData[1]?.type}</p>
              </div>
            </li>
          </ul>
        </div>
        <div class="method__container">
          <span class="data__heading">Media Messages</span>
          <p>See below for examples of Media properties that are available on the <strong>onMediaMessageEvent</strong>.</p>
          <ul class="neo-group-list--actions">
            <li class="neo-group-list--actions__item">
              <div class="neo-group-list__actions--left">
                <span class="neo-icon-signature"></span>
                <p>Message Body:&nbsp <span id="mediaMessageBody">No data</span></p>
              </div>
            </li>
            <li class="neo-group-list--actions__item">
              <div class="neo-group-list__actions--left">
                <span class="neo-icon-signature"></span>
                <p>Message Importance:&nbsp <span id="mediaMessageImportance">No data</span></p>
              </div>
            </li>
            <li class="neo-group-list--actions__item">
              <div class="neo-group-list__actions--left">
                <span class="neo-icon-signature"></span>
                <p>Message Sensitivity:&nbsp <span id="mediaMessageSensitivity">No data</span></p>
              </div>
            </li>
          </ul>
        </div>
        <div class="method__container">
          <span class="data__heading">Interaction Data</span>
          <p>See below for examples of Interaction Data properties that are available on the <strong>onInteractionEvent</strong></p>
          <p>Please refer to Widget API Docs for complete list.</p>
          <div>
            <ul class="neo-group-list--actions">
              <li class="neo-group-list--actions__item">
                <div class="neo-group-list__actions--left">
                  <span class="neo-icon-signature"></span>
                  <p>Interaction ID:&nbsp${interactionData?.id}</p>
                </div>
              </li>
              <li class="neo-group-list--actions__item">
                <div class="neo-group-list__actions--left">
                  <span class="neo-icon-signature"></span>
                  <p>Interaction State:&nbsp ${interactionData?.state}</p>
                </div>
              </li>
              <li class="neo-group-list--actions__item">
                <div class="neo-group-list__actions--left">
                  <span class="neo-icon-signature"></span>
                  <p>Interaction Channel:&nbsp ${interactionData?.channel}</p>
                </div>
              </li>
              <li class="neo-group-list--actions__item">
                <div class="neo-group-list__actions--left">
                  <span class="neo-icon-signature"></span>
                  <p>Interaction Direction:&nbsp ${interactionData?.direction}</p>
                </div>
              </li>
              <li class="neo-group-list--actions__item">
                <div class="neo-group-list__actions--left">
                  <span class="neo-icon-signature"></span>
                  <p>Interaction Capabilities - canReject:&nbsp ${interactionData?.capabilities?.canReject}</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div class="method__container">
          <span class="data__heading">Access Token</span>
          <p>The access token can be fetched by using the <strong>getConfiguration()</strong> 
          method, and accessing the 'token' property on the configuration object</p>
          <p class="token">${configuration?.token}</p>
        </div>
        <div class="method__container">
          <span class="data__heading">Notifications</span>
          <p>Info, Error and Warning toast notifications can be sent using the <strong>sendNotification</strong> method.</p>
          <div class='neo-form-control'>
            <input id='toastInput' class='neo-input'placeholder='Enter Notification' role='textbox'/>
          </div>
          <div class='neo-widget__footer'>
            <button class='neo-btn neo-btn-primary neo-btn-primary--primary' id='sendInfoBtn'>Info</button>
            <button class='neo-btn neo-btn-primary neo-btn-primary--alert' id='sendErrorBtn'>Error</button>
            <button class='neo-btn neo-btn-primary neo-btn-primary--warning' id='sendWarningBtn'>Warning</button>
          </div>
        </div>
        <div class="method__container">
          <span class="data__heading">Send Widget Message</span>
          <p>Messages can be sent from widget to widget using the <strong>sendMessage</strong> method.</p>
          <div class='neo-form-control'>
            <input id='messageInput' class='neo-input'placeholder='Enter Message' role='textbox'/>
          </div>
          <div class='neo-widget__footer'>
            <button class='neo-btn neo-btn-primary neo-btn-primary--primary' id='sendWidgetMessageBtn'>Send Message</button>
          </div>
        </div>
        <div class="method__container">
          <span class="data__heading">Message Event</span>
          <p>You can listen to widget to widget messages using the <strong>onMessageEvent</strong>.</p>
          <div class='widget-messages' id='messageArea'>No widget messages to display</div>
        </div>
      </div>
      </div>` +
    `<style> .sample-widget {
          height: calc(100% - 10px);
          margin: 0px 10px 10px 0;
          }
          .token {
            max-width: 100%; 
            word-break: break-word; 
            background: whitesmoke;
            padding: 10px;
            border-radius: 20px;
            margin-top: 10px;
          }
          .widget-messages {
            border: 1px solid lightgray;
            border-radius: 20px;
            padding: 5px;
            margin-bottom: 10px;
          }
            .method__container {
              margin-top: 25px;
            }
            .hide {
              display:none;
            }.
            .show {
              display:block;
            }
            .sent-text {
              background-color: limegreen;
              border-radius: 20px;
              padding: 10px;
              color: white;
              max-width: 260px;
            }
            .data__heading {
              font-weight: bold; 
              font-size: 16px;}</style>`
  );
}
