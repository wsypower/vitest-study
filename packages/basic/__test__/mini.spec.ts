import { Product, User } from '../src/mini'

describe('最小准备数据原则', () => {
  it('normal ', () => {
    const user = new User('wyf', 11, '222', '测试地址')
    const product = new Product('测试商品', 100, 1)
    const result = user.buy(product)
    expect(result).toBe('User wyf bought 测试商品')
  })
})
