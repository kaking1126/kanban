import './App.css'
import { statuses, tasks } from './utils/data-tasks'
import TaskCard from './components/TaskCard'



function App() {
  const columns = statuses.map((status) => {
    const taskInColumn = tasks.filter((task) => task.status === status)
    return {
      title: status,
      tasks: taskInColumn
    }
  })
  // const todoTasks = tasks.filter((task) => task.status === 'todo')
  // const inProgressTasks = tasks.filter((task) => task.status === 'in-progress')
  // const doneTasks = tasks.filter((task) => task.status === 'done')

  return (
    <div className='flex divide-x'>
      {columns.map((column) => (
        <div>
          <h2 className='text-3xl p-2 capitalize font-bold text-grey-50'>{column.title}</h2>
          {column.tasks.map((task) => <TaskCard task={task} />)}
        </div>
      ))}
    </div>

  )
}

export default App
