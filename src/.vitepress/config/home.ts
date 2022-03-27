import fs from 'fs'
import path from 'path'

export default {
  covers: getCoverImages()
}

function getCoverImages(): string[] {
  const dir = path.resolve(__dirname, '../../public/img/cover')

  return fs.readdirSync(dir).map((file) => {
    return `/img/cover/${file}`
  })
}
