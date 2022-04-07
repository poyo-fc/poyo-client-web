import { useData } from 'vitepress'
import Activity from '/@theme/models/Activity'

export interface ActivityCollection {
  data: Activity[]
}

export interface UseActivityCollectionOptions {
  take?: number
}

export function useActivityCollection(
  options: UseActivityCollectionOptions = {}
): ActivityCollection {
  const { theme } = useData()

  let data = theme.value.activities.data

  if (options.take !== undefined) {
    data = data.slice(0, options.take)
  }

  data = data.map((data: any) => new Activity(data))

  return {
    data
  }
}
