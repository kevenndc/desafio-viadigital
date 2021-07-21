import api from '../../../apis/base'
import TaskListFactory from '../factories/TaskListFactory'

export default {
    async fetchTaskLists() {
        try {
            const response = await api().get('/task-lists')
            return TaskListFactory.createFromResponse(response.data)
        } catch (error) {
            throw new Error(error.response.data.message)
        }
    },

    async create(list) {
        try {
            const response = await api().post('/task-lists', list)
            return TaskListFactory.createFromResponse(response.data)
        } catch (error) {
            console.log(error)
            throw new Error(error.response.data.message)
        }
    },

    async get(id) {
        try {
            const response = await api().get(`/task-lists/${id}`)
            return TaskListFactory.createFromResponse(response.data)
        } catch (error) {
            throw new Error(error.response.data.message)
        }
    },

    async update(taskList) {
        try {
            const response = await api().put(`/task-lists/${taskList.id}`, taskList)
            return TaskListFactory.createFromResponse(response.data)
        } catch (error) {
            throw new Error(error.response.data.message)
        }
    },

    async delete(id) {
        try {
            const response = await api().delete(`/task-lists/${id}`)
            return response.data
        } catch (error) {
            throw new Error(error.response.data.message)
        }
    },
}
