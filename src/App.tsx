import './App.css'
import { Task, tasks } from './utils/data-tasks'
import TaskCard from './components/TaskCard'



function App() {
  const todoTasks = tasks.filter((task) => task.status === 'todo')
  const inProgressTasks = tasks.filter((task) => task.status === 'in-progress')
  const doneTasks = tasks.filter((task) => task.status === 'done')
  
  return (
    <>
    <div className='flex divide-y'>
      <div>
        <h1>ToDo</h1>
        {todoTasks.map((task) => <TaskCard task={task}/>)}
      </div>
      <div>
        <h1>In Progress</h1>
        {inProgressTasks.map((task) => <TaskCard task={task}/>)}
        </div>
        <div>
        <h1>Done</h1>
        {doneTasks.map((task) => <TaskCard task={task}/>)}
        </div>
      </div>
    </>
  )
}

export default App
