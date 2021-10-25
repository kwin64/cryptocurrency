import {Dispatch} from 'redux'
import {cryptocurrencyAPI} from "../../api/cruptocurrencyAPI";

export type DataType = {
    changePercent24Hr: string
    explorer: string
    id: string
    marketCapUsd: string
    maxSupply: string
    name: string
    priceUsd: string
    rank: string
    supply: string
    symbol: string
    volumeUsd24Hr: string
    vwap24Hr: string
}
export type InitialStateType = {
    data: Array<DataType>
}

type ActionsType = ReturnType<typeof setDataApp>

const initialState: InitialStateType = {
    data: []
}

export const cryptocurrency = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case 'APP/CRYPTOCURRENCY/SET-DATA-APP':
            return {...state}
        default:
            return {...state}
    }
}

export const setDataApp = (data: unknown) => ({type: 'APP/CRYPTOCURRENCY/SET-DATA-APP', data} as const)

export const initializeApp = () => (dispatch: Dispatch) => {
    cryptocurrencyAPI.getCryptocurrency()
        .then(res => {
            debugger
            dispatch(setDataApp(res.data))
        })

}