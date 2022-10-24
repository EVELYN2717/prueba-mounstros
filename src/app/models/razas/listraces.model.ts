import { RazasModel } from "./razas.model";


export interface ListRacesModel {
    count: number;
    results: Array<RazasModel>;
}