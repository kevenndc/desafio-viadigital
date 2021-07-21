export default class Task {
    constructor(id, userId, taskListId, name, order, description = null) {
        this.id = id
        this.userId = userId
        this.taskListId = taskListId
        this.name = name
        this.order = order
        this.description = description
    }

    normalize() {
        return {
            id: this.id,
            user_id: this.userId,
            task_list_id: this.taskListId,
            name: this.name,
            order: this.order,
            description: this.description,
        }
    }
}
