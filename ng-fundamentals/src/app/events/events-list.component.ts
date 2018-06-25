import { Component, OnInit } from "@angular/core";
import { EventService } from "./shared/event.service";

@Component({
    selector: 'events-list',
    template: `
        <div>
            <h1>Upcoming Angular Events</h1>
            <hr>
            <div class="row">
                <div class="col-md-5" *ngFor="let e of events">
                    <event-thumbnail #thumbnail 
                        [event]="e"></event-thumbnail>
                </div>
            </div>
        </div>
    `,
})
export class EventListComponent implements OnInit {
    events: any[];

    constructor(private eventService: EventService) {
    }

    ngOnInit() {
        this.events = this.eventService.getEvent();
    }
}