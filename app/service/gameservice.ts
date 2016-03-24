import {Injectable} from 'angular2/core'
import {Player} from '../model/player'
import {challenges, Challenge} from '../model/challenges'

export class GameService {

  public players:Array<Player> = []
  private _challenge:Challenge

  constructor(){}

  addPlayer(player:Player){
    this.players.push(player)
  }

  getRandomChallenge():Challenge{
    return challenges[Math.floor(Math.random() * challenges.length)]
  }

  getRandomPlayer():Player{
    return this.players[Math.floor(Math.random() * this.players.length)] 
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



}