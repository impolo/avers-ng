

export class Catalog {
  name: string
  year: string
  special: string
  image_src: string

  constructor(name: string, year: string, special: string, image_src: string) {
    this.name = name
    this.year = year
    this.special = special
    this.image_src = image_src
  }
}
