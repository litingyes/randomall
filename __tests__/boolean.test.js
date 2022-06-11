const { boolean } = require('../lib')

test('default call', () => {
    expect(typeof boolean()).toBe('boolean')
})