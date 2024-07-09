export type Task = {
    title:string,
    id:string,
    points?:number,
    status: 'todo' | 'in-progress' | 'done',
  }

export
  const tasks:Task[] =[
    {
      title : 'Task0', 
      id : 'BUS-1',
      points : 5,
      status:'todo'
      },
    {
      title : 'Task01', 
      id : 'BUS-2',
      points : 5,
      status:'in-progress'
      },
    {
    title : 'Task02', 
    id : 'BUS-3',
    points : 10,
    status:'done'
    },
    {
    title : 'Task02', 
    id : 'BUS-3',
    points : 10,
    status:'done'
    },
    {
    title : 'Task02', 
    id : 'BUS-3',
    points : 10,
    status:'done'
    },
    {
    title : 'Task02', 
    id : 'BUS-3',
    points : 10,
    status:'done'
    },
    {
    title : 'Task02', 
    id : 'BUS-3',
    points : 10,
    status:'done'
    }

  ]