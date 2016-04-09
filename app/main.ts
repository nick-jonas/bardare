import "zone.js/dist/zone.min.js"
import "reflect-metadata"
import {Component, Injectable, provide} from "angular2/core"
import {bootstrap} from "angular2/platform/browser"
import {HTTP_PROVIDERS} from 'angular2/http'
import {RouteConfig, ROUTER_PROVIDERS, ROUTER_DIRECTIVES, LocationStrategy, HashLocationStrategy} from 'angular2/router'
import {App} from './components/app'
import {GameService} from './service/gameservice'


// enableProdMode();
bootstrap(App, [
    GameService,
    ...HTTP_PROVIDERS,
    ...ROUTER_PROVIDERS,
    provide(LocationStrategy, { useClass: HashLocationStrategy })
    ])
    .catch(err => console.error(err));