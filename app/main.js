import ValuesController from "./Controllers/ValuesController.js";
import TaskController from "./Controllers/TaskController.js"

class App {
  //valuesController = new ValuesController();
  taskController = new TaskController();
}

window["app"] = new App();
