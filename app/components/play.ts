import {Component} from 'angular2/core'
import {Router} from 'angular2/router'
import {GameService} from '../service/gameservice'
import {Challenge} from '../model/challenge'
import {Player} from '../model/player'

@Component({
  selector: 'play',
  template: `
      <div class="current-player">player: {{currentPlayer?.name}}</div>
      <div class="current-challenge">challenge: {{currentChallenge?.copy}}</div>
      <div *ngIf="isPlaying">
        <button (click)="fail()">Nailed it!</button>
        <button (click)="success()">No way Jose.</button>
      </div>
      <div *ngIf="!isPlaying">
        <button (click)="newRound()">Another Round</button>
        <button (click)="endGame()">End Game</button>
      </div>
  `
})

export class Play {

  isPlaying:boolean = true
  currentPlayer:Player
  currentChallenge:Challenge

  constructor(private gameService: GameService, private _router: Router) {
     this.init()
  }

  init(){
    if(this.gameService.players.length === 0){
      this._router.navigate(['AddPlayers'])
    }
    else if(!this.gameService.challenge){
      this._router.navigate(['NewChallenge'])
    }
    this.currentChallenge = this.gameService.challenge
    this.currentPlayer = this.gameService.getRandomPlayer()
  }

  fail(){

  }

  success(){

  }

  newRound(){

  }

  endGame(){
    
  }


}