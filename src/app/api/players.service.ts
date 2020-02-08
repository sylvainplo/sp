import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class PlayersService {
    constructor(private http: HttpClient) {
    }

    getPlayers() {
        return this.http.get('http://my-json-server.typicode.com/sylvainplo/sp/players');
    }
}
