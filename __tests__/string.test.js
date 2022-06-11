const { string } = require('../lib')

test('default call', () => {
    expect(typeof string()).toBe('string')
    expect(string().length).toBe(6)
    expect(string().split('').every(c => string.CHARACTAR.includes(c))).toBe(true)
})

test('param len', () => {
    expect(string(10).length).toBe(10)
})

test('param banNum', () => {
    expect(string(100, true).split('').every(c => string.CHARACTAR.includes(c) && Number.isNaN(Number(c)))).toBe(true)
})

test('param banLowercase', () => {
    expect(string(100, false, true).split('').every(c => string.CHARACTAR.includes(c) && (c.charCodeAt(0) < 97))).toBe(true)
})

test('param banUppercase', () => {
    expect(string(100, false, false, true).split('').every(c => string.CHARACTAR.includes(c) && (c.charCodeAt(0) < 65 || c.charCodeAt(0) > 90))).toBe(true)
})

test('param add', () => {
    expect(string(10, true, true, true, ['#', '?']).split('').every(c => ['#', '?'].includes(c))).toBe(true)
})

test('param remove', () => {
    console.log(string(10, false, false, false, ['#', '?'], string.CHARACTAR))
    expect(string(10, false, false, false, ['#', '?'], string.CHARACTAR).split('').every(c => ['#', '?'].includes(c))).toBe(true)
})