import { generateId } from "../Utils/generateId.js"
import { ProxyState } from "../AppState.js"

export default class Task {
    constructor({ title, taskId = generateId(), color }) {
        this.title = title
        this.taskId = taskId
        this.color = color
    }
    get Template() {
        return /*html*/`                    
        <div class="col-4 card mt-5 ml-5" style="background-color:${this.color};">
            <span>
                <h1 class="card-header">
                ${this.title}
                <button class="text-danger close" onclick="app.taskController.deleteTask('${this.taskId}')">
                         <span>
                             <h1>&times;</h1>
                        </span>
                    </button>
                </h1>
                     <form onsubmit="app.itemController.createItem(event, '${this.taskId}'); return false">
                        <div class="form-group">
                            <input maxlength = "50" minlength = "3" type="text" name="title" placeholder="Enter To-Do Item...">
                            <button type="submit">Add Item</button>
                            </div>
                            </form>
                            <div>
                                ${this.Item}
                            </div>
            </span>

   </div>`
    }
    get Item() {

        let template = ''
        let items = ProxyState.item.filter(i => i.taskId == this.taskId)
        items.forEach(i => template += i.Template)
        // console.log("got item " + template)
        return template
    }

}