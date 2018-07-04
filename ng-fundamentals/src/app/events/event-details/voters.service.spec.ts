import { VoterService } from './voter.service';
import { ISession } from '../shared';
import { of } from 'rxjs/observable/of';

describe("VoterService", () => {
    let voterService: VoterService,
    mockHttp;
    beforeEach(() => {
        mockHttp = jasmine.createSpyObj("mockHttp", ["delete", "post"]);
        voterService = new VoterService(mockHttp);
    });
    
    describe("deleteVoter", () => {
        it('should remove the voter from the list of voters', () => {
            var session = { id: 6, voters: ["Joe", "John"]};
            mockHttp.delete.and.returnValue(of(false));

            voterService.deleteVoter(3, <ISession>session, "Joe");

            expect(session.voters.length).toBe(1);
            expect(session.voters[0]).toBe("John");
        });

        it('should call http.delete with the right URL', function () {
            var session = { id: 6, voters: ["Joe", "John"]};
            mockHttp.delete.and.returnValue(of(false));

            voterService.deleteVoter(3, <ISession>session, "Joe");

            expect(mockHttp.delete).toHaveBeenCalledWith("/api/events/3/sessions/6/voters/Joe");
        });
    })

    describe('addVoter', function () {
        it('should call http.post with the right URL', function () {
            var session = { id: 6, voters: ["John"]};
            mockHttp.post.and.returnValue(of(false));

            voterService.addVoter(3, <ISession>session, "Joe");

            expect(mockHttp.post).toHaveBeenCalledWith("/api/events/3/sessions/6/voters/Joe", {}, jasmine.any(Object));
        });
    });
})