export default class Task {
    constructor(id, userId, taskListId, name, order, description = null) {
        this.id = id
        this.userId = userId;
        this.taskListId = taskListId;
        this.name = name;
        this.order = order;
        this.description = description;
    }
}