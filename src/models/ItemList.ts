import { types } from 'mobx-state-tree'
import Item from './Item'

const ItemList = types.model('ItemList', {
    items: types.array(Item)
})
.actions(self => ({
    addItem(item: {name: string, price: string | number , quantity: string | number }): void {
        self.items.push({
            ...item,
            price: typeof item.price === 'string' ? parseFloat(item.price) : item.price,
            quantity: typeof item.quantity === 'string' ? parseInt(item.quantity) : item.quantity
        })
    },
    removeItem(item): void {
        self.items.splice(self.items.indexOf(item), 1)
    }
}))
.views(self => ({
    get total(): number {
        return self.items.reduce((sum: number, item) => { return sum + item.total }, 0)
    }
}))

export default ItemList