const { number } = require('../lib')

test('default call', () => {
    expect(typeof number()).toBe('number')
    expect(number()).toBeGreaterThanOrEqual(1)
    expect(number()).toBeLessThan(100)
})

test('param min & max', () => {
    expect(typeof number(3, 5)).toBe('number')
    expect(number(3, 5)).toBeGreaterThanOrEqual(3)
    expect(number(3, 5)).toBeLessThan(5)
})

test('param radix', () => {
    const numRadix = number(30, 100, 8)
    expect(typeof numRadix).toBe('string')
    expect(parseInt(numRadix, 8)).toBeGreaterThanOrEqual(30)
    expect(parseInt(numRadix, 8)).toBeLessThan(100)
})

test('param isInteger', () => {
    const numFloat = number({ isInteger: false })
    expect(Number.isNaN(numFloat)).toBe(false)
    expect(Number.isInteger(numFloat)).toBe(false)
})

test('param decimal', () => {
    const numFloat = number({ isInteger: false, decimal: 4 })
    const numLen = numFloat.toString().length
    const indexDot = numFloat.toString().indexOf('.')

    expect(indexDot).toBeGreaterThan(0)
    expect(indexDot).toBeLessThan(4)
})