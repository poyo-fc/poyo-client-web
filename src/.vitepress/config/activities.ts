import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

export default {
  data: getActivities()
}

function getActivities() {
  const dir = path.resolve(__dirname, '../../activities')

  return fs.readdirSync(dir).reverse().map((file) => {
    return createActivityData(file, dir)
  })
}

function createActivityData(file: string, dir: string) {
  const filePath = path.join(dir, file)

  const src = fs.readFileSync(filePath, 'utf-8')

  const { data } = matter(src)

  return data
}
