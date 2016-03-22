import {Component} from 'angular2/core'
import {Router} from 'angular2/router'
import {Challenge, GameService} from '../service/gameservice'
import {Player} from '../model/player'

@Component({
  selector: 'play',
  template: `
      <div class="current-player">player: {{currentPlayer?.name}}</div>
      <div class="current-challenge">challenge: {{currentChallenge?.name}}</div>
      <div *ngIf="isPlaying">
        <button (click)="success()">Nailed it!</button>
        <button (click)="fail()">No way Jose.</button>
      </div>
      <div *ngIf="!isPlaying">
        <ul class="players">
          <li *ngFor="#player of gameService.players">
            <img [attr.src]="player.avatar" alt="avatar image" />
            <span class="win-count">{{player.wins.length}}</span>
            <span class="name">{{player.name}}</span>
          </li>
        </ul>
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
    console.log('fail',this.currentChallenge)
    this.currentPlayer.losses.push(Object.assign({}, this.currentChallenge))
    this.isPlaying = false
  }

  success(){
    console.log('success', this.currentChallenge)
    this.currentPlayer.wins.push(Object.assign({}, this.currentChallenge))
    this.isPlaying = false
  }

  newRound(){
    this._router.navigate(['NewChallenge']);
  }

  endGame(){

    this._router.navigate(['Index']); 
  }


}