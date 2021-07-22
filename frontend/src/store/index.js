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
        editingTask: null,
    },

    getters: {
        taskLists: (state) => state.taskLists,

        getTaskListById: (state) => (id) => {
            return state.taskLists.find((taskList) => taskList.id === id).tasks
        },

        editingTask: (state) => state.editingTask,
    },

    mutations: {
        setTaskLists(state, taskLists) {
            state.taskLists = taskLists
        },

        setEditingTask(state, task) {
            state.editingTask = task
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

        updateTask(state, task) {
            const index = state.taskLists.findIndex(
                (taskList) => taskList.id == task.taskListId,
            )

            state.taskLists[index].tasks.map((_task) => {
                if (_task.taskListId == task.id) {
                    return task
                }
            })
        },

        updateTasks(state, payload) {
            const index = state.taskLists.findIndex(
                (taskList) => taskList.id == payload.id,
            )

            state.taskLists[index].tasks = payload.tasks
        },

        removeTask(state, task) {
            const index = state.taskLists.findIndex(
                (taskList) => taskList.id == task.taskListId,
            )

            state.taskLists[index].tasks = state.taskLists[index].tasks.filter(
                (_task) => _task.id != task.id,
            )
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

        async updateTask({ commit }, task) {
            try {
                const task = await TaskApi.update(task)
                commit('updateTask', task)
            } catch (error) {
                console.log(error)
            }
        },

        async updateTasks({ commit }, payload) {
            commit('updateTasks', payload)
            try {
                await TaskListApi.updateTasks(payload.id, payload.tasks)
            } catch (error) {
                console.log(error)
            }
        },

        async deleteTask({ commit }, task) {
            try {
                await TaskApi.delete(task.id)
                commit('removeTask', task)
            } catch (error) {
                console.log(error)
            }
        },

        async updateTask({ commit }, task) {
            try {
                await TaskApi.update(task)
                commit('updateTask', task)
            } catch (error) {
                console.log(error)
            }
        }
    },
})
