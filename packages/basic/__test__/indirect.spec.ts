// import { doubleUserAge } from '../src/indirect'

// import { userAge } from '../src/userAge'

describe('vi doMock', () => {
  beforeEach(() => {
    vi.doMock('../src/userAge', () => {
      return {
        userAge: () => 3,
      }
    })
  })
  it('normal', async () => {
    const { doubleUserAge } = await import('../src/indirect')
    const r = doubleUserAge()
    expect(r).toBe(6)
  })
})

// vi.mock('../src/userAge')

// describe('测试间接输入数据', () => {
//   it('normal', () => {
//     vi.mocked(userAge).mockReturnValue(4)
//     const r = doubleUserAge()
//     expect(r).toBe(8)
//   })
// })

// describe('全局覆盖', () => {
//   it('normal', () => {
//     vi.mocked(userAge).mockReturnValue(3)
//     const r = userAge() // 3
//     expect(r).toBe(3)
//   })
// })

// describe('全局覆盖-2', () => {
//   it('normal', () => {
//     const r = userAge() // 3
//     expect(r).toBe(3)
//   })
// })
