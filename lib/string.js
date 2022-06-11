const _number = require('./number')

const CHARACTAR = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'c', 'f', 
'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',
'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T',
'U', 'V', 'W', 'X', 'Y', 'Z']

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
const _string = (len = 6, banNum = false, banLowercase = false, banUppercase = false, add = [], remove = []) => {
    let randomCharactar = []
    let randomstr = ''
    
    if (!Number.isInteger(len)) {
        return new Error(`len ${len} must be a integer`)
    }   else if (len < 0) {
        return new Error(`len ${len} must be greater than or equal to 0`)
    }

    if (!Array.isArray(add)) {
        return new Error(`add ${add} must be a array`)
    }

    if (!Array.isArray(remove)) {
        return new Error(`add ${remove} must be a array`)
    }

    if (!banNum) {
        randomCharactar = randomCharactar.concat(CHARACTAR.slice(0, 10))
    }

    if (!banLowercase) {
        randomCharactar = randomCharactar.concat(CHARACTAR.slice(10, 36))
    }

    if (!banUppercase) {
        randomCharactar = randomCharactar.concat(CHARACTAR.slice(36))
    }

    randomCharactar = randomCharactar.concat(add)
    randomCharactar = randomCharactar.filter(c => !remove.includes(c))

    while(len--) {
        randomstr += randomCharactar[_number(0, randomCharactar.length)]
    }

    return randomstr
}

_string.CHARACTAR = CHARACTAR

module.exports = _string