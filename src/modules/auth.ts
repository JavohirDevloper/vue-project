import AuthService from "../services/auth.ts";


const state = {
    isLoading: false
}
const mutations = {
    setLoading(state: any) {
        state.isLoading = true
    },
    registerSuccess(state: any) {
        state.isLoading = false
    },
    registerFailure(state: any) {
        state.isLoading = false
    }
}
const actions = {
    register(context: any, user: any) {
        return new Promise(() => {
            context.commit('setLoading')
            AuthService.register(user).then((response) => {
                console.log(response.data.user)
                context.commit('registerSuccess')
            }).catch(error => {
                console.log(error.response.data)
                context.commit('registerFailure')
            })
        })

    }
}
export default {
    state,
    mutations,
    actions
}