import { createStore } from 'vuex'
import UserStore from './modules/user'
import TaskListApi from '../domains/task-list/services/TaskListApi'

export default createStore({
    modules: {
        user: UserStore,
    },

    state: {
        taskLists: [],
    },

    getters: {
        taskLists: (state) => state.taskLists,
    },

    mutations: {
        setTaskLists(state, taskLists) {
            state.taskLists = taskLists
        },

        addTaskList(state, taskList) {
            state.taskLists.push(taskList)
        },

        deleteTaskList(state, id) {
            state.taskLists = state.taskLists.filter(
                (taskList) => taskList.id != id,
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

        async deleteTaskList({ commit }, id) {
            try {
                await TaskListApi.delete(id)
                commit('deleteTaskList', id)
            } catch (error) {
                console.log(error)
            }
        },
    },
})
