export interface IComics {
    characters: Object;
    collectedIssues: Object[];
    collections: Object[];
    creators: Object;
    dates: Object[];
    description: string | null;
    diamondCode: string | undefined;
    digitalId: number | undefined;
    ean: string | undefined
    events: Object;
    format: string | undefined;
    id: number | undefined;
    images: Object[];
    isbn: string | undefined;
    issn: string | undefined;
    issueNumber: number | undefined;
    modified: string | undefined;
    pageCount: number | undefined;
    prices: Object[];
    resourceURI: string | undefined;
    series: Object;
    stories: Object;
    textObjects: Object[];
    thumbnail: thumbnailImage;
    title: string | undefined;
    urls: Object[];
}
export interface thumbnailImage extends ISuperHeroe {
    extension: string | undefined;
    path: string | undefined;
}