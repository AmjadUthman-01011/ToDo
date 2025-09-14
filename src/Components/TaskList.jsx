import React from 'react'
import List from './List' 
import { useEffect, useState } from 'react'
import loadTasks  from '../Helpers/TaskLoder'
import { useSelector, useDispatch } from 'react-redux'
import { setTasks, editTask, toggleTask, deleteTask, addTask } from '../features/tasks/taskSlice'

function TaskList() {
    const [isAddTask, setIsAddTask] = useState(false)
    const [newTaskText, setNewTaskText] = useState("")

    
    const dispatch = useDispatch();
    const tasksList = useSelector((state) => state.tasks.tasks);


useEffect(() => {
    loadTasks().then((tasks) => dispatch(setTasks(tasks)));
    console.log("Tasks loaded and set in Redux store", tasksList);
  }, [dispatch]);

const openAddTask = () => {
  setIsAddTask(true)
}

const saveAdd = () => {
  if (newTaskText.trim() === "") return; 
  //addTask(newTaskText);
  dispatch(addTask({
    text: newTaskText,
  }))

  setIsAddTask(false);
  setNewTaskText("")
  console.log("Saving new task with text:", newTaskText);
};

const cancelAdd = () => {
  setIsAddTask(false)
  setNewTaskText("")
}

  return (
    <ul className='task-list'>
      <div className='add-task-div'>
        <button className='add-task-btn' onClick={() => {
            openAddTask()
        }}>Add Task</button>

        {isAddTask && (
          <>
            <input value={newTaskText} type="text" placeholder="Enter task" onChange={(e)=>setNewTaskText(e.target.value)} className='add-task-input' />
            <button onClick={() => saveAdd()}>💾</button>
            <button onClick={cancelAdd}>❌</button>
          </>
          )}
      </div>
        {tasksList && tasksList.length === 0 && <p>No tasks available</p>}
        {tasksList && tasksList.length > 0 && tasksList.map(task => (
            <List key={task.id} id={task.id} text={task.text} completed={task.completed} 
            toggleTask={(id)=>dispatch(toggleTask(id))}  
            deleteTask={(id)=>dispatch(deleteTask(id))} 
            editTask={(id, newText) => dispatch(editTask({ id, newText }))} 
            />
        ))}
    </ul>
  )
}

export default TaskList