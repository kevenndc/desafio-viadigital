import axios from 'axios'

const baseApi = axios.create({
    baseURL: 'http://localhost/api',
})

const api = () => {
    const token = localStorage.getItem('token')

    if (token) {
        baseApi.defaults.headers.common['Authorization'] = `Bearer ${token}`
    }

    return baseApi
}

export default api
