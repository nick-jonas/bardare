import {Component} from 'angular2/core'
import {Router} from 'angular2/router'
import {GameService} from '../service/gameservice'
import {Challenge} from '../model/challenge'

@Component({
  selector: 'challenge',
  template: `
      <div class="current-challenge">
        {{currentChallenge.copy}}
      </div>
     <button (click)="startChallenge()">Let's do it</button>
     <button (click)="newChallenge()">Skip</button>
  `
})

export class NewChallenge {

  currentChallenge:Challenge

  constructor(private gameService: GameService, private _router: Router) { 
    this.newChallenge()
  }

  newChallenge(){
    this.currentChallenge = this.gameService.getRandomChallenge()
  }

  startChallenge(){
    this.gameService.challenge = Object.assign({}, this.currentChallenge)
    this._router.navigate(['Play']);
  }

}