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
  `
})

export class Play {

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


}