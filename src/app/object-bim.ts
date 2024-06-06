export interface ObjectBIM {
    id: string;
    idemp: string;
    image: string;
    description: string;
    llicencia: string;
    dataEmissio: string;
    ecob: string;
    sistema: string,
    subsistema: string,
    patrocinat: string,
    patrocinatTxt: string,
    patrocinatLogo: string,
    patrocinatUrl: string,
    downloads: Download[]
}

export interface Download {
    format: string,
    formatdown: FormatDown[]
}

export interface FormatDown {
    fitxer: string,
    ext: string,
    url: string,
    size: string,
    version: string,
    format: string,
    download: boolean
}