import {defineStore} from 'pinia'

export const useAuthStore = defineStore('auth', {
    state: () => ({
        user: null as null | { name: string; email: string },
        token: '',
    }),

    actions: {
        login(userData: { name: string; email: string }, token: string) {
            this.user = userData
            this.token = token
        },
        logout() {
            this.user = null
            this.token = ''
        }
    },

    getters: {
        isAuthenticated: (state) => !!state.token,
    }
})