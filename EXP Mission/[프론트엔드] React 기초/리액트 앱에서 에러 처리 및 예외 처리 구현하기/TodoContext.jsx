import React, { createContext, useContext, useState, useEffect } from 'react';
import ErrorBanner from '../components/ErrorBanner';

const TodoContext = createContext(null);

export function TodoProvider({ children }) {
  const initialTodoData = localStorage.getItem('todoData')
    ? JSON.parse(localStorage.getItem('todoData'))
    : [];

  const [todoData, setTodoData] = useState(initialTodoData);
  const [value, setValue] = useState('');
  const [error, setError] = useState(null);

  const clearError = () => setError(null);

  useEffect(() => {
    localStorage.setItem('todoData', JSON.stringify(todoData));
  }, [todoData]);

  const addTodo = (e) => {
    try {
      e.preventDefault();
      if (!value.trim()) return;
      const newTodo = { id: Date.now(), title: value, completed: false };
      setTodoData((prev) => {
        const next = [...prev, newTodo];
        try { localStorage.setItem('todoData', JSON.stringify(next)); } catch (lsErr) { console.warn('localStorage unavailable', lsErr); }
        return next;
      });
      setValue('');
    } catch (e) {
      console.error(e);
      setError(e.message || '할일 추가 중 오류가 발생했습니다.');
    }
  };

  const toggleComplete = (id) => {
    try {
      setTodoData((prev) => {
        const next = prev.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t));
        try { localStorage.setItem('todoData', JSON.stringify(next)); } catch (lsErr) { console.warn('localStorage unavailable', lsErr); }
        return next;
      });
    } catch (e) {
      console.error(e);
      setError(e.message || '완료 상태 변경 중 오류가 발생했습니다.');
    }
  };

  const deleteTodo = (id) => {
    try {
      setTodoData((prev) => {
        const next = prev.filter((t) => t.id !== id);
        try { localStorage.setItem('todoData', JSON.stringify(next)); } catch (lsErr) { console.warn('localStorage unavailable', lsErr); }
        return next;
      });
    } catch (e) {
      console.error(e);
      setError(e.message || '할일 삭제 중 오류가 발생했습니다.');
    }
  };

  const editTodo = (id, newTitle) => {
    try {
      setTodoData((prev) => {
        const next = prev.map((t) => (t.id === id ? { ...t, title: newTitle } : t));
        try { localStorage.setItem('todoData', JSON.stringify(next)); } catch (lsErr) { console.warn('localStorage unavailable', lsErr); }
        return next;
      });
    } catch (e) {
      console.error(e);
      setError(e.message || '할일 수정 중 오류가 발생했습니다.');
    }
  };

  return (
    <TodoContext.Provider value={{ todoData, setTodoData, addTodo, handleSubmit: addTodo, value, setValue, toggleComplete, deleteTodo, editTodo, error, setError, clearError }}>
      {/* ErrorBanner is placed here so it's always visible when provider is used */}
      <ErrorBanner message={error} onClose={clearError} />
      {children}
    </TodoContext.Provider>
  );
}

export function useTodo() {
  const ctx = useContext(TodoContext);
  if (!ctx) throw new Error('useTodo must be used within TodoProvider');
  return ctx;
}