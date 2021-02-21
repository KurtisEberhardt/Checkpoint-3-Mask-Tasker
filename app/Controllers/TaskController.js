import { taskService } from "../Services/TaskService.js"
import { ProxyState } from "../AppState.js"

function _draw() {
    let taskElem = document.getElementById("task")
    let template = ""
    ProxyState.task.forEach(t => template += task.template)
    taskElem.innerHTML = template
}

export default class TaskController {
    constructor() {
        ProxyState.on('task', _draw)
        ProxyState.on('item', _draw)
    }
    createTask(event) {
        let form = event.target
        let newTask = {
            title: form.title.value
        }
        taskService.createTask(newTask)
    }
    deleteTask(taskId) {
        taskService.delete(taskId)
    }
}