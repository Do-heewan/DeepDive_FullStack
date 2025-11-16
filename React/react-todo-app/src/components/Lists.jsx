import List from './List'
import { useTodo } from '../context/TodoContext';

export default function Lists() {
  const { todoData, setTodoData } = useTodo();

    return <div>
        {
        todoData.map((data) => (
            <List 
            key={data.id}
            title={data.title}
            completed={data.completed}
            id={data.id}
            todoData={todoData}
            setTodoData={setTodoData}
            />
        ))
    }
    </div>
}