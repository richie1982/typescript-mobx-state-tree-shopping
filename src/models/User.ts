import { types, Instance } from 'mobx-state-tree'
import Invoice from './Invoice'
import ItemList from './ItemList'

const refNum = (): number => {
    let n: number = parseFloat(Math.random().toFixed(8))
    return n * 100000000
}

export const User = types.model('User', {
    firstName: types.string,
    lastName: types.string,
    email: types.string,
    _id: types.identifier,
    invoices: types.array(Invoice),
    cart: types.optional(ItemList, { items: [] })
})
.actions(self => ({
    createInvoice(): void {
        const inv = Invoice.create({
            ref: refNum(),
            currency: "GBP",
        })
        self.invoices.push(inv)
    }
}))

export type Context = Instance<typeof User>