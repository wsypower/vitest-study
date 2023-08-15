/*
 * @Description:
 * @Author: wsy
 * @Date: 2023-08-15 20:40:54
 * @LastEditTime: 2023-08-15 20:41:06
 * @LastEditors: wsy
 */
export function userAge() {
  return 1
}

export function fetchUserAge() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(20)
    }, 1000)
  })
}
