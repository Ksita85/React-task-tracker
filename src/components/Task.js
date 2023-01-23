const Task = ({ task, onDelete, onToggle }) => {

    return (
        < div className={`bg-secondary rounded p-2 m-2 row ${task.reminder ? 'border-start border-5 border-info' : ''}`} onDoubleClick={()=> onToggle(task.id)} >
            <h6 className="col-md-10 text-light" >{task.text} </h6>
            <i
                onClick={()=> onDelete(task.id)} style={{ cursor: 'pointer' }} className="col-md-2 text-end fa-solid fa-2x fa-xmark text-danger">
                
            </i>
            <small className="text-light">{task.day}</small>
       </div >
    )
}

export default Task