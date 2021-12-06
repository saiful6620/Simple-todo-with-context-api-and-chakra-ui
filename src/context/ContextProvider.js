import React, { createContext, useReducer } from 'react'
import store from './store'
import { reducer } from './reducer'

export const AppContext = createContext();

function AppContextProvider(props) {
    const [state, dispatch] =  useReducer(reducer, store);
    return (
        <AppContext.Provider value={[state, dispatch]}>
            {props.children}
        </AppContext.Provider>
    )
}

export default AppContextProvider