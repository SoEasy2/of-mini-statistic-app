import {$api} from "../../http";


export const search = async (url: string) => {
    const response = await $api.get(`onlyFansModel/search?url=${url}`);
    return response.data;
};