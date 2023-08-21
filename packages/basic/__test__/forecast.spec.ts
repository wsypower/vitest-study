import { checkFriday, generateRandomString } from '../src/forecast'

describe('可预测性的输出', () => {
  it('generateRandomString', () => {
    vi.spyOn(Math, 'random').mockImplementation(() => {
      return 0.1
    })
    const str = generateRandomString(5)
    expect(str).toBe('ccccc')
  })
})

describe('测试日期', () => {
  it('data', () => {
    vi.useFakeTimers()
    vi.setSystemTime(new Date(2023, 3, 21))
    const result = checkFriday()
    expect(result).toBe('happy')
    vi.useRealTimers()
  })
  it('description', () => {
    const result = checkFriday()
  })
})
