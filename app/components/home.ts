import {Component} from 'angular2/core'
import {RouterLink} from 'angular2/router'

@Component({
  selector: 'home',
  directives: [RouterLink],
  template: `
    <h2>Home</h2>
    <a [routerLink]="['AddPlayers']">Start</a>
    `

})

export class Home { 
  constructor(){

  }
}