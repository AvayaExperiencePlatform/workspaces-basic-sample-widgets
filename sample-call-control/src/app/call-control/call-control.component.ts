import { ChangeDetectorRef, Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-call-control',
  templateUrl: './call-control.component.html',
  styleUrls: ['./call-control.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CallControlComponent implements OnInit{
  private widgetAPI: any;
  public allInteractions = [];

  constructor(private changeDetectorRef: ChangeDetectorRef) {
    this.widgetAPI = (<any>window).WS.widgetAPI();
    this.allInteractions = this.widgetAPI.getAllInteractions();
   }

  ngOnInit(): void {
    this.widgetAPI.onDataEvent('onAnyInteractionEvent',() => {
      // rechecking intercation list on interaction event
      this.allInteractions = this.widgetAPI.getAllInteractions();
      this.changeDetectorRef.detectChanges();
    });
  }

  acceptInteraction() {
    this.allInteractions = this.widgetAPI.getAllInteractions();
    // get first instance of alerting voice interaction for call controls
    const interactionToAccept = this.getCallControlInteraction(this.allInteractions, "ALERTING", "VOICE");
    if (interactionToAccept && interactionToAccept.id) {
      this.widgetAPI.acceptInteraction(interactionToAccept.id);
    } else {
      this.widgetAPI.sendNotification("Could not find an alerting Voice call to accept. Please ensure there is an alerting call available and try again", "info");
    }
  }

  endInteraction() {
    this.allInteractions = this.widgetAPI.getAllInteractions();
    // get first instance of active voice interaction for call controls
    const interactionToAccept = this.getCallControlInteraction(this.allInteractions, "ACTIVE", "VOICE");
    if (interactionToAccept && interactionToAccept.id) {
      this.widgetAPI.endInteraction(interactionToAccept.id);
    } else {
      this.widgetAPI.sendNotification("Could not find an active Voice call to delete. Please ensure there is an active call available and try again", "info");
    }
  }

  private getCallControlInteraction(interactions: any, state: string, channel: string) {
    const callControlInteraction = interactions.find((interaction: any) => (interaction.state === state && interaction.channel === channel));
    return callControlInteraction; 
  }

}