import './App.css';
import {useState} from 'react';

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

  const btnStyle = {
    color: '#fff',
    border: 'none',
    padding: '5px 9px',
    borderRadius: '50%',
    cursor: 'pointer',
    float: 'right'
  }

  const getStyle = (completed) => {
    return {
      padding: '10px',
      borderBottom: '1px #ccc dotted',
      textDecoration: completed ? 'line-through' : 'none'
    }
  }

  const handleClick = (id) => {
    console.log(id);
    let newTodoData = todoData.filter((data) => data.id !== id);
    console.log(newTodoData);
    setTodoData(newTodoData);
  }

  const handleChange = (e) => {
    console.log(e.target.value);
    setValue(e.target.value);
  }

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

  const handleCompleteChange = (id) => {
    let newTodoData = todoData.map((data) => {
      if (data.id === id) {
        data.completed = !data.completed;
      }
      return data;
    })

    setTodoData(newTodoData);
  }

  return (
    <div className='container'>
      <div className='todo-block'>
        <div className='title'>
          <h1>할 일 목록</h1>
        </div>

    {
      todoData.map((data) => (
        <div key={data.id} style={getStyle(data.completed)}>
          <input type='checkbox' 
          onChange={() => handleCompleteChange(data.id)} 
          checked={data.completed}/>
          {data.title}
          <button style={btnStyle} onClick={() => handleClick(data.id)}>X</button>
        </div>
      ))
    }

    <form style={{display: 'flex'}} onSubmit={handleSubmit}>
      <input 
      type='text'
      name='value'
      style={{flex: '10', padding: '5px'}}
      placeholder='할 일을 입력하시오.'
      value={value}
      onChange={handleChange}
      />

      <input
      type='submit'
      value='입력'
      className='btn'
      style={{flex: '10px'}}
      />
    </form>
    
      </div>
    </div>
  );
}
