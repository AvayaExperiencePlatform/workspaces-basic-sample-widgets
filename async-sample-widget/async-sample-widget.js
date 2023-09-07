import { asyncSampleContent,channels } from './async-sample-widget.templates.js';
import { suggestedPhrases } from './suggested-phrases.templates';
import {LitElement, html, css} from 'lit-element';
import linkifyStr from 'linkifyjs/string';

class AsyncSampleWidget extends LitElement  {

  static get properties() {
    return {
      isExpanded: { type: Boolean },
      channels: { type: Array },
      asyncSampleContent: { type:Array },
      suggestedPhrases: { type:Array }
    };
  }

  static get styles() {
    return [css`
     @import url('https://fonts.googleapis.com/css?family=Noto+Sans');
      .neo-widget__content{
        border-radius: 8px;
        height: auto;
        width: auto;
      }
    .neo-accordion {
      padding-bottom: 16px;
    }
    .suggestedPhrase {
      display: flex;
      width: fit-content;
      width: -moz-fit-content;
      span {
        body {
          margin: 0;
        }
      }
    }
    .neo-accordion__content * {
      font-size:12px;
      line-height: 16px;
    }
    .neo-accordion__content {
      padding: 0 24px 0 8px;
    }
    .neo-accordion__header {
      padding: 8px !important;
    }
    .neo-accordion__header>.neo-accordion__header-text {
      font-size: 14px;
      line-height: 20px;
    }
    .neo-accordion__item {
      margin-bottom: 8px;
    }
    .neo-icon-edit::before{
      font-size: 14px;
      color: #4c94ed;
      margin-left:5px;
    }
    .neo-chip {
      font-size: 12px;
      font-family: noto-sans,sans-serif;
      line-height: 16.3px;
      margin: 5px 5px 8px 0;
      cursor: pointer;
    }
    h4 {
      font-size: 14px;
      line-height: 20px;
      margin-top: 16px;
    }
    hr {
      height:1px;
      background-color:var(--dropdown-content-border);
      margin:5px;
    }
    p {
      margin: 0;
    }
    `];
  }

  constructor() {
    super();
    this.channels = channels;
    this.asyncSampleContent = asyncSampleContent;
    this.isExpanded = true;
    this.interactionid = this.getAttribute('interactionid');
    this.api = (window).WS.widgetAPI(this.interactionid);
    this.defaultTab = 0;
    this.api.onDataEvent('onContextDataEvent', contextData => {
      this.contextChannelSrc= contextData?.channelSrc[0] ? contextData.channelSrc[0].data : null;
    });
    this.api.onDataEvent('onInteractionEvent', interactionData => {
      this.interactionChannel = interactionData?.channel ? interactionData.channel : null;
    });

    this.suggestedPhrases = suggestedPhrases;
  }

  firstUpdated() {
    if (this.contextChannelSrc) {
      this.channels.forEach((channel,index)=>{
        if(this.contextChannelSrc===channel) {
          this.defaultTab=index;
        }
      });
    }
    if (this.interactionChannel==='WEBCHAT') {
      this.defaultTab='suggestedPhrases';
    }

    this.clickHandlerCollapseExpand(this.defaultTab);
  }

  clickHandlerCollapseExpand(tabindex) {
    const tabExpand = this.shadowRoot.getElementById(`tab ${tabindex}`);
    tabExpand.classList.toggle('neo-accordion__item--active')
    tabExpand.childNodes[1].blur();
    this.isExpanded = !this.isExpanded;
  }

  clickHandlerOnButton(buttonContent) {
    if(this.api.validateRichMediaMessage(buttonContent.body, buttonContent.richMediaType)) {
      this.api.sendRichMediaMessage(buttonContent.body, buttonContent.richMediaType);
    } else {
      console.warn('Widget API: sendRichMedia() failed as the message has invalid format.');
      return;
    }
  }

  sendSuggestedPhrase(phrase) {
    if (this.interactionChannel==='WEBCHAT') {
      this.api.sendChatMessage(phrase);
    } else {
      const richMedia = {
        body:{text: phrase}
      };
      this.api.sendRichMediaMessage(richMedia.body,'text');
    }
  }

  editSuggestedPhrase(phrase) {
    this.api.insertMessageResponse(phrase);
  }

  getGroupButtons(channel,content) {
    if(content.groupChannels.indexOf(channel)>-1) {
      const buttons = content.groupItems.map(buttonContent =>
        html
          `
            <div class="neo-chip neo-chip--info neo-chip--static" puppeteer-id="sample-wdg--chip-${buttonContent.title}-${channel.trim()}" role="menuitem" tabindex="0" @click=${()=>this.clickHandlerOnButton(buttonContent)}>
              ${ buttonContent.title}
            </div>
          `);
      return html `
              <li style="padding-bottom:10px;">
                <div>
                  <span class="neo-accordion__header-text">${content.groupName}</span>
                </div>
                <hr class="neo-dropdown__separator" />
                <div>
                  ${buttons}
                </div>
              </li>
            `;
    } else return html ``;
  }

  convertStringToHTML(strValue){
    return new DOMParser().parseFromString(strValue, 'text/html').body.firstElementChild;
  }

  getSuggestedPhrasesButton(phrase, idx){
    if (!phrase) return html ``;

    let linkOptions = {
      className: '',
      target: {
        url: '_blank'
      },
   };


    let tooltipDirection = (this.suggestedPhrases.length === idx + 1 && phrase.length > 100) ? 'neo-tooltip--up-left' : (this.suggestedPhrases.length === idx + 1 && phrase.length < 10) ? 'neo-tooltip--up-right' : (this.suggestedPhrases.length === idx + 1 && phrase.length < 100 ) ? 'neo-tooltip--up' : (phrase.length > 100) ? 'neo-tooltip--down-left' : (phrase.length < 10) ? 'neo-tooltip--down-right' : 'neo-tooltip--down'
    let spanElement = this.convertStringToHTML('<p>' + linkifyStr(phrase, linkOptions) + '</p>');

    return html`
      <div class="neo-chip neo-chip--info suggestedPhrase" role="menuitem" tabindex="0" puppeteer-id="sample-wdg-suggestedPhrase-item-${idx}">
        <span  @click="${()=>this.sendSuggestedPhrase(phrase)}">${spanElement}</span>
        <div class="neo-tooltip neo-tooltip--onhover ${tooltipDirection}" aria-label="Edit suggested phrase" >
          <span class="neo-icon-edit"
                aria-label="Edit suggested phrase"
                role="button"
                @click="${()=>this.editSuggestedPhrase(phrase)}"></span>
          <div class="neo-tooltip__content"><div class="neo-arrow"></div>Edit suggested phrase</div>
        </div>
      </div>
    `
  }

  render() {
    return html`
      <head>
        <link rel='stylesheet'  type="text/css" href="assets/css/neo.min.css">
      </head>
      <div class='neo-widget__content sample__widget'>
        <div class='neo-widget__body'>
          <div class="neo-widget__header">
            <div class="neo-widget__header-left" puppeteer-id="sample-widget__header">
              <p>Sample Library</p>
            </div>
          </div>
          <ul class="neo-accordion" role="tablist">${this.channels.map((channel,index) => html`
            <li id="tab ${index}" class="neo-accordion__item">
              <div
                class="neo-accordion__header"
                style="padding:8px !important;"
                tabindex=${index}
                role="tab"
                aria-expanded="false"
                @click=${()=>this.clickHandlerCollapseExpand(index)}
              >
                <span class="neo-accordion__header-text" puppeteer-id="sample-wdg-accordion-header-${channel.trim()}">${channel}</span>
              </div>
              <div class="neo-accordion__body" role="tabpanel">
                <div class="neo-accordion__content">${this.asyncSampleContent.map((content) => html`
                    ${this.getGroupButtons(channel,content)}
              </div>`)}
            </li>`)}

            <!--SUGGESTED PHRASES BLOCK -->
            <li id="tab suggestedPhrases" class="neo-accordion__item">
              <div
                  class="neo-accordion__header"
                  tabindex=4
                  role="tab"
                  aria-expanded="false"
                  @click=${()=>this.clickHandlerCollapseExpand('suggestedPhrases')}
                  puppeteer-id="sample-wdg-accordion-header-Suggested Phrases and URLs"
              >
                <span class="neo-accordion__header-text">Suggested Phrases and URLs</span>
              </div>
              <div class="neo-accordion__body" role="tabpanel">
                <div class="neo-accordion__content ">
                  ${this.suggestedPhrases.map((phrase, idx)=>this.getSuggestedPhrasesButton(phrase, idx))}
                </div>
              </div>
            </li>
          </ul>
          <div>Version: ASYNC_SAMPLE_WIDGET_VERSION</div>
        </div>
    </div>
    `;
  }

  }

  customElements.define('async-sample-widget', AsyncSampleWidget);
