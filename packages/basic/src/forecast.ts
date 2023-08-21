/*
 * @Description:
 * @Author: wsy
 * @Date: 2023-08-21 20:07:54
 * @LastEditTime: 2023-08-21 20:31:26
 * @LastEditors: wsy
 */
export function generateRandomString(length: number): string {
  let result = ''
  const characters = 'abcdefghijklmnopqrstuvwxyz'
  for (let i = 0; i < length; i++)
    result += characters.charAt(Math.floor(Math.random() * characters.length))
  return result
}

export function checkFriday(): string {
  const today = new Date()
  if (today.getDay() === 5)
    return 'happy'

  else
    return 'sad'
}
