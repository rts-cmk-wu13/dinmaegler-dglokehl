export type ThumbnailProps = {
    name: string;
    hash: string;
    ext: string;
    mime: string;
    width: number;
    height: number;
    size: number;
    path: string;
    url: string;
    provider_metadata: {
        public_id: string;
        resource_type: string;
    }
}

export type ImageProps = {
    name: string;
    size: number;
    width: number;
    height: number;
    url: string;
    id: string;

    formats: {
        thumbnail: ThumbnailProps;
    }
}