import api from '../../../apis/base';
import User from '../models/User';

export default {
    async register(form) {
        try {
            const response = await api().post('/register', form)
            return response
        } catch (error) {
            return error.response
        }
    },

    async login(form) {
        try {
            const response = await api().post('/login', form)
            return response
        } catch (error) {
            return error.response
        } 
    },

    async logout() {
        try {
            const response = await api().post('/logout')
            return response
        } catch (error) {
            return error.response
        } 
    },

    async fetchUser() {
        try {
            const response = await api().get('/user')
            const user = User.fromResponse(response.data)
            return user
        } catch (error) {
            return error.response
        } 
    }
}