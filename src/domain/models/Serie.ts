import type { ISeries, thumbnailImage } from "../../interfaces/Series"

export class Serie implements ISeries {
    constructor(
        public characters: Object,
        public comics: Object[],
        public creators: Object,
        public description: string | null,
        public endYear: number | undefined,
        public events: Object,
        public id: number | undefined,
        public modified: string | undefined,
        public next: string | null,
        public previous: string | null,
        public rating: string | undefined,
        public resourceURI: string | undefined,
        public startYear: number | undefined,
        public stories: Object,
        public thumbnail: thumbnailImage,
        public title: string | undefined,
        public type: string | null,
        public urls: Object[],
    ) { }
}