import TaskFactory from "../../task/factories/TaskFactory"
import TaskList from "../models/TaskList"

function createList(payload) {
    return new TaskList(
        payload.id,
        payload.name,
        TaskFactory.createFromResponse(payload.tasks),
    )
}

export default {
    createFromResponse(payload) {
        if (!Array.isArray(payload)) {
            return createList(payload)
        }

        const taskLists = []
        payload.forEach((list) => {
            taskLists.push(createList(list))
        })

        return taskLists
    },
}