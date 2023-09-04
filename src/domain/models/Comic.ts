import type { IComics, thumbnailImage } from "../../interfaces/Comics"
export class Comic implements IComics {
  constructor(
    public characters: Object,
    public collectedIssues: Object[],
    public collections: Object[],
    public creators: Object,
    public dates: Object[],
    public description: string | null,
    public diamondCode: string | undefined,
    public digitalId: number | undefined,
    public ean: string | undefined,
    public events: Object,
    public format: string | undefined,
    public id: number | undefined,
    public images: Object[],
    public isbn: string | undefined,
    public issn: string | undefined,
    public issueNumber: number | undefined,
    public modified: string | undefined,
    public pageCount: number | undefined,
    public prices: Object[],
    public resourceURI: string | undefined,
    public series: Object,
    public stories: Object,
    public textObjects: Object[],
    public thumbnail: thumbnailImage,
    public title: string | undefined,
    public urls: Object[],
  ) {}
}