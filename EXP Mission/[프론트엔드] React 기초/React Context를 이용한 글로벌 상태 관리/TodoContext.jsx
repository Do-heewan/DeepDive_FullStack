import React, { createContext, useContext, useState, useEffect } from 'react';

const TodoContext = createContext(null);

export function TodoProvider({ children }) {
  const initialTodoData = localStorage.getItem('todoData')
    ? JSON.parse(localStorage.getItem('todoData'))
    : [];

  const [todoData, setTodoData] = useState(initialTodoData);
  const [value, setValue] = useState('');

  useEffect(() => {
    localStorage.setItem('todoData', JSON.stringify(todoData));
  }, [todoData]);

  const addTodo = (e) => {
    e.preventDefault();
    if (!value.trim()) return;
    const newTodo = { id: Date.now(), title: value, completed: false };
    setTodoData((prev) => [...prev, newTodo]);
    setValue('');
  };

  const toggleComplete = (id) => {
    setTodoData((prev) => prev.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t)));
  };

  const deleteTodo = (id) => {
    setTodoData((prev) => prev.filter((t) => t.id !== id));
  };

  const editTodo = (id, newTitle) => {
    setTodoData((prev) => prev.map((t) => (t.id === id ? { ...t, title: newTitle } : t)));
  };

  return (
    <TodoContext.Provider value={{ todoData, addTodo, value, setValue, toggleComplete, deleteTodo, editTodo }}>
      {children}
    </TodoContext.Provider>
  );
}

export function useTodo() {
  const ctx = useContext(TodoContext);
  if (!ctx) throw new Error('useTodo must be used within TodoProvider');
  return ctx;
}