import { types } from 'mobx-state-tree'
import Invoice from './Invoice'
import ItemList from './ItemList'


const refNum = (): number => {
    let n: number  = parseFloat(Math.random().toFixed(8))
    return n * 100000000
}

const inv = Invoice.create({
    ref: refNum(),
    currency: "GBP",
})

const User = types.model('User', {
    firstName: types.string,
    lastName: types.string,
    email: types.string,
    _id: types.string,
    invoices: types.array(Invoice),
    cart: types.optional(ItemList, { items: [] })
})
.actions(self => ({
    createInvoice(): void {
        self.invoices.push(inv)
    }
}))

export default User