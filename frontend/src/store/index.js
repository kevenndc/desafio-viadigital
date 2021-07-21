import { createStore } from 'vuex'
import UserStore from './modules/user'
import TaskListApi from '../domains/task-list/services/TaskListApi'
import TaskApi from '../domains/task/services/TaskApi'

export default createStore({
    modules: {
        user: UserStore,
    },

    state: {
        taskLists: [],
    },

    getters: {
        taskLists: (state) => state.taskLists,
        getTaskListById: (state) => (id) => {
            return state.taskLists.find((taskList) => taskList.id === id).tasks
        },
    },

    mutations: {
        setTaskLists(state, taskLists) {
            state.taskLists = taskLists
        },

        addTaskList(state, taskList) {
            state.taskLists.push(taskList)
        },

        updateTaskList(state, updatedTaskList) {
            const index = state.taskLists.findIndex(
                (taskList) => taskList.id == updatedTaskList.id,
            )

            state.taskLists[index] = updatedTaskList
        },

        deleteTaskList(state, id) {
            state.taskLists = state.taskLists.filter(
                (taskList) => taskList.id != id,
            )
        },

        addTask(state, task) {
            state.taskLists.map((list) => {
                if (list.id == task.taskListId) {
                    return list.tasks.push(task)
                }
            })
        },

        updateTasks(state, payload) {
            const index = state.taskLists.findIndex(
                (taskList) => taskList.id == payload.id,
            )

            state.taskLists[index].tasks = payload.tasks
        },
    },

    actions: {
        async fetchTaskLists({ commit }) {
            try {
                const taskLists = await TaskListApi.fetchTaskLists()
                commit('setTaskLists', taskLists)
            } catch (error) {
                console.log(error)
            }
        },

        async createTaskList({ commit }, form) {
            try {
                const taskList = await TaskListApi.create(form)
                commit('addTaskList', taskList)
            } catch (error) {
                console.log(error)
            }
        },

        async updateTaskList({ commit }, taskList) {
            try {
                const updatedTaskList = await TaskListApi.update(taskList)
                commit('updateTaskList', updatedTaskList)
            } catch (error) {
                console.log(error)
            }
        },

        async deleteTaskList({ commit }, id) {
            try {
                await TaskListApi.delete(id)
                commit('deleteTaskList', id)
            } catch (error) {
                console.log(error)
            }
        },

        async createTask({ commit }, payload) {
            try {
                const task = await TaskApi.create(payload)
                commit('addTask', task)
            } catch (error) {
                console.log(error)
            }
        },

        async updateTasks({ commit }, payload) {
            commit('updateTasks', payload)
            try {
                payload.tasks.forEach(
                    async (task) => await TaskApi.update(task),
                )
            } catch (error) {
                console.log(error)
            }
        },
    },
})
