import "zone.js/dist/zone.min.js";
import "reflect-metadata";
import {Component} from "angular2/core";
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {Home} from './home'

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
    { path: '/**', redirectTo: ['Index'] }
])

export class App {

    constructor() {

    }

}