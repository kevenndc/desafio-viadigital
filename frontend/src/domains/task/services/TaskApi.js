import api from '../../../apis/base'
import TaskFactory from '../factories/TaskFactory'

export default {
    async create(task) {
        try {
            const response = await api().post('/tasks', task)
            return TaskFactory.createFromResponse(response.data)
        } catch (error) {
            throw new Error(error.response.data.message)
        }
    },

    async get(id) {
        try {
            const response = await api().get(`/tasks/${id}`)
            console.log(response)
            return TaskFactory.createFromResponse(response.data)
        } catch (error) {
            console.log(error)
            throw new Error(error.response.data.message)
        }
    },

    async update(task) {
        try {
            const response = await api().put(`/tasks/${task.id}`, task.normalize())
            return TaskFactory.createFromResponse(response.data)
        } catch (error) {
            console.log(error)
            throw new Error(error.response.data.message)
        }
    },

    async delete(id) {
        try {
            const response = await api().delete(`/tasks/${id}`)
            return response.data
        } catch (error) {
            throw new Error(error.response.data.message)
        }
    },
}
