import './App.css';
import {useState} from 'react';
import Lists from './components/lists';
import Form from './components/Form';

export default function App() {

  const [todoData, setTodoData] = useState([
    {
        id : "1",
        title: "공부하기",
        completed: false,
      },
      {
        id : "2",
        title: "청소하기",
        completed: false,
      }
  ]);

  const [value, setValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    let newTodo = {
    id : Date.now(),
    title : value,
    completed : false,
    }

  setTodoData([...todoData, newTodo]);
  setValue('');
  }

  return (
    <div className='container'>
      <div className='todo-block'>
        <div className='title'>
          <h1>할 일 목록</h1>
        </div>

    <Lists 
    todoData={todoData}
    setTodoData={setTodoData}
    />

    <Form 
    handleSubmit={handleSubmit}
    value={value}
    setValue={setValue}
    />
    
      </div>
    </div>
  );
}
