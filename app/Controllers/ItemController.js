import { itemService } from "../Services/ItemService.js";

export default class ItemController {
    createItem(event, taskId) {
        // console.log("trying to create event" + taskId)
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