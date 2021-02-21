import { itemService } from "../Services/ItemService.js";
import { ProxyState } from "../AppState.js";

export default class ItemController {
    createItem(event, taskId) {
        event.preventDefault()
        let form = event.target
        let newItem = {
            title: form.title.value,
            taskId: taskId
        }
        itemService.createItem(newItem)
    }
    delete(itemId) {
        itemService.delete(itemId)
    }
}