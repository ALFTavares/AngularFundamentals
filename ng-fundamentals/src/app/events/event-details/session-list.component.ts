import { Component, Input, OnChanges } from '@angular/core';
import { ISession } from '../shared';
import { AuthService } from '../../user/auth.service';
import { VoterService } from './voter.service';

@Component({
    selector: 'session-list',
    templateUrl: './session-list.component.html'
})
export class SessionListComponent implements OnChanges {
    @Input() sessions: ISession[];
    @Input() filterBy: string;
    @Input() sortBy: string;
    @Input() eventId: number;
    visibleSessions: ISession[] = [];

    constructor(private auth: AuthService,
                private voterService: VoterService) {}

    ngOnChanges(): void {
        if (this.sessions) {
            this.filterSessions(this.filterBy);
            this.sortBy === "name" ? this.visibleSessions.sort(this.sortByNameAsc) : this.visibleSessions.sort(this.sortByVotesDesc)
        }
    }

    private sortByVotesDesc() {
        return 0;
    }

    private sortByNameAsc() {
        return 0;
    }

    toggleVote(session: ISession): void {
        if (this.userHasVoted(session)) {
            this.voterService.deleteVoter(this.eventId, session, this.auth.currentUser.userName);
        }
        else {
            this.voterService.addVoter(this.eventId, session, this.auth.currentUser.userName);
        }
    }

    userHasVoted(session: ISession): boolean {
        return this.voterService.userHasVoted(session, this.auth.currentUser.userName);
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
