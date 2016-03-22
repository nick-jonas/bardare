import {Challenge} from './challenge'

export class Player {
  constructor(
      public name: string,
      public avatar: string,
      public wins: Array<Challenge>,
      public losses: Array<Challenge>
    ){
  }
}