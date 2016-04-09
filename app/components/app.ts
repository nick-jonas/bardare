import "zone.js/dist/zone.min.js"
import "reflect-metadata"
import {Component} from "angular2/core"
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router'
import {Home} from './home'
import {AddPlayers} from './addplayers'
import {NewChallenge} from './newchallenge'
import {Score} from './score'

@Component({
    selector: 'app',
    directives: [ROUTER_DIRECTIVES],
    template: `
    <main>
      <router-outlet></router-outlet>
    </main>
  `
})

@RouteConfig([
    { path: '/', name: 'Index', component: Home },
    { path: '/players', name: 'AddPlayers', component: AddPlayers},
    { path: '/challenge', name: 'NewChallenge', component: NewChallenge },
    { path: '/score', name: 'Score', component: Score},
    { path: '/**', redirectTo: ['Index'] }
])

export class App {

    constructor() {

    }

}