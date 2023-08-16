/*
 * @Description:
 * @Author: wsy
 * @Date: 2023-08-16 20:59:50
 * @LastEditTime: 2023-08-16 21:14:40
 * @LastEditors: wsy
 */
declare global { 
  interface Window{
    wsy: number
  }
  interface GlobalThis{
    wsy: number
  }
}
export function doubleUserAge() {
  // @ts-expect-error
  const count = global.wsy
  return count * 2
}
