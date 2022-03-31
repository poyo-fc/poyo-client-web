import Model from './Model'

export interface MemberData {
  id: string
  name: string
}

export default class Member extends Model {
  id: string
  name: string

  constructor(data: MemberData) {
    super()

    this.id = data.id
    this.name = data.name
  }
}
