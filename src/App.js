import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/addTask";

import { useState, useEffect } from 'react'

const App = () => { 
  const [showAddTask, setShowAddTask] = useState(true)

  const [tasks, setTasks] = useState([])

  useEffect(() => {
    const getTasks = async () => {
      const tasksFromServer = await fetchTasks()
      setTasks(tasksFromServer)
    }
   
    getTasks()
  }, [])

  // fetch tasks
  const fetchTasks = async () => {
    const res = await fetch (`http://localhost:5000/tasks`)
    const data = await res.json()

    return data
  }

  // fetch task
  const fetchTask = async (id) => {
    const res = await fetch (`http://localhost:5000/tasks/${id}`)
    const data = await res.json()

    return data
  }

  // Add task
  const addTask = async (task) => {
    const res = await fetch(`http://localhost:5000/tasks/`, {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(task),
      })

    const data = await res.json()

    setTasks([...tasks, data])

    //   const id = Math.floor(Math.random() * 1000) + 1
    // const newTask = { id, ...task }
    //   setTasks([...tasks, newTask])
  }

  // delete task
  const deleteTask = async (id) => {
    await fetch(`http://localhost:5000/tasks/${id}`, {
      method: 'DELETE'
    })

    setTasks(tasks.filter((task) => task.id !== id))
  }

  // toggle reminder
  const toggleReminder = async (id) => {
    const taskToToggle = await fetchTask(id)
    const updTask = { ...taskToToggle, reminder: !taskToToggle.reminder }

    const res = await fetch(`http://localhost:5000/tasks/${id}`, {
      method: 'PUT',
      headers: { 
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updTask),
    })

    const data = await res.json()

    setTasks(tasks.map((task) => task.id === id ? {...task, reminder: !task.reminder} : task))
  }

  return (
    <div className="container">
      <Header onAdd={() => setShowAddTask(!showAddTask)} title={ 'Title entered in app' } showAdd={showAddTask}/>
      { showAddTask && <AddTask onAdd={addTask} /> }
      {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/> : 'No Tasks to show'}
    </div>
  );
};


export default App;
















// import 'antd/dist/antd.css';
// import { Button, Alert, Carousel } from 'antd';
// import 'antd/dist/antd.css';

// const App: React.FC = () => (
//   <>
//     <Button type="primary">Primary Button</Button>
//     <Button>Default Button</Button>
//     <Button type="dashed">Dashed Button</Button>
//     <br />
//     <Button type="text">Text Button</Button>
//     <Button type="link">Link Button</Button>
//     <Alert showIcon message="Success Text" type="success" closable description="" />
    



//   <Carousel autoplay>
//     <div>
//       <h3 style={contentStyle}>1</h3>
//     </div>
//     <div>
//       <h3 style={contentStyle}>2</h3>
//     </div>
//     <div>
//       <h3 style={contentStyle}>3</h3>
//     </div>
//     <div>
//       <h3 style={contentStyle}>4</h3>
//     </div>
//   </Carousel>
    
//   </>
// );

// const contentStyle = {
//   height: '600px',
//   color: '#fff',
//   lineHeight: '160px',
//   textAlign: 'center',
//   background: '#364d79',
// };