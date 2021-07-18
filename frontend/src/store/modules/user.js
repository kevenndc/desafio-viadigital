import UserApi from '../../domains/user/services/UserApi'

export default {
    state: () => ({
        user: null
    }),

    getters: {
        user: state => state.user
    },

    mutations: {
        setUser(state, user) {
            state.user = user
        },
    },

    actions: {
        async fetchUserData({ commit }) {
            try {
                commit('setUser', await UserApi.fetchUser())
            } catch (error) {
                return error
            }
        },

        async logoutUser({ commit }) {
            try {
                await UserApi.logout()
                commit('serUser', null)
            } catch (error) {
                return error
            }
        }
    }
}