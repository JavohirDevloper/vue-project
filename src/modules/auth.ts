import AuthServises from '../services/auth.ts'
import {setItems} from "../helpers/persistaneStorage.ts";

const state = {
    isLoading: false,
    user: null,
    errors: null,
}

const mutations = {
    registerStart(state: any) {
        state.isLoading = true
        state.user = null
        state.errors = null
    },
    registerSuccess(state: any, payload: any) {
        state.isLoading = false
        state.user = payload
    },
    registerFailure(state: any, payload: any) {
        state.isLoading = false
        state.errors = payload.errors
    },
    loginStart(state: any) {
        state.isLoading = true
        state.user = null
        state.errors = null
    },
    loginSuccess(state: any, payload: any) {
        state.isLoading = false
        state.user = payload
    },
    loginFailure(state: any, payload: any) {
        state.isLoading = false
        state.errors = payload.errors
    },
}

const actions = {
    register(context: any, user: any) {
        return new Promise((resolve, reject) => {
            context.commit('registerStart')
            AuthServises.register(user)
                .then(response => {
                    context.commit('registerSuccess', response.data.user)
                    setItems('token', response.data.user.token)
                    resolve(response.data.user)
                })
                .catch(error => {
                    context.commit('registerFailure', error.response.data)
                    reject(error.response.data)
                })
        })
    },
    login(context: any, user: any) {
        return new Promise((resolve, reject) => {
            context.commit('loginStart')
            AuthServises.login(user)
                .then(response => {
                    context.commit('loginSuccess', response.data.user)
                    setItems('token', response.data.user.token)
                    resolve(response.data.user)
                })
                .catch(error => {
                    context.commit('loginFailure', error.response.data)
                    reject(error.response.data)
                })
        })
    },
}

export default {
    state,
    mutations,
    actions,
}