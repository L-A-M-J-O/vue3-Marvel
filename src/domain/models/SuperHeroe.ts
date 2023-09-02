import type {ISuperHeroe, thumbnailImage } from "../../interfaces/SuperHeroe"

export class SuperHeroe implements ISuperHeroe {
  constructor(
    public comics: Object,
    public description: string,
    public id: number,
    public modified: string,
    public name: string,
    public resourceURI: string,
    public series: Object,
    public stories: Object,
    public thumbnail: thumbnailImage,
    public urls: Object[],
  ) {}
}