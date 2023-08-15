/*
 * @Description:
 * @Author: wsy
 * @Date: 2023-08-15 21:50:34
 * @LastEditTime: 2023-08-15 21:58:48
 * @LastEditors: wsy
 */
import axios from 'axios'
import { doubleUserAge } from '../src/axios'

vi.mock('axios')

describe('第三方库', () => {
  it('axios', async () => {
    vi.mocked(axios.get).mockResolvedValue({ name: 'w', age: 10 })
    const r = await doubleUserAge()
    expect(r).toBe(20)
  })
})
