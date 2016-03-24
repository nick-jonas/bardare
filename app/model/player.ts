import {Challenge} from './challenges'

export class Player {
  constructor(
      public name: string,
      public avatar: string,
      public wins: Array<Challenge>,
      public losses: Array<Challenge>
    ){
  }
}