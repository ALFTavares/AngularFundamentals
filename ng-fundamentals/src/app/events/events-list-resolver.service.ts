import { Resolve } from "@angular/router";
import { Injectable } from "@angular/core";
import { EventService } from "./shared/event.service";
import { Observable } from 'rxjs/Observable';

@Injectable()
export class EventListResolver implements Resolve<any> {
    constructor(private eventService: EventService) {

    }
    resolve() {
        return this.eventService.getEvents().subscribe();
    }
}