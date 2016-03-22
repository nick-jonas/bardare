import {Injectable} from 'angular2/core'
import {Player} from '../model/player'

export interface Challenge {
  name: string
}

export interface Category {
  name: string,
  challenges: Array<Challenge>
}

export class GameService {

  public players:Array<Player> = []
  private _category:Category
  private _challenge:Challenge
  public categories: Array<Category> = [
    {
      name: 'slip it in',
      challenges: [{ name: 'challenge 1' }, { name: 'challenge 2' }]
    },
    {
      name: 'conversation starters',
      challenges: [{ name: 'challenge 1' }, { name: 'challenge 2' }]
    },
    {
      name: 'drink-related',
      challenges: [{ name: 'challenge 1' }, { name: 'challenge 2' }]
    }
  ];

  constructor(){}

  addPlayer(player:Player){
    this.players.push(player)
  }

  getRandomChallenge():Challenge{
    let challenges = this._category.challenges
    return challenges[Math.floor(Math.random() * challenges.length)]
  }

  getRandomPlayer():Player{
    return this.players[Math.floor(Math.random() * this.players.length)] 
  }

  set category(cat:Category){
    this._category = cat
  }

  set challenge(challenge:Challenge){
    this._challenge = challenge
  }

  get challenge():Challenge{
    return this._challenge
  }

  get category():Category{
    return this._category
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