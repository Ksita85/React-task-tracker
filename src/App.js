import { useState } from "react"
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";

function App() {
  const [showAddTask, setShowAddTask] = useState(false)
  const [tasks, setTasks] = useState(
    [
        {
            "id": 1,
            "text": "Doctors Appointment",
            "day": "Feb 5th at 2:30pm",
            "reminder": true,
          },
          {
            "id": 2,
            "text": "Meeting at School",
            "day": "Feb 6th at 1:30pm",
            "reminder": true,
          },
          {
            "id": 3,
            "text": "Food Shopping",
            "day": "Feb 5th at 2:30pm",
            "reminder": false,
          },
          {
            "id": 4,
            "text": "Feed the Cat",
            "day": "Feb 5th at 7:00am",
            "reminder": true,
          },
          {
            "id": 5,
            "text": "Call Marlyn",
            "day": "Feb 5th at 5:30pm",
            "reminder": false,
          }
    ]
  )

  //Add Task

  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000) + 1
    const newTask = { id, ...task }
    setTasks([...tasks, newTask])
  }

  //Delete Task

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  //Toggle reminder 

  const toggleReminder = (id) => {
    setTasks(tasks.map((task) => task.id === id ? { ...task, reminder: !task.reminder }: task))
  }
  return (
    <div className="container">
      <div className='col-md-5 bg-dark p-3 rounded mx-auto my-4'>
        <Header onAdd={()=>setShowAddTask(!showAddTask)} showAdd={showAddTask} />
        {showAddTask && <AddTask onAdd={addTask} />}
        {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} /> : <p className="alert alert-danger p-2 m-2">No Tasks Scheduled</p>}
      </div>
    </div>
  );
}

export default App;
