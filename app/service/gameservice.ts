import {Injectable} from 'angular2/core'
import {Player} from '../model/player'
import {challenges, Challenge} from '../model/challenges'

export class GameService {

  public players:Array<Player> = []
  private _challenge:Challenge
  public currentPlayer: Player;

  constructor(){}

  addPlayer(player:Player){
    this.players.push(player)
  }

  getRandomChallenge():Challenge{
    return challenges[Math.floor(Math.random() * challenges.length)]
  }

  getRandomPlayer():Player{
    let index: number = Math.floor(Math.random() * this.players.length)
    if (this.currentPlayer) { // try and get a new player
      let newPlayer:Player = this.getPlayerWhoHasntPlayed()
      if(newPlayer){ // if there's a player who hasnt played
        index = this.getPlayerIndex(newPlayer)
      }else{ // get a player who is not the last one
        let currIndex = this.getPlayerIndex(this.currentPlayer)
        if (currIndex === -1) {
          console.log('Error: no players!')
          return
        }
        while (index === currIndex) {
          index = Math.floor(Math.random() * this.players.length)
        }
      }
    }
    return this.players[index] 
  }

  set challenge(challenge:Challenge){
    this._challenge = challenge
  }

  get challenge():Challenge{
    return this._challenge
  }

  getWinner():Array<Player>{
    let winners:Array<Player> = []
    for (let i = 0; i < this.players.length; i++){
      if(winners.length === 0 || this.players[i].wins.length >= winners[0].wins.length){
        winners.push(this.players[i])
      }
    }
    return winners
  }

  getPlayerWhoHasntPlayed(){
    let playersHaventPlayed:Array<Player> = []
    for (var i = 0; i < this.players.length; i++) {
      if (this.players[i].wins.length === 0 && this.players[i].losses.length === 0){
        playersHaventPlayed.push(this.players[i])
      }
    }
    if(playersHaventPlayed.length > 0){
      return playersHaventPlayed[Math.floor(Math.random() * playersHaventPlayed.length)]
    }
    return null
  }

  getPlayerIndex(player:Player){
    for (var i = 0; i < this.players.length; i++){
      if(player.id === this.players[i].id) return i
    }
    return -1
  }


}