/*
 * @Description: 准备主句的三种方式
 * @Author: wsy
 * @Date: 2023-08-14 20:21:44
 * @LastEditTime: 2023-08-14 22:07:32
 * @LastEditors: wsy
 */
import todo, { Todo, createTodoItem } from '../src/todo'

describe('内联测试', () => {
  afterEach(() => {
    todo.clear()
  })
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

describe('委托式创建数据', () => {
  afterEach(() => {
    todo.clear()
  })
  it('normal add Todo', () => {
    const todoItem = createTodoItem()
    todo.addTodo(todoItem)
    expect(todo.todo.length).toBe(1)
  })
})

describe('隐式创建', () => {
  const todoOther = new Todo()
  beforeEach(() => {
    return () => {
      todoOther.clear()
    }
  })
  it('normal add Todo', () => {
    const todoItem = createTodoItem()
    todoOther.addTodo(todoItem)
    expect(todoOther.todo.length).toBe(1)
  })
})

describe('后门的方式操作数据', () => {
  it('normal add Todo', () => {
    const todoItem = createTodoItem()
    todo.todo.push(todoItem)
    expect(todo.todo.length).toBe(1)
    todo.removeTodo(todoItem)
    expect(todo.todo.length).toBe(0)
  })
})
