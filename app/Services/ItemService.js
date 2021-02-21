import { ProxyState } from "../AppState.js"
import Item from "../Models/Items.js"
import { saveState } from "../Utils/LocalStorage.js"

class ItemService {
    constructor() {
        ProxyState.on('toppings', saveState)
    }
    createItem(newItem) {
        ProxyState.item = [new Item(newItem), ...ProxyState.item]
        console.log(ProxyState.item)

    }
    delete(itemId) {
        ProxyState.item = ProxyState.item.filter(i => i.itemId != itemId)
    }
}
export const itemService = new ItemService();