import {Component, OnInit} from '@angular/core';
import {PlayersService} from '../../api/players.service';

@Component({
    selector: 'app-players',
    templateUrl: './players.page.html',
    styleUrls: ['./players.page.scss'],
})
export class PlayersPage implements OnInit {
    players: Array<any>;

    constructor(public playersService: PlayersService) {
    }

    ngOnInit() {
        this.playersService.getPlayers().subscribe((response: Array<any>) => {
            this.players = response;
        });
    }

}
