import React,{ useState,useEffect } from 'react'
import {useDispatch} from 'react-redux'
import { v4 as uuidv4 } from 'uuid'
import { asyncSetTask, asyncUpdateTask } from './actions/taskAction'

const TaskForm = (props)=>{
    const { formSubmit, isSaved, toggleIsSaved, id:slNo, title:taskTitle, status:taskStatus,handleToggle } = props
    const [id,setId] = useState(slNo ? slNo : uuidv4())
    const [title,setTitle] = useState(taskTitle ? taskTitle : '')
    const [status,setStatus] = useState(taskStatus ? taskStatus : false)
    const dispatch = useDispatch()

    const handleTitleChange = (e) =>{
        setTitle(e.target.value)
    }
    const handleStatusChange = (e)=>{
        //while we are dealing with checkbox we are dealing with checked property not the value property
        setStatus(e.target.checked)
    }

    const handleSubmit = (e) =>{
        e.preventDefault()
        const formData = {
            id : id,
            title : title,     
            status : status
        }
        if(slNo){
            dispatch(asyncUpdateTask(formData))
            handleToggle()
        }else{
            dispatch(asyncSetTask(formData))

                setId(uuidv4())
                setTitle('')
                setStatus(false)
            
        }
        // console.log(formData)

    }

       
    return(
        <div>
            <form onSubmit={handleSubmit}>
                <label>title</label><br/>
                {/* this is the controlled component hence we set the value here or onchange event handler  */}
                <input 
                type="text" 
                value={title} 
                onChange={handleTitleChange}>
                </input> 
                <br/>

                <input 
                type="checkbox" 
                checked={status} 
                onChange={handleStatusChange}>
                </input> <label>Completed</label> <br/>

                <input 
                type="submit" 
                value="save">
                </input>
            </form>
        </div>
    )
}
export default TaskForm