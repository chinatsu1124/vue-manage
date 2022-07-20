import axios from './axios.js'

export const getMenu = (param) => {
    return axios.request({
        url: '/permisson/getMenu',
        method: 'post',
        data: param
    })
}

export const getData = () => {
    return axios.request({
        url: '/home/getData',
        method: 'get'
    })
}

export const getUser = (params) => {
    return axios.request({
        url: '/user/getUser',
        method: 'get',
        params
    })
}

// export const getMenu = (param) => {
//     return axios.request({
//         url: '/permisson/getMenu',
//         method: 'post',
//         data: param
//     })
// }