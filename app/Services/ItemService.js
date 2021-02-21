import { ProxyState } from "../AppState.js"
import Item from "../Models/Items.js"
import { saveState } from "../Utils/LocalStorage.js"

class ItemService {
    constructor() {
        ProxyState.on('toppings', saveState)
    }
    createItem(newItem) {
        event.preventDefault()
        ProxyState.item = [new Item(newItem), ...ProxyState.item]
        console.log(ProxyState.item)
        saveState()

    }
    delete(itemId) {
        // console.log('deleting ' + itemId)

        if (window.confirm("Are you sure you want to delete that?")) {
            ProxyState.item = ProxyState.item.filter(i => i.itemId != itemId)
        }
        saveState()
    }
}
export const itemService = new ItemService();