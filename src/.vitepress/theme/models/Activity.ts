import members from '/@theme/data/members'
import Model from './Model'
import Member from './Member'

export interface ActivityData {
  title: string
  status: ActivityStatus
  type: ActivityType
  content: string
  lead: string
  start: string
  end: string | null
  members: string[]
}

export type ActivityStatus = 'completed' | 'in-progress' | 'failed'
export type ActivityType = 'ultimate' | 'savage' | 'clibming'

export default class Activity extends Model {
  title: string
  status: ActivityStatus
  type: ActivityType
  content: string
  lead: string
  start: string
  end: string | null
  members: Member[]

  constructor(data: ActivityData) {
    super()

    this.title = data.title
    this.status = data.status
    this.type = data.type
    this.content = data.content
    this.lead = data.lead
    this.start = data.start
    this.end = data.end
    this.members = this.resolveMembers(data.members)
  }

  protected resolveMembers(ids: string[]): Member[] {
    return ids.map((id) => {
      const member = members[id]

      if (!member) {
        throw new Error(`[poyo] Could not find member id: "${id}".`)
      }

      return new Member(member)
    })
  }
}
