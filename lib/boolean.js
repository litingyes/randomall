const _number = require('./number')

/**
 * 
 * @returns {boolean} random boolean
 */
const _boolean = () => {
    return _number(0, 1000) % 2 === 0 ? true : false
}

module.exports = _boolean