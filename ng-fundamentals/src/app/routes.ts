import { EventListComponent } from "./events/events-list.component";
import { EventDetailsComponent } from "./events/event-details/event-details.component";
import { Routes } from '@angular/router';
import { CreateEventComponent } from "./events/create-event.component";

export const appRoutes: Routes = [
    { path: 'events', component: EventListComponent },
    { path: 'events/new', component: CreateEventComponent },
    { path: 'events/:id', component: EventDetailsComponent },
    { path: '', redirectTo: '/events', pathMatch: 'full' }
]