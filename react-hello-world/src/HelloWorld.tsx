import React from 'react';
declare const window: any;

export default class HelloWorld extends React.Component {
  widgetAPI = (window).WS.widgetAPI();

  constructor (props: {} | Readonly<{}>){
    super(props);
    this.sendNotification = this.sendNotification.bind(this);
  }

  sendNotification() {
    this.widgetAPI.sendNotification('Hello World!', 'info');
  }

  render() {
    return (<div className="neo-widget__content">
      <div className="neo-widget__header">
      <div className="neo-widget__header-left">
        <span className="neo-icon-agents"></span>
        <p>React Web Component</p>
      </div>
    </div>
      <div className="neo-widget__body">
          <div className="container">
            <h3><b>Sample widget demonstrating notification api methods</b></h3>
            <button className='neo-btn neo-btn-primary neo-btn-primary--primary' onClick={this.sendNotification}>Send Notification</button>
          </div>
          </div>
      </div>
      );
    }
  }
