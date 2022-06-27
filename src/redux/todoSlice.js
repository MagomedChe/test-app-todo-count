import { createSlice } from '@reduxjs/toolkit';

const todoSlice = createSlice({
  name: 'todos',
  initialState: {
    todos: JSON.parse(localStorage.getItem('todos')) || [],
    count: JSON.parse(localStorage.getItem('count')) || 0,
  },
  reducers: {
    addTodo(state, action) {
      state.todos.push(action.payload);
    },
    increase(state) {
      state.count = state.count + 1;
    },

    decrease(state) {
      state.count = state.count - 1;
    },
  },
});

export const { addTodo, increase, decrease } = todoSlice.actions;

export default todoSlice.reducer;
