/*
 * @Description: 准备主句的三种方式
 * @Author: wsy
 * @Date: 2023-08-14 20:21:44
 * @LastEditTime: 2023-08-14 20:38:09
 * @LastEditors: wsy
 */
import todo from '../src/todo'

describe('内联测试', () => {
  it('normal addTodo', () => {
    // 内联的准备代码
    // give
    const todoData = {
      title: 'title',
      content: 'content',
      state: 0,
    }
    // when
    todo.addTodo(todoData)

    // then
    expect(todo.todo.length).toBe(1)
  })
})
