import { Component } from "@angular/core";
import { AuthService } from "../user/auth.service"
import { ISession } from '../events/shared';
import { EventService} from '../events/shared';

@Component({
    selector: 'nav-bar',
    templateUrl: './navbar.component.html',
    styles: [`
        .nav.navbar-nav { font-size: 15px; }
        #searchForm { margin-right: 100px; }
        @media (max-width: 1200px) { #searchForm {display: none }}
        li > a.active { color: #f97924; }
    `]
})
export class NavBarComponent {
    searchTerm: string = "";
    foundSessions: ISession[];

    constructor(private auth: AuthService,
                private eventServie: EventService) { }

    searchSessions(searchTerm) {
        this.eventServie.searchSessions(searchTerm)
                        .subscribe(sessions => {
                            this.foundSessions = sessions;
                            console.log(this.foundSessions);
                        });
    }
}