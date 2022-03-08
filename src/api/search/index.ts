import {$api} from "../../http";


export const search = async (url: string) => {
    const response = await $api.get(`statistic/now?url=${url}`);
    return response.data;
};