import {createElement} from 'react'
import {render, unmountComponentAtNode} from 'react-dom'
import HelloWorld from './HelloWorld';

class SampleWebComp extends HTMLElement {
    connectedCallback () {
      render(createElement(HelloWorld), this);
    }
  
    disconnectedCallback () {
        unmountComponentAtNode(HelloWorld);
    }
  }
  
  customElements.define('react-hello-world', SampleWebComp);
