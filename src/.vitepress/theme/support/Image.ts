/**
 * load the given list of images.
 */
export function load(paths: string[]): void {
  paths.forEach((path) => {
    const image = new Image()

    image.src = path
  })
}
