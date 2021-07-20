import api from '../../../apis/base'
import User from '../models/User'

export default {
    async register(form) {
        try {
            const response = await api().post('/register', form)
            localStorage.setItem('token', response.data.token)
            return response.data
        } catch (error) {
            throw new Error(error.response.data.message)
        }
    },

    async login(form) {
        try {
            const response = await api().post('/login', form)
            localStorage.setItem('token', response.data.token)
            return response.data
        } catch (error) {
            throw new Error(error.response.data.message) 
        } 
    },

    async logout() {
        try {
            const response = await api().post('/logout')
            localStorage.removeItem('token')
            return response
        } catch (error) {
            throw new Error(error.response.data.message)
        } 
    },

    async fetchUser() {
        try {
            const response = await api().get('/user')
            const user = User.fromResponse(response.data)
            return user
        } catch (error) {
            throw new Error(error.response.data.message)
        } 
    }
}