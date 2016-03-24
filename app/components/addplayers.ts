import {Component} from 'angular2/core'
import {RouterLink} from 'angular2/router'
import {Player} from '../model/player'
import {GameService} from '../service/gameservice'

@Component({
  selector: 'add-players',
  directives: [RouterLink],
  template: `
    <div class="new-player-wrap" *ngIf="players.length === 0 || showAddNewPlayer">
      <div class="avatar-wrap">
        <ul>
          <li class="spacer"></li>
          <li *ngFor="#avatar of avatars" class="avatar">
            <div class="avatar-img">
              <img [attr.src]="avatar" alt="" />
            </div>
          </li>
        </ul>
      </div>
      <input type="text" class="form-control" required [(ngModel)]="currentPlayer.name" placeholder="Type name">
    </div>

    <div class="button-group">
      <button type="button" class="button white add-player" (click)="newPlayer()">Add Player</button>
      <a *ngIf="players.length > 1" [routerLink]="['NewChallenge']" class="button white">Start Round</a>
    </div>
    
    <div class="current-players-wrap" *ngIf="players.length > 0 && !showAddNewPlayer">
      <ul>
        <li *ngFor="#player of players">
          <div class="avatar-img">
            <img [attr.src]="player.avatar" alt="" />
          </div>
          <h3 class="player-name">{{player.name}}</h3>
        </li>
      </ul>
    </div>
    `

})

export class AddPlayers {

  avatars:Array<string> = [
    'img/avatars/1.png', 'img/avatars/2.png', 'img/avatars/3.png', 'img/avatars/4.png', 'img/avatars/5.png', 'img/avatars/6.png',
  ]

  currentPlayer:Player = new Player('', '', [], [])
  players:Array<Player> = []
  showAddNewPlayer:boolean = false

  constructor(private gameService:GameService){
  }

  newPlayer(){
    if (this.currentPlayer.name === '') {
      this.showAddNewPlayer = true
      return
    }
    this.showAddNewPlayer = false
    let player: Player = new Player(this.currentPlayer.name, this.avatars[0], [], [])
    this.players.push(player)
    this.gameService.addPlayer(Object.assign({}, player))
    this.currentPlayer.name = ''
  }

}