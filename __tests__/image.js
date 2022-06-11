const { image } = require('../lib')
const reg = /^(?:(http|https|ftp):\/\/)?((|[\w-]+\.)+[a-z0-9]+)(?:(\/[^/?#]+)*)?(\?[^#]+)?(#.+)?$/i

test('default call', async () => {
    const url = await image()
    expect(reg.test(url)).toBe(true)
})

test('param userConfig', async () => {
    const url = await image({ baseURL:'https://api.ixiaowai.cn', url: '/mcapi/mcapi.php' })
    expect(reg.test(url)).toBe(true)
})

test('param userLocation', async () => {
    const code = await image({ baseURL:'https://api.ixiaowai.cn', url: '/mcapi/mcapi.php' }, ['code'])
    expect(typeof code).toBe('string')
})