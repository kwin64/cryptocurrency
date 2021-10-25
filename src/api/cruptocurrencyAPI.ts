import {instance} from "./instance";

export const cryptocurrencyAPI = {
    getCryptocurrency() {
        return instance.get(`assets`)
    }
}