import { useState } from 'react'

const AddTask = ({onAdd}) => {
    const [text, setText] = useState('')
    const [day, setDay] = useState('')
    const [reminder, setReminder] = useState(false)
    
    const onSubmit = (e) => {
        e.preventDefault()

        if (!text) {
            alert('Please Add a Task')
            return
        }

        onAdd({ text, day, reminder })
        
        setText('')
        setDay('')
        setReminder(false)
    }

    return (
        <form onSubmit={ onSubmit } className="m-2 text-light">
            <div>
                <label className="form-label">Task</label>
                <input className="form-control mb-2" type="text" placeholder="Add Task" value={text} onChange={(e)=>setText(e.target.value)} />
            </div>
            <div>
                <label className="form-label">Day & Time</label>
                <input className="form-control mb-3" type="text" placeholder="Add Day & Time" value={day} onChange={(e)=>setDay(e.target.value)}/>
            </div>
            <div className="form-check">
                <label className="form-check-label">Set Reminder</label>
                <input className="form-check-input mb-2" type="checkbox" checked={reminder} value={reminder} onChange={(e)=>setReminder(e.currentTarget.checked)}/>
            </div>
            <div className="d-grid ">
                <input type="submit" className="btn btn-primary my-3" value="Save Task"/>
            </div>
        </form>
  )
}

export default AddTask
