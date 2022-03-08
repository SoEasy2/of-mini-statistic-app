import {ISearch} from "../../../models/search";

export interface IState {
    isLoad: boolean;
    error: any;
    data: ISearch | null;
}
