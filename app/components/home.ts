import {Component} from 'angular2/core'
import {RouterLink} from 'angular2/router'

@Component({
  selector: 'home',
  directives: [RouterLink],
  template: `
    <div class="title">
      <h2>Bar Dare</h2>
      <h3>A game about guts.</h3>
    </div>
    <a class="button" [routerLink]="['AddPlayers']">Let's Play!</a>
    `

})

export class Home { 
  constructor(){

  }
}