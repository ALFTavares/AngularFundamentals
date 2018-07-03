import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { Injectable } from "@angular/core";
import { EventService } from "./shared/event.service";
import { Observable } from 'rxjs/Observable';

@Injectable()
export class EventResolver implements Resolve<any> {
    constructor(private eventService: EventService) {

    }
    resolve(route: ActivatedRouteSnapshot) {
        return this.eventService.getEvent(route.params['id']).subscribe();
    }
}