const { randomInt } = require('node:crypto')

const DEFAULT = {
    min: 0,
    max: 100,
    radix: 10,
    isInteger: true,
    decimal: 6
}

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
_number = (...args) => {
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

    if (!Number.isInteger(config.min)) {
        return new Error(`min ${config.min} must be a integer`)
    }   else if (!Number.isSafeInteger(config.min)) {
        return new Error(`min ${config.min} must be a safe integer`)
    }

    if (!Number.isInteger(config.max)) {
        return new Error(`max ${config.max} must be a integer`)
    }   else if (!Number.isSafeInteger(config.max)) {
        return new Error(`max ${config.max} must be a safe integer`)
    }

    if (config.min >= config.max) {
        return new Error(`min ${config.min} must be less than max ${config.config.max}`)
    }

    if (!Number.isInteger(config.radix)) {
        return new Error(`radix ${config.radix} must be a integer`)
    }   else if (config.radix < 2 || config.radix > 36) {
        return new Error(`radix ${config.radix} must be greater than or equal to 2 and less than or equal to 32`)
    }

    if (config.isInteger) {
        if (config.radix === 10) {
            return randomInt(config.min, config.max)

        }   else {
            return randomInt(config.min, config.max).toString(config.radix)
        }
    }   else if (!Number.isInteger(config.decimal)) {
        return new Error(`decimal ${config.decimal} must be i integer`)
    }   else if (config.decimal <= 0) {
        return new Error(`decimal ${config.decimal} must be greater than 0`)
    }   else {
        const floatRandom10 = Number(_number(config.min, config.max) + '.' + _number({ max: 10 ** config.decimal }))
        let floatRandomRadixStr = floatRandom10.toString(config.radix)
        const indexDot = floatRandomRadixStr.indexOf('.')

        if (config.radix === 10) {
            return Number(floatRandomRadixStr)
        }   else {
            return floatRandomRadixStr
        }
    }
}

_number.DEFAULT = DEFAULT

module.exports = _number