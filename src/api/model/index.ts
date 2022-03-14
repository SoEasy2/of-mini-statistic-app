import {IAddModelDto} from "../../models/model/add-model-dto";
import {$api} from "../../http";
import {IGetModelDto} from "../../models/model/get-model-dto";

export const addModel = async (dto: IAddModelDto) => {
    const response = await $api.post(`user/${dto.login}/model?url=${dto.url}`)
    return response.data;
}
export const getModel = async (dto:IGetModelDto) => {
    const response = await $api.get(`page/onlyFansModel/${dto.id}/statistic?days=${dto.days}`);
    return response.data
}
export const deleteModel = async (dto: number[]) => {
    const response = await $api.delete("https://of-mini-statistics-api.herokuapp.com/onlyFansModel/list", {data: dto})
    return dto
}