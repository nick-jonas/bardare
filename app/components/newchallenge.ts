import {Component, ElementRef, NgZone} from 'angular2/core'
import {Router, RouterLink} from 'angular2/router'
import {GameService} from '../service/gameservice'
import {Challenge} from '../model/challenges'
import {Player} from '../model/player'

@Component({
  selector: 'challenge',
  template: `
      <div class="current-challenge">
        <div class="challenge-name">{{currentChallenge?.name}}</div>
        <div class="player">
          <div class="avatar"><img [attr.src]="currentPlayer?.avatar" alt="" /></div>
          <div class="name">{{currentPlayer?.name}}</div>
        </div>
      </div>
     
     <div class="bottom-container">
       <div class="button-wrap" *ngIf="!isGameOn">
         <button (click)="newChallenge()" class="button white skip">Skip</button>
         <button (click)="startChallenge()" class="button white game-on">Game on!</button>
       </div>
       <div class="button-wrap" *ngIf="isGameOn">
         <button (click)="failure()" class="button white skip">No way Jose.</button>
         <button (click)="success()" class="button white game-on">Nailed it!</button>
       </div>
     </div>
  `
})

export class NewChallenge {

  currentChallenge:Challenge
  currentPlayer:Player
  isGameOn:boolean = false

  constructor(private gameService: GameService, private _router: Router, private el:ElementRef, private zone:NgZone) {
    if (this.gameService.players.length === 0) {
      this._router.navigate(['AddPlayers'])
    }else{
      this.newChallenge()
    }
  }

  newChallenge(){
    this.currentChallenge = this.gameService.getRandomChallenge()
    this.currentPlayer = this.gameService.getRandomPlayer()
  }

  startChallenge(){
    this.gameService.challenge = Object.assign({}, this.currentChallenge)
    this.gameService.currentPlayer = this.currentPlayer
    this.isGameOn = true
  }

  failure(){
    this.gameService.currentPlayer.losses.push(Object.assign({}, this.currentChallenge))
    this._router.navigate(['Score'])
  }

  success(){
    this.gameService.currentPlayer.wins.push(Object.assign({}, this.currentChallenge))
    this._router.navigate(['Score'])
  }

}