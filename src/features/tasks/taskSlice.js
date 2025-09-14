import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tasks: [] 
};

const taskSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    setTasks(state, action) {
      state.tasks = action.payload;
    },
    toggleTask(state, action) {
      const task = state.tasks.find(task => task.id === action.payload);
      if (task) task.completed = !task.completed;
    },
    deleteTask(state, action) {
      state.tasks = state.tasks.filter(task => task.id !== action.payload);
    },
    editTask(state, action) {
      const { id, newText } = action.payload;
      const task = state.tasks.find(task => task.id === id);
      if (task) task.text = newText;
    },
    addTask(state, action) {
        const newTask = {
            id: state.tasks.length + 1, 
            text: action.payload.text,
            completed: false
        }
      state.tasks.push(newTask);
    },
  },
});

export const { setTasks, toggleTask, deleteTask, editTask, addTask } = taskSlice.actions;
export default taskSlice.reducer;
