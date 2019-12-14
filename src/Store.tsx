import React, { createContext } from 'react'
import makeInspectable from 'mobx-devtools-mst'
import { User, Context } from './models/User'

const store = User.create({
    firstName: "",
    lastName: "",
    email: "",
    _id: ""
})

const CTX = createContext<Context>(store)

const Store = ({children}): JSX.Element => {
    return(
        <CTX.Provider value={store}>
            {children}
        </CTX.Provider>
    )
}

makeInspectable(store)

export { Store, CTX }

