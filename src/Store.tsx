import React, { createContext } from 'react'
import makeInspectable from 'mobx-devtools-mst'
import User from './models/User'

const store = User.create({
    firstName: "",
    lastName: "",
    email: "",
    _id: ""
})

export const CTX = createContext(store)

export const Store = ({children}): JSX.Element => {
    return(
        <CTX.Provider value={store}>
            {children}
        </CTX.Provider>
    )
}

makeInspectable(store)

