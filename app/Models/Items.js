import { generateId } from "../Utils/generateId.js"

export default class Item {
    constructor({ title, itemId = generateId(), taskId }) {
        this.title = title
        this.itemId = itemId
        this.taskId = taskId
    }

    get Template() {
        return /*html*/`
                <div class="row">
                                <button class="text-danger close" onclick="app.itemController.delete('${this.itemId}')">
                         <span>
                             <h4>&times;</h4>
                        </span>
                    </button>
                    <ul class="list-group list-group-flush">
                        <div class="form-check">
                        <input type="checkbox" class="form-check-input" id="itemCheck">
                        <li class="list-group-flush form-check-label" for="itemCheck">
                        ${this.title}
                        </li></div>
                    </ul>
                </div>
            
                
     `
    }
}