import { readAndProcessFile } from '../src/inject'

describe('依赖注入', () => {
  it('inject', async () => {
    class MyFileReader {
      read(filePath: string): string {
        return 'test'
      }
    }
    const r = readAndProcessFile('./mini.spec.ts', new MyFileReader())
    expect(r).toBe('test123')
  })
})
