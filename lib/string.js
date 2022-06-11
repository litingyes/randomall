const _number = require('./number')

const CHARACTAR = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'c', 'f', 
'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',
'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T',
'U', 'V', 'W', 'X', 'Y', 'Z']

const DEFAULT = {
    len: 6,
    banNum: false,
    banLowercase: false,
    banUppercase: false,
    add: [],
    remove: []
}

/**
 * 
 * @param {number} len - length of random string
 * @param {boolean} banNum - random string without numbers
 * @param {boolean} banLowercase - random string without lowercase letters
 * @param {boolean} banUppercase - random string without uppercase letters
 * @param {string[]} add - special characters that random string contains
 * @param {string[]} remove - special characters that random string must never contain
 * 
 * @return {string} random string
 */
const _string = (...args) => {
    const config = Object.assign({}, DEFAULT)

    if (args) {
        if (Object.prototype.toString.call(args[0]) === '[object Object]') {
            Object.assign(config, args[0])
        }   else {
            Object.keys(DEFAULT).forEach((key, i) => {
                if (args[i] !== undefined) {
                    config[key] = args[i]
                }
            })
        }
    }

    let randomCharactar = []
    let randomstr = ''
    
    if (!Number.isInteger(config.len)) {
        return new Error(`len ${config.len} must be a integer`)
    }   else if (config.len < 0) {
        return new Error(`len ${config.len} must be greater than or equal to 0`)
    }

    if (!Array.isArray(config.add)) {
        return new Error(`add ${config.add} must be a array`)
    }

    if (!Array.isArray(config.remove)) {
        return new Error(`add ${config.remove} must be a array`)
    }

    if (!config.banNum) {
        randomCharactar = randomCharactar.concat(CHARACTAR.slice(0, 10))
    }

    if (!config.banLowercase) {
        randomCharactar = randomCharactar.concat(CHARACTAR.slice(10, 36))
    }

    if (!config.banUppercase) {
        randomCharactar = randomCharactar.concat(CHARACTAR.slice(36))
    }

    randomCharactar = randomCharactar.concat(config.add)
    randomCharactar = randomCharactar.filter(c => !config.remove.includes(c))

    while(config.len--) {
        randomstr += randomCharactar[_number(0, randomCharactar.length)]
    }

    return randomstr
}

_string.CHARACTAR = CHARACTAR
_string.DEFAULT = DEFAULT

module.exports = _string