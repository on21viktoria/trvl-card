export interface IImageGroup {
    id: string,
    name: string,
    folder: string,
    images: IImages[]
}

export interface IImages {
    id: string,
    name: string
}