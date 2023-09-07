import { createElement } from "react";
import { render, unmountComponentAtNode} from 'react-dom';
import SampleWidget from "./SampleWidget";

class SampleWsApp extends HTMLElement {

  connectedCallback() {
    render(createElement(SampleWidget), this)
  }

  disconnectedCallback() {
    unmountComponentAtNode(document.getElementById('sampleWidgetWithParcel') as Element);
  }
}

customElements.define("react-parcel", SampleWsApp);
