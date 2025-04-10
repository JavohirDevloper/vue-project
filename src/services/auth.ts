import axios from "./axios.ts"


const AuthService = {
    register: (user: any) => {
        return axios.post('/users', {user})
    }
}

export default AuthService;