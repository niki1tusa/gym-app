import axios from 'axios'
import Cookies from 'js-cookie'
export const $axios = axios.create({
    baseURL: '/api',
    headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${Cookies.get('tokenForWorkout')}`
    },

})