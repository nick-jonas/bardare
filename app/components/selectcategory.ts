import {Component} from 'angular2/core'
import {Router} from 'angular2/router'
import {GameService, Category} from '../service/gameservice'

@Component({
  selector:'select-category',
  template: `
     <ul class="categories">
       <li *ngFor="#category of gameService.categories">
         <button (click)="onSelect(category)">{{category.name}}</button>
       </li>
     </ul>
  `
})

export class SelectCategory {
  constructor(private gameService:GameService, private _router:Router){}

  onSelect(category:Category){
    this.gameService.category = category
    this._router.navigate(['NewChallenge'])
  }
}