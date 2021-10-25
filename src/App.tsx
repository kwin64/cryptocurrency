import React, {useEffect} from 'react';
import './App.scss';
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "./store/store";
import {DataType, initializeApp} from "./store/reducers/cryptocurrency";

function App() {

    const dispatch = useDispatch()
    const data = useSelector<AppRootStateType, Array<DataType>>(state => state.cryptocurrency.data)

    useEffect(() => {
        dispatch(initializeApp())
    }, [])
    console.log(data)

    return (
        <>{data?.map(s => {
            return (
                <table className={'container'} key={s.rank}>
                    <tr className={'title'}>
                        <th className={'line'}>Rank</th>
                        <th className={'line'}>Name</th>
                        <th className={'line'}>Price $</th>
                        <th className={'line'}>Market Cap</th>
                        <th className={'line'}>VWAP (24Hr) $</th>
                        <th className={'line'}>Supply</th>
                        <th className={'line'}>Volume (24Hr)</th>
                        <th className={'line'}>Change (24Hr)</th>
                    </tr>
                    <tr>
                        <th>{s.rank}</th>
                        <th>{s.name}</th>
                        <th>{Math.floor(+(s.priceUsd) * 100) / 100}</th>
                        <th>{Math.floor(+(s.marketCapUsd) * 0.0000001) / 100}b</th>
                        <th>{Math.floor(+(s.vwap24Hr) * 100) / 100}</th>
                        <th>{Math.floor(+(s.supply) / 10000) / 100}m</th>
                        <th>{Math.floor(+(s.volumeUsd24Hr) / 1000000) / 100}m</th>
                        <th>{Math.floor(+(s.changePercent24Hr) * 100) / 100}%</th>
                    </tr>
                </table>
            )
        })}

        </>

    );
}

export default App;
