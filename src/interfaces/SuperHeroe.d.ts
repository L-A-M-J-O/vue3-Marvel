export interface ISuperHeroe {
  comics: Object;
  description: string | undefined;
  id: number | undefined;
  modified: string | undefined;
  name: string | undefined;
  resourceURI: string | undefined;
  series: Object;
  stories: Object;
  thumbnail: thumbnailImage;
  urls: Object[];
}
export interface thumbnailImage extends ISuperHeroe{
  extension: string | undefined;
  path: string | undefined;
}