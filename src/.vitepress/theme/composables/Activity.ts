import { useData } from 'vitepress'
import Activity from '/@theme/models/Activity'

export interface ActivityCollection {
  data: Activity[]
}

export function useActivityCollection(): ActivityCollection {
  const { theme } = useData()

  const data = theme.value.activities.data.map((data: any) => {
    return new Activity(data)
  })

  return {
    data
  }
}
