import { ProxyState } from "../AppState.js"
import Item from "../Models/Items.js"
import Task from "../Models/Task.js"

export function saveState() {
    localStorage.setItem('masktasker', JSON.stringify({
        tasks: ProxyState.task,
        item: ProxyState.item
    }))
}

export function loadState() {
    let data = JSON.parse(localStorage.getItem('masktasker'))
    if (data) {
        ProxyState.task = data.tasks.map(oldTask => new Task(oldTask))
        ProxyState.item = data.item.map(oldItem => new Item(oldItem))
    }
}