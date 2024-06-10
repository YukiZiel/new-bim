export interface Properties {
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