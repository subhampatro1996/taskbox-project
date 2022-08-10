import React, { useState }from 'react'
import TaskForm from './TaskForm'
import axios from 'axios'
import {useDispatch} from 'react-redux'
import { asyncSetTask } from './actions/taskAction'

const AddTask = (props)=>{
    const dispatch = useDispatch()
    const { addItem } = props
    const [ isSaved,setIsSaved ] = useState(false)
    
    const toggleIsSaved = ()=>{
        setIsSaved(false)
    }

    return(
        <div>
            <h2>Add Task</h2>
            <TaskForm 
                isSaved={isSaved}
                toggleIsSaved={toggleIsSaved}
            />

        </div>
    )
}
export default AddTask