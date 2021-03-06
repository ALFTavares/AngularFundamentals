import { Component, OnInit } from "@angular/core";
import { EventService } from "./shared/event.service";
import { ToastrService } from "../common/toastr.service";
import { ActivatedRoute } from "@angular/router";
import { IEvent } from "./shared/index"

declare let toastr;

@Component({
    template: `
        <div>
            <h1>Upcoming Angular Events</h1>
            <hr>
            <div class="row">
                <div class="col-md-5" *ngFor="let e of events">
                    <event-thumbnail (click)="handleThumbnailClick(event.name)"
                        [event]="e"></event-thumbnail>
                </div>
            </div>
        </div>
    `,
})
export class EventListComponent implements OnInit {
    events: IEvent[];

    constructor(private eventService: EventService,
                private toastr: ToastrService,
                private route: ActivatedRoute) {
    }

    ngOnInit() {
        this.events = this.route.snapshot.data['events'];
    }

    handleThumbnailClick(eventName) {
        this.toastr.success(eventName);
    }
}