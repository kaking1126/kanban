import { Task } from '../utils/data-tasks'

const TaskCard = ({task}:{
  task:Task
}) => { 
    return <div className="border rounded-lg px-2 m-2 bg-gray-200 text-left">
      <div className='text-xl py-2'>
        {task.title}
      </div>
      <div className='flex gap-4 justify-between py-2 text-stone-800'>
        <div>{task.id}</div>
        <div>{task.points}</div>
      </div>
  </div>
  }

  export default TaskCard