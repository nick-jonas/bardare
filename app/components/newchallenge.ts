import {Component} from 'angular2/core'
import {Router, RouterLink} from 'angular2/router'
import {GameService} from '../service/gameservice'
import {Challenge} from '../model/challenges'

@Component({
  selector: 'challenge',
  template: `
      <div class="current-challenge">
        {{currentChallenge?.name}}
      </div>
     <div class="button-wrap">
       <button (click)="newChallenge()" class="button white skip">Skip</button>
       <button (click)="startChallenge()" class="button white game-on">Game on!</button>
     </div>
  `
})

export class NewChallenge {

  currentChallenge:Challenge

  constructor(private gameService: GameService, private _router: Router) {
    if (this.gameService.players.length === 0) {
      this._router.navigate(['AddPlayers'])
    }else{
      this.newChallenge()
    }
  }

  newChallenge(){
    this.currentChallenge = this.gameService.getRandomChallenge()
  }

  startChallenge(){
    this.gameService.challenge = Object.assign({}, this.currentChallenge)
    this._router.navigate(['Play']);
  }

}