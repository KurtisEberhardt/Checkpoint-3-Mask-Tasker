import { ProxyState } from "../AppState.js"
import Task from "../Models/Task.js"
import { saveState } from "../Utils/LocalStorage.js"

class TaskService {
    constructor() {
        ProxyState.on('tasks', saveState)
    }
    createTask(newTask) {
        ProxyState.task = [new Task(newTask), ...ProxyState.task]
        saveState()
    }

    delete(taskId) {
        if (window.confirm("Are you sure you want to delete this?")) {
            ProxyState.task = ProxyState.task.filter(t => t.taskId != taskId)
            ProxyState.item = ProxyState.item.filter(i => i.taskId != taskId)

        }
        saveState()
    }
}
export const taskService = new TaskService();