export class User {
  id: string
  constructor(id: string) {
    this.id = id
  }

  fetchData(callback: (data: string) => void, delay: number): void {
    setTimeout(() => {
      const data = `Data for user with id :${this.id}`
      callback(data)
    }, delay)
  }
}

export function fetchUserData() {
  return new Promise((resolve, reject) => {
    resolve(1)
  })
}

export function doublePromise() {
  return Promise.resolve().then(() => {
    return 1
  }).then((res) => {
    return res + 1
  })
}

export class View {
  count: number = 1
  render() {
    Promise
      .resolve()
      .then(() => this.count = 2)
      .then(() => this.count = 3)
  }
}
