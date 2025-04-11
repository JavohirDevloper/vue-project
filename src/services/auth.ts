import axios from './axios'

const AuthServises = {
    register(user: any) {
        return axios.post('/users', {user})
    },
    login(user: any) {
        return axios.post('/users/login', {user})
    }
}

export default AuthServises