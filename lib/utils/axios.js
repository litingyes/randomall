const axios = require('axios').default

axios.interceptors.request.use(config => config, err => Promise.reject(err))
axios.interceptors.response.use(res => {
    if (res.status === 200) {
        return res.data
    }   else {
        return Promise.reject(res)
    }
}, err => Promise.reject(err))

module.exports = axios
