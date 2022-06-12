const axios = require('./utils/axios')

const DEFAULT_CONFIG = {
    method: 'get',
    baseURL: 'https://api.ixiaowai.cn',
    url: '/gqapi/gqapi.php',
    params: {
        return: 'json'
    }
}

const DEFAULT_LOCATION = ['imgurl']

/**
 * 
 * @param {object} userConfig same as axios request configuration
 * @param {array} userLocation nested position of target data
 * @returns any
 * 
 * @description
 * unfortunately this is an async function witch no sync solution found yet
 */
const _image = async (userConfig, userLocation) => {
    const config = Object.assign({}, DEFAULT_CONFIG, userConfig)
    const location = userLocation ?? DEFAULT_LOCATION
    const data = await axios(config)
    let target = null

    target = location.reduce((db, key, i) => {
        if (Array.isArray(db)) {
            if (db.length > key) {
                return db[key]
            }   else {
                return new Error(`location[${i}] ${key} is an unexpected value`)
            }
        }   else if (Object.prototype.toString.call(db) === '[object Object]') {
            if (db.hasOwnProperty(key)) {
                return db[key]
            }   else {
                return new Error(`location[${i}] ${key} is an unexpected value`)
            }
        }

        return new Error(`db ${db} or location[${i}] ${key} is not as expected`)
    }, data)

    return target
}

_image.DEFAULT_CONFIG = DEFAULT_CONFIG
_image.DEFAULT_LOCATION = DEFAULT_LOCATION

module.exports = _image

