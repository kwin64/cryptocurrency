import React, {useEffect, useState} from 'react';
import {instance} from './api/instance';
import './App.scss';

type DataType = {
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

function App() {

    const [data, setData] = useState<DataType>()

    useEffect(() => {
        // @ts-ignore
        let id = 'bitcoin'
        instance.get(`assets/${id}`)
            // @ts-ignore
            .then(res => setData(res.data.data))
    }, [])

    console.log(data)

    return (
        <table className={'container'}>
            <tr className={'title'}>
                <th className={'line'}>#</th>
                <th className={'line'}>Coin</th>
                <th className={'line'}></th>
                <th className={'line'}>Price $</th>
                <th className={'line'}>24h Volume</th>
                <th className={'line'}>Mkt Cap</th>
            </tr>
            <tr>
                <th>{data?.id.length}</th>
                <th>{data?.name}</th>
                <th>{data?.symbol}</th>
                <th>{data?.priceUsd}</th>
                <th>{data?.volumeUsd24Hr}</th>
                <th>{data?.marketCapUsd}</th>
            </tr>
        </table>
    );
}

export default App;
