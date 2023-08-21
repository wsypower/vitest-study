import flushPromises from 'flush-promises'
import { User, View, fetchUserData } from '../src/quick'

describe('测试timer的快速反馈', () => {
  it('setTimeout', () => {
    vi.useFakeTimers()
    const user = new User('1')
    const callback = vi.fn()
    user.fetchData(callback, 100)
    vi.advanceTimersByTime(100)
    expect(callback).toBeCalledWith('Data for user with id :1')
  })
})

describe('Promise', () => {
  it('p', async () => {
    const p = fetchUserData()
    await expect(p).resolves.toBe(1)
  })
})

describe('doublePromise', () => {
  it('promise', async () => {
    const view = new View()
    view.render()
    await flushPromises()
    expect(view.count).toBe(3)
  })
})
