import { Counter } from '../src/state'

describe('状态验证', () => {
  it('count', () => {
    const count = new Counter()
    count.increment()
    expect(count.getCount()).toBe(1)
  })
})
