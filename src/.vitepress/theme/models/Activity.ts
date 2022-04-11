import day, { Dayjs } from 'dayjs'
import { ValueOf } from '/@theme/types/Utils'
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

export const ActivityStatuses = {
  completed: 'COMPLETED',
  'in-progress': 'IN PROGRESS',
  failed: 'FAILED'
} as const

export type ActivityType = 'ultimate' | 'savage' | 'clibming'

export const ActivityTypes = {
  ultimate: ['ULTIMATE', '絶'],
  savage: ['SAVAGE', '零式'],
  dd: ['DEEP DUNGEON', 'DD'],
  clibming: ['CLIBMING', '登山']
} as const

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

  get startAsDay(): Dayjs {
    return day(this.start)
  }

  get endAsDay(): Dayjs | null {
    return this.end ? day(this.end) : null
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

  getStatusValue(): ValueOf<typeof ActivityStatuses> {
    const value = ActivityStatuses[this.status]

    if (!value) {
      throw new Error(`[poyo] Could not find activity status: "${this.status}".`)
    }

    return value
  }

  getTypeValue(): ValueOf<typeof ActivityTypes> {
    const value = ActivityTypes[this.type]

    if (!value) {
      throw new Error(`[poyo] Could not find activity type: "${this.type}".`)
    }

    return value
  }
}
