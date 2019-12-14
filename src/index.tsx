import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { Store } from './Store'


const Root = (
    <Store>
        <App/>
    </Store>
)

ReactDOM.render(Root, document.getElementById('root'))