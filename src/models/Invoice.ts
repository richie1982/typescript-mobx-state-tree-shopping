import { types } from 'mobx-state-tree'
import ItemList from './ItemList'

const Invoice = types.model('Invoice', {
    ref: types.identifierNumber,
    currency: types.string,
    itemList: types.optional(ItemList, { items: [] })
})


export default Invoice