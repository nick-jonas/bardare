import {Component} from 'angular2/core'
import {Router} from 'angular2/router'
import {GameService} from '../service/gameservice'

@Component({
  selector: 'score',
  template: `
    <ul class="players">
      <li *ngFor="#player of gameService.players">
        <div class="avatar-wrap">
          <img [attr.src]="player.avatar" alt="avatar image" class="avatar-img"/>
        </div>
        <span class="win-count">{{player.wins.length}}</span>
        <span class="player-name">{{player.name}}</span>
      </li>
    </ul>
    <div class="bottom-container">
      <div class="button-wrap">
        <button class="button white" (click)="newRound()">Another Round</button>
      </div>
    </div>
  `
})

export class Score {

  constructor(private gameService:GameService, private _router:Router){
    if (this.gameService.players.length === 0) {
      this._router.navigate(['AddPlayers'])
    }
  }

  newRound(){
    this._router.navigate(['NewChallenge'])
  }
}