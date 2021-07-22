import Task from '../models/Task'

function createTaskFromResponse(payload) {
    return new Task(
        payload.id,
        payload.user_id,
        payload.task_list_id,
        payload.name,
        payload.order,
        payload.description,
    )
}

export default {
    createFromResponse(payload) {
        if (!payload) {
            return []
        }
        
        if (!Array.isArray(payload)) {
            return createTaskFromResponse(payload)
        }

        const tasks = []
        payload.forEach((task) => {
            tasks.push(createTaskFromResponse(task))
        })

        return tasks
    },

    normalizeTasks(tasks) {
        return tasks.map(task => {
            return task.normalize()
        })
    }
}
