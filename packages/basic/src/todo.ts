import { isEqual, remove } from 'lodash-es'

interface TodoType {
  title: string
  content: string
  state: State
}
export enum State {
  active,
  completed,
  removed,
}
class Todo {
  todo: TodoType[] = []
  addTodo(item: TodoType) {
    this.todo.push(item)
  }

  removeTodo(item: TodoType) {
    remove(this.todo, item, isEqual)
  }

  clear() {
    this.todo = []
  }
}

function createTodoItem(): TodoType {
  return {
    title: 'title',
    content: 'content',
    state: State.active,
  }
}

const todo = new Todo()
export default todo
export { createTodoItem, Todo }
