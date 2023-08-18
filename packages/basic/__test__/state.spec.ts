import { Counter, Database, UserService } from '../src/state'

describe('状态验证', () => {
  it('count', () => {
    const count = new Counter()
    count.increment()
    expect(count.getCount()).toBe(1)
  })
})

describe('状态存在于database', () => {
  it('should create user', async () => {
    const database = new Database()
    const user = new UserService(database)
    const newUser = user.createUser('test')
    expect(newUser.name).toBe('test')
    expect(database.getUser()).toContainEqual(newUser)
  })
})
