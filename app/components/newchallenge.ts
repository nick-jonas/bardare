import {Component} from 'angular2/core'
import {Router} from 'angular2/router'
import {GameService, Challenge} from '../service/gameservice'

@Component({
  selector: 'challenge',
  template: `
      <div class="current-challenge">
        {{currentChallenge?.name}}
      </div>
     <button (click)="startChallenge()">Let's do it</button>
     <button (click)="newChallenge()">Skip</button>
  `
})

export class NewChallenge {

  currentChallenge:Challenge

  constructor(private gameService: GameService, private _router: Router) {
    if(!this.gameService.category){
      this._router.navigate(['SelectCategory']);  
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