import { createStore } from 'vuex'
import UserStore from './modules/user'

export default createStore({
    modules: {
        user: UserStore,
    }
})