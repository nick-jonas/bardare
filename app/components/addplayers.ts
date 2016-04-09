import {Component, ElementRef} from 'angular2/core'
import {RouterLink} from 'angular2/router'
import {Player} from '../model/player'
import {GameService} from '../service/gameservice'

@Component({
  selector: 'add-players',
  directives: [RouterLink],
  template: `
    <div class="new-player-wrap" *ngIf="players.length === 0 || showAddNewPlayer">
      <div class="avatar-wrap">
        <ul class="avatar-list">
          <li class="spacer"></li>
          <li *ngFor="#avatar of avatars; #i = index" class="avatar" [class.selected]="i == selectedAvatarIndex">
            <div class="avatar-img">
              <img [attr.src]="avatar" alt="" />
            </div>
          </li>
        </ul>
      </div>
      <div class="right arrow" (click)="onArrow(true)" *ngIf="selectedAvatarIndex < avatars.length - 1"></div>
      <div class="left arrow" (click)="onArrow(false)" *ngIf="selectedAvatarIndex !== 0"></div>
      <input type="text" class="form-control" required [(ngModel)]="currentPlayer.name" placeholder="Type name">
    </div>

    <div class="button-group">
      <button type="button" class="button white add-player" (click)="newPlayer()">Add Player</button>
      <a *ngIf="players.length > 1 && !showAddNewPlayer" [routerLink]="['NewChallenge']" class="button white">Start Round</a>
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

  currentPlayer:Player = new Player('', '', '', [], [])
  players:Array<Player> = []
  showAddNewPlayer:boolean = false
  isMouseDown:boolean = false
  animateFrame:any
  selectedAvatarIndex:number = 0
  avatarWidth:number
  avatarListEl:any

  constructor(private gameService:GameService, private el:ElementRef){
  }

  onArrow(isNext:boolean){
    if(isNext) this.selectedAvatarIndex++
    else this.selectedAvatarIndex--
  }

  ngAfterViewInit(){
    this.avatarListEl = this.el.nativeElement.querySelector('.avatar-list')
    this.avatarWidth = this.el.nativeElement.querySelector('.avatar').offsetWidth
    this.animateList()
  }

  animateList(){
    this.avatarListEl.style.transform = 'translateX(' + (this.avatarWidth * this.selectedAvatarIndex * -1) + 'px)'
    this.animateFrame = requestAnimationFrame(() => this.animateList())
  }

  newPlayer(){
    if (this.currentPlayer.name === '') {
      this.showAddNewPlayer = true
      setTimeout(()=>{
        this.avatarListEl = this.el.nativeElement.querySelector('.avatar-list')
        this.avatarWidth = this.el.nativeElement.querySelector('.avatar').offsetWidth
      })
      return
    }
    this.showAddNewPlayer = false
    let guid = this.guid()
    let player: Player = new Player(guid, this.currentPlayer.name, this.avatars[this.selectedAvatarIndex], [], [])
    this.players.push(player)
    this.gameService.addPlayer(Object.assign({}, player))
    this.currentPlayer.name = ''
    this.selectedAvatarIndex = 0
  }

  guid() {
    function s4() {
      return Math.floor((1 + Math.random()) * 0x10000)
        .toString(16)
        .substring(1);
    }
    return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
      s4() + '-' + s4() + s4() + s4();
  }

  ngOnDestroy(){
    cancelAnimationFrame(this.animateFrame)
  }

}