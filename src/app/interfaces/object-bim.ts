export interface ObjectBIM {
    id: string;
    idemp: string;
    image: string;
    description: string;
    empresa: string;
    sistema: string,
    subsistema: string,
    IfcBuildingElement: string,
    classeBimITeC: string,
    llicencia: string;
    patrocinat: string,
    patrocinatTxt: string,
    patrocinatLogo: string,
    patrocinatUrl: string,
    dataEmissio: string;
    ecob: string;
    downloads: Download[];
    props: Props[]
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

export interface Props {
    id: string,
    propgroup: string,
    toggle: boolean,
    values: Values[]
}

export interface Values {
    id: string,
    prop: string,
    valor: string,
    obs: string,
    format: string,
    unitats: string
}