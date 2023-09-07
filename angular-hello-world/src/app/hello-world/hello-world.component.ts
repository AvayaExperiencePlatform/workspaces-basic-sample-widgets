import { ChangeDetectorRef, Component, ElementRef, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-hello-world',
  templateUrl: './hello-world.component.html',
  styleUrls: ['./hello-world.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class HelloWorldComponent implements OnInit {
  private widgetAPI: any;
  private interactionId: string;

  public message: string = '';
  public anyWidgetMessage: string = '';
  public interaction: any;
  public interactionEnded: any;
  public customer: any;
  public context: any;
  public media: any;
  public mediaMessage: any;
  public pagePushUrl: any;
  public agent: any;
  public widgetMessage: any;
  public navigation: any;
  public locale: any;
  public capabilities: any;
  public customCardDeleted: any;
  public metadata: any;
  public configuration: any;
  public dispositionCodes: any[];
  public voiceDispositionCodes: any[];
  public workCodes: any[];
  public emailWorkCodes: any[];
  public additionalWorkCodes: any[];
  public notReadyReasonCodes: any[];

  constructor(private changeDetectorRef: ChangeDetectorRef, private element: ElementRef) { 
    this.interactionId = this.element.nativeElement.getAttribute('interactionid');
    this.widgetAPI = (<any>window).WS.widgetAPI( this.interactionId);
  }

  ngOnInit(): void {

    this.metadata = this.widgetAPI.getMetadata('angular-hello-world');
    this.capabilities = this.widgetAPI.getCapabilities();
    this.configuration = this.widgetAPI.getConfiguration();
    this.dispositionCodes = this.widgetAPI.getDispositionCodes();
    this.voiceDispositionCodes = this.widgetAPI.getDispositionCodes('VOICE');
    this.workCodes = this.widgetAPI.getWorkCodes();
    this.emailWorkCodes = this.widgetAPI.getWorkCodes('EMAIL');
    this.additionalWorkCodes = this.widgetAPI.getAdditionalWorkCodes();
    this.notReadyReasonCodes = this.widgetAPI.getNotReadyReasonCodes();

    // Interaction event fired when a new interaction is created or has been updated
    this.widgetAPI.onDataEvent('onInteractionEvent',(data) => {
      this.interaction = data;
      this.changeDetectorRef.detectChanges();
    });

    // Interaction ended event fired when the interaction card has ended
    this.widgetAPI.onDataEvent('onInteractionEndedEvent',(data) => {
      this.interactionEnded = data;
      this.changeDetectorRef.detectChanges();
    });

    // TODO: Not yet supported
    // Customer data from CRM (voice only)
    this.widgetAPI.onDataEvent('onCRMDataEvent',(data) => {
      this.customer = data;
      this.changeDetectorRef.detectChanges();
    });

    // Interaction context data
    this.widgetAPI.onDataEvent('onContextDataEvent',(data) => {
      this.context = data;
      this.changeDetectorRef.detectChanges();
    });

    // Media data from chat, sms, email, social
    this.widgetAPI.onDataEvent('onMediaEvent', (data) => {
      this.media = data;
      this.changeDetectorRef.detectChanges();
    });

    // Media message data from chat, sms, email, social
    this.widgetAPI.onDataEvent('onMediaMessageEvent', (data) => {
      this.mediaMessage = data;
      this.changeDetectorRef.detectChanges();
    });

    // TODO: Not yet supported
    // Page push url message data from chat, sms, social
    this.widgetAPI.onDataEvent('onPagePushUrlEvent', (data) => {
      this.pagePushUrl = data;
      this.changeDetectorRef.detectChanges();
    });

    // Triggered on agent state changes
    this.widgetAPI.onDataEvent('onAgentStateEvent', (data) => {
      this.agent = data;
      this.changeDetectorRef.detectChanges();
    });

    // Triggered when the widget receives a message from another widget
    this.widgetAPI.onDataEvent('onMessageEvent', (data) => {
      this.widgetMessage = data;
      this.changeDetectorRef.detectChanges();
    });

    // Triggered on navigation change
    this.widgetAPI.onDataEvent('onNavigationEvent', (data) => {
      this.navigation = data;
      this.changeDetectorRef.detectChanges();
    });

    // TODO: Not yet supported
    // Triggered on language change
    this.widgetAPI.onDataEvent('onLocaleUpdatedEvent', (data) => {
      this.locale = data;
      this.changeDetectorRef.detectChanges();
      this.widgetAPI.sendNotification('info', 'Widget: Locale was changed');
    });

    // Triggered when capabilities have updated
    this.widgetAPI.onDataEvent('onCapabilitiesEvent', (data) => {
      this.capabilities = data;
      this.changeDetectorRef.detectChanges();
    });

    // Event fired when a custom card is deleted
    this.widgetAPI.onDataEvent('onCustomCardDeletedEvent', (data) => {
      this.customCardDeleted = data;
      this.changeDetectorRef.detectChanges();
    });

    // Triggered when card is focused
    this.widgetAPI.onDataEvent('onCardFocusedEvent', (data) => {
      this.interaction = data;
      this.changeDetectorRef.detectChanges();
    });
  }

  // Send a message to another widget under the same interaction context
  sendNotification() {
    this.widgetAPI.sendMessage('Sample Widget Message: ' + this.message);
    this.widgetAPI.sendNotification('Sample Widget Message: ' + this.message, 'info');
  }

  // Send a message to any other widget not constrained by interaction context
  sendNotificationToAnyWidget() {
    this.widgetAPI.sendMessageToAnyWidget('Sample Any Widget Message: ' + this.anyWidgetMessage);
    this.widgetAPI.sendNotification('Sample Any Widget Message: ' + this.anyWidgetMessage, 'warning');
  }
}

