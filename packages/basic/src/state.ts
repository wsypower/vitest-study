/*
 * @Description
 * @Author: wsy
 * @Date: 2023-08-18 21:12:49
 * @LastEditTime: 2023-08-21 19:33:07
 * @LastEditors: wsy
 */
export class Counter {
  private count: number
  constructor() {
    this.count = 0
  }

  increment(): void {
    this.count++
  }

  getCount() {
    return this.count
  }
}

interface User {
  id: number
  name: string
}

export class Database {
  private database: User[] = []
  addUser(newUser: User) {
    this.database.push(newUser)
  }

  getUser() {
    return this.database
  }
}

export class UserService {
  constructor(private database: Database) {
  }

  createUser(name: string): User {
    const id = Math.floor(Math.random() * 1000)
    const newUser: User = { id, name }
    this.database.addUser(newUser)
    return newUser
  }
}
