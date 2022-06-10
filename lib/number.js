const { randomInt } = require('node:crypto')
const _ = require('lodash')

/**
 * 
 * @param {number} min mininum random number isn't less than it
 * @param {number} max maxinum random number doesn't exceed it
 * @param {number} radix base of return value (2-36)
 * @param {boolean} isInteger whether the return value is integer
 * @param {number} decimal max number of decimal places returned
 * 
 * @return {number} random number
 * 
 * @description
 * with one exception return string when decimal not equal to 10
 */
const _number = (min = 0, max = 100, radix = 10, isInteger = true, decimal = 6) => {
    if (!Number.isInteger(min)) {
        return new Error(`min ${min} must be a integer`)
    }   else if (!Number.isSafeInteger(min)) {
        return new Error(`min ${min} must be a safe integer`)
    }

    if (!Number.isInteger(max)) {
        return new Error(`max ${max} must be a integer`)
    }   else if (!Number.isSafeInteger(max)) {
        return new Error(`max ${max} must be a safe integer`)
    }

    if (min >= max) {
        return new Error(`min ${min} must be less than max ${max}`)
    }

    if (!Number.isInteger(radix)) {
        return new Error(`radix ${radix} must be a integer`)
    }   else if (radix < 2 || radix > 36) {
        return new Error(`radix ${radix} must be greater than or equal to 2 and less than or equal to 32`)
    }

    if (isInteger) {
        if (radix === 10) {
            return randomInt(min, max)

        }   else {
            return randomInt(min, max).toString(radix)
        }
    }   else if (!Number.isInteger(decimal)) {
        return new Error(`decimal ${decimal} must be i integer`)
    }   else if (decimal <= 0) {
        return new Error(`decimal ${decimal} must be greater than 0`)
    }   else {
        const floatRandom10 = Number(_number(min, max) + '.' + _number())
        let floatRandomRadixStr = floatRandom10.toString(radix)
        const indexDot = floatRandomRadixStr.indexOf('.')
        floatRandomRadixStr = _.padEnd(floatRandomRadixStr, indexDot + decimal + 1, '0')
        
        if (radix === 10) {
            return Number(floatRandomRadixStr)
        }   else {
            return floatRandomRadixStr
        }
    }
}

module.exports = _number