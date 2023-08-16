
/*
 * @Description:
 * @Author: wsy
 * @Date: 2023-08-16 20:51:19
 * @LastEditTime: 2023-08-16 21:06:35
 * @LastEditors: wsy
 */
import { doubleUserAge } from '../src/global';

describe('global', () => {
  it('stub', async () => {
    vi.stubGlobal('wsy', 123)
    const r = doubleUserAge()
    expect(r).toBe(246)
  })
})
