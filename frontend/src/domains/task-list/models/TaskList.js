export default class TaskList {
    constructor(id, name, tasks = null) {
        this.id = id;
        this.name = name;
        this.tasks = tasks;
    }

}