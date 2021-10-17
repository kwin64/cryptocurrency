import axios from "axios";

export const instance = axios.create({
    baseURL: 'https://api.coincap.io/v2/',
    withCredentials: true,
    headers: {'API-KEY': '76346ded-7f4a-49d5-b61c-e76d2db0e383'}
})