import {applyMiddleware, combineReducers, createStore} from "redux"
import thunk from "redux-thunk";
import {cryptocurrency} from "./reducers/cryptocurrency";

export let rootReducer = combineReducers({
    cryptocurrency
})

export const store = createStore(rootReducer, applyMiddleware(thunk))

export type AppRootStateType = ReturnType<typeof rootReducer>

export type AppActionsType = null