/*
 * @Description:
 * @Author: wsy
 * @Date: 2023-08-16 21:36:57
 * @LastEditTime: 2023-08-16 21:44:25
 * @LastEditors: wsy
 */
import fs from 'node:fs'

// 依赖注入
interface FileReader {
  read(filePath: string): string
}

export class MyFileReader implements FileReader {
  read(filePath: string): string {
    return fs.readFileSync(filePath).toString()
  }
}

export function readAndProcessFile(filePath: string, reader: FileReader) {
  const fileContent = reader.read(filePath)
  return `${fileContent}123`
}
