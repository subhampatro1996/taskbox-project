import React from 'react'
import TaskForm from './TaskForm'
import axios from 'axios'

const EditTask = (props)=>{
    const { id, title, status, handleToggle } = props

    return(
        <div>
            <h2>Edit Task</h2>
            <TaskForm
                id={id}
                title={title}
                status={status}
                handleToggle={handleToggle}
            />
        </div>
    )
}
export default EditTask