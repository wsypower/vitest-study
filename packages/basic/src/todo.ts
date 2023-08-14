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

  removeTodo() {
  }
}

const todo = new Todo()
export default todo
