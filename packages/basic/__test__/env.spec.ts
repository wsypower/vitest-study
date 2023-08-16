import { doubleUserAge } from '../src/env'

describe('process', () => {
  it('直接赋值', async () => {

    // process.env.USER_AGE = '2'
    // const r = doubleUserAge()
    // expect(r).toBe(4)
  })
})

describe('vi', () => {
  it('subEnv', async () => {
    vi.stubEnv('USER_AGE', '3')
    const r = doubleUserAge()
    expect(r).toBe(6)
    console.log(process.env.USER_AGE) // 3
    vi.unstubAllEnvs()
    console.log(process.env.USER_AGE) // undefined
  })
})
