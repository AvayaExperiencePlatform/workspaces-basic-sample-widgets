import * as React from "react";

const SampleWidget: React.FC = () => {
  const widgetAPI = (window as any).WS.widgetAPI();

  return (
    <div id="sampleWidgetWithParcel" className="neo-widget__content">
      <div className="neo-widget__header">
        <div className="neo-widget__header-left">
          <span className="neo-icon-agents"></span>
          <p>React Web Component built with Parcel</p>
        </div>
      </div>
      <div className="neo-widget__body">
        <div className="container">
          <h3>
            <b>Sample widget demonstrating notification api methods</b>
          </h3>
          <button
            className="neo-btn neo-btn-primary neo-btn-primary--primary"
            onClick={() =>
              widgetAPI.sendNotification("Notification text", "info")
            }
          >
            Send Notification
          </button>
        </div>
      </div>
    </div>
  );
};

export default SampleWidget;
