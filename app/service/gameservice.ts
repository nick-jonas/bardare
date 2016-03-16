import {Injectable} from 'angular2/core'
import {Player} from '../model/player'
import {Challenge} from '../model/challenge'

export class GameService {

  public players:Array<Player> = []
  private _difficulty:string = 'easy'
  private _challenge:Challenge

  private challenges:Array<Challenge> = [
      new Challenge('challenge 1'),
      new Challenge('challenge 2'),
      new Challenge('challenge 3'),
      new Challenge('challenge 4')
  ]

  constructor(){}

  addPlayer(player:Player){
    this.players.push(player)
  }

  getRandomChallenge():Challenge{
    return this.challenges[Math.floor(Math.random() * this.challenges.length)]
  }

  getRandomPlayer():Player{
    return this.players[Math.floor(Math.random() * this.players.length)] 
  }


  set difficulty(diff:string){
    this._difficulty = diff
  }

  set challenge(challenge:Challenge){
    this._challenge = challenge
  }

  get challenge():Challenge{
    return this._challenge
  }



}