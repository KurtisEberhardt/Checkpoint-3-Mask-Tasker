import TaskController from "./Controllers/TaskController.js"
import ItemController from "./Controllers/ItemController.js"
import { loadState } from "./Utils/LocalStorage.js"

class App {
  taskController = new TaskController();
  itemController = new ItemController();
}

window["app"] = new App();
loadState()
