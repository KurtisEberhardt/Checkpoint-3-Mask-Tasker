import {generateId} from "../Utils/generateId.js"
import {ProxyState} from "../AppState.js"

export default class Task{
    constructor({title, taskId = generateId()}){
        this.title = title
        this.taskId = taskId 
    }
    get Template(){
        return /*html*/`                    
        <div class="col-4 card mt-5 ml-5">
            <span><h1 class="card-header">
                ${this.title}<button class="text-danger close" onclick="app.taskController.delete('${this.id}')"><span><h1>&times;</h1></span></button>
            </h1></span>
        <ul class="list-group list-group-flush">
           <li class="list-group-flush">${this.Item}</li>
        </ul>

   </div>`
    }
    get Item(){
        let template = ''
        let items = ProxyState.item.filter(i => i.itemId == this.taskId)
        items.forEach(i => template += i.Template)
        return template
    }

}