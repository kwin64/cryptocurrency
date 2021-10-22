import {applyMiddleware, combineReducers, createStore} from "redux"
import thunk from "redux-thunk";

export let rootReducer = combineReducers({})

export const store = createStore(rootReducer, applyMiddleware(thunk))

export type AppRootStateType = ReturnType<typeof store.getState>

export type AppActionsType = null