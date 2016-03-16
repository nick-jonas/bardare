import {Component} from 'angular2/core'
import {Router} from 'angular2/router'
import {GameService} from '../service/gameservice'

@Component({
  selector:'select-level',
  template: `
     <button (click)="onSelect('easy')">Easy</button>
     <button (click)="onSelect('medium')">Medium</button>
     <button (click)="onSelect('hard')">Hard</button>
  `
})

export class SelectLevel {
  constructor(private gameService:GameService, private _router:Router){}

  onSelect(difficulty){
    this.gameService.difficulty = difficulty;
    this._router.navigate(['NewChallenge']);
  }
}