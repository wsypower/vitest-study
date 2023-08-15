import { userAge } from './userAge'

// 直接输入
function add(a: number, b: number) {
  return a + b
}

// 间接输入
export function doubleUserAge(): number {
  return userAge() * 2
}
