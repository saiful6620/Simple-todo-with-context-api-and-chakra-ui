import React, { createContext, useReducer } from 'react'
import store from './store'
import { reducer } from './reducer'

export const AppContext = createContext();

function AppContextProvider({children}) {
    const [state, dispatch] =  useReducer(reducer, store);
    return (
        <AppContext.Provider value={[state, dispatch]}>
            {children}
        </AppContext.Provider>
    )
}

export default AppContextProvider