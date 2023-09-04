export interface ISeries {
    characters: Object;
    comics: Object[];
    creators: Object;
    description: string | null;
    endYear: number | undefined;
    events: Object;
    id: number | undefined;
    modified: string | undefined;
    next: string | null;
    previous: string | null;
    rating: string | undefined;
    resourceURI: string | undefined;
    startYear: number | undefined;
    stories: Object;
    thumbnail: thumbnailImage;
    title: string | undefined;
    type: string | null;
    urls: Object[];
}
export interface thumbnailImage extends ISuperHeroe {
    extension: string | undefined;
    path: string | undefined;
}