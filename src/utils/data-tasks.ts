export type Status = 'todo' | 'in-progress' | 'done'
export type Priority = 'low' | 'medium' | 'high'
export type Task = {
  title: string,
  id: string,
  points?: number,
  status: Status,
  priority: Priority
}

export const statuses: Status[] = ['todo', 'in-progress', 'done']
export const priorities: Priority[] = ['low', 'medium', 'high']

export
  const tasks: Task[] = [
    {
      title: 'Task0',
      id: 'BUS-1',
      points: 5,
      status: 'todo',
      priority: 'low'
    },
    {
      title: 'Task01',
      id: 'BUS-2',
      points: 5,
      status: 'in-progress',
      priority: 'low'
    },
    {
      title: 'Task02',
      id: 'BUS-3',
      points: 10,
      status: 'done',
      priority: 'low'
    },
    {
      title: 'Task02',
      id: 'BUS-3',
      points: 10,
      status: 'done',
      priority: 'medium'
    },
    {
      title: 'Task02',
      id: 'BUS-3',
      points: 10,
      status: 'done',
      priority: 'medium'
    },
    {
      title: 'Task02',
      id: 'BUS-3',
      points: 10,
      status: 'done',
      priority: 'high'
    },
    {
      title: 'Task02',
      id: 'BUS-3',
      points: 10,
      status: 'done',
      priority: 'high'
    }

  ]