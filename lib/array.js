const number = require('./number.js')

/**
 * 
 * @param {number} len length of random array
 * @param {function} fn the function to generate random value
 * @param  {...any} args function arguments of fn
 * 
 * @returns a array with random value
 */
const _array = (len = 10, fn = number, ...args) => {
    if (!Number.isInteger(len)) {
        return new Error(`len ${len} must be integer`)
    }   else if (len <= 0) {
        return new Error(`len ${len} must be greater than or equal to 0`)
    }

    if (typeof fn !== 'function') {
        return new Error(`fn must be a function`)
    }

    return new Array(len).fill(0).map(v => fn(...args))
}

module.exports = _array