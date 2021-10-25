import {instance} from "./instance";
import {DataType} from "../store/reducers/cryptocurrency";

type RequestType = {
    data: Array<DataType>
}

export const cryptocurrencyAPI = {
    getCryptocurrency() {
        return instance.get<RequestType>(`assets`)
    }
}