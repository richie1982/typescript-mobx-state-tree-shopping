import React, { useContext, useState, Fragment } from 'react'
import { useObserver } from 'mobx-react'
import { CTX } from './Store'

const App = (): JSX.Element => {

    const store = useContext(CTX)

    const [ name, setName ] = useState<string>("")
    const [ price, setPrice ] = useState<string>("0.00")
    const [ quantity, setQuantity] = useState<string>("1")

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
        e.preventDefault()
        const item = {
            name,
            price: parseFloat(parseFloat(price).toFixed(2)),
            quantity: parseInt(quantity)
        }
        store.cart.addItem(item)
        setName("")
        setPrice("0.00")
        setQuantity("1")
    }

    return useObserver(() => (
        <div>
            Typescript App WOWWW!!
            <br/>
            <br/>
            <br/>
            <br/>
            <Fragment>
                <form
                    onSubmit={handleSubmit}
                >
                    <label>
                        Name
                        <input
                            type='text'
                            placeholder='Enter item...'
                            value={name}
                            onChange={e => setName(e.target.value)}
                        />
                    </label>
                    <label>
                        Price
                        <input
                            value={price}
                            onChange={e => setPrice(e.target.value)}
                        />
                    </label>
                    <label>
                        <input
                            type="number"
                            value={quantity}
                            onChange={e => setQuantity(e.target.value)}
                        />
                    </label>
                    <button>
                        Submit
                    </button>
                </form>
                <ul>
                    {store.cart.items.map((item, ind: number): JSX.Element => <li 
                        key={ind}
                        > 
                            {item.name}  x{item.quantity}  Total: £{item.total}
                            <button
                                onClick={item.increaseQuantity}
                            >+</button>
                            <button
                                onClick={item.decreaseQuantity}
                            >-</button>
                    </li>)}
                </ul>
                <h5>
                    Cart Total: £{store.cart.total}
                </h5>

            </Fragment>
        </div>

    )
    )
}

export default App