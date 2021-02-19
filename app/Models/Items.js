import {generateId} from "../Utils/generateId.js"

export default class Item{
    constructor({title, itemId = generateId(), taskId}){
        this.title = title 
        this.itemId = itemId
        this.taskId = taskId
    }

    get Template(){
        return /*html*/`
        <div>        
            <ul class="list-group list-group-flush">
                <li class="list-group-flush">${this.title}</li>
            </ul>
        </div>
     `
    }
}