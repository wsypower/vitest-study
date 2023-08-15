/*
 * @Description:
 * @Author: wsy
 * @Date: 2023-08-15 21:43:06
 * @LastEditTime: 2023-08-15 21:58:24
 * @LastEditors: wsy
 */
import axios from 'axios'

interface User {
  name: string
  age: number
}
export async function doubleUserAge(): Promise<number> {
  const user: User = await axios.get('/test')
  return user.age * 2
}
