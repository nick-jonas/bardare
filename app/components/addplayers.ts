import {Component} from 'angular2/core'
import {RouterLink} from 'angular2/router'
import {Player} from '../model/player'
import {GameService} from '../service/gameservice'

@Component({
  selector: 'add-players',
  directives: [RouterLink],
  template: `
    <h2>Add Players</h2>
    <ul>
      <li *ngFor="#avatar of avatars">{{avatar}}</li>
    </ul>
    <form>
      <input type="text" class="form-control" required [(ngModel)]="currentPlayer.name">
      <button type="button" class="btn add-player" (click)="newPlayer()">Add Player</button>
    </form>
    <a *ngIf="players.length > 0" [routerLink]="['SelectLevel']">Start Round</a>

    <ul>
      <li *ngFor="#player of players">{{player.name}} | {{player.avatar}}</li>
    </ul>
    `

})

export class AddPlayers {

  avatars:Array<string> = [
    'person1', 'person2', 'person3'
  ]

  currentPlayer:Player = new Player('', '')
  players:Array<Player> = []

  constructor(private gameService:GameService){
  }

  newPlayer(){
    let player: Player = new Player(this.currentPlayer.name, 'avatarlink')
    this.players.push(player)
    this.gameService.addPlayer(Object.assign({}, player))
    this.currentPlayer.name = ''
  }

}