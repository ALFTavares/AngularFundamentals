import { Component, Input, OnChanges } from '@angular/core';
import { ISession } from '../shared';

@Component({
    selector: 'session-list',
    templateUrl: './session-list.component.html'
})
export class SessionListComponent implements OnChanges {
    @Input() sessions: ISession[];
    @Input() filterBy: string;
    visibleSessions: ISession[] = [];
    
    ngOnChanges(): void {
        if (this.sessions) {
            this.filterSessions(this.filterBy);
        }
    }

    private filterSessions(filter: string) {
        if (filter === 'all') {
            this.visibleSessions = this.sessions;
        }
        else {
            this.visibleSessions = this.sessions.filter(session => {
                return session.level.toLocaleLowerCase() === filter;
            });
        }
    }
}
