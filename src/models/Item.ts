import { types } from 'mobx-state-tree'

const Item = types.model('Item', {
    name: types.string,
    price: types.number,
    quantity: types.number
})
.actions(self => ({
    increaseQuantity(): void {
        self.quantity = self.quantity += 1
    },
    decreaseQuantity(): void {
        self.quantity = self.quantity -= 1
    }
}))
.views(self => ({
    get total(): number {
        return self.price * self.quantity
    }
}))

export default Item