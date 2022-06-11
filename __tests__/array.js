const { array, boolean, number } = require('../lib')

test('default call', () => {
    expect(Array.isArray(array())).toBe(true)
    expect(array().length).toBe(10)
    expect(array().every(v => Number.isInteger(v) && v >= 0 && v < 100)).toBe(true)
})

test('param len', () => {
    expect(array(100).length).toBe(100)
})

test('param fn', () => {
    expect(array(100, boolean).every(v => typeof v === 'boolean')).toBe(true)
})

test('param fn args', () => {
    expect(array(100, number, 3, 5).every(v => v >= 3 && v < 5)).toBe(true)
})