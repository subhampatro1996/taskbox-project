import React,{ useState } from 'react'
import EditTask from './EditTask'
import axios from 'axios'
import {useDispatch} from 'react-redux'
import { asyncRemoveTask } from './actions/taskAction'
const TaskItem = (props) =>{
    const { id, status, title, removeItem} = props
    const [ toggle, setToggle ] = useState(false)
    const dispatch = useDispatch()
    const handleRemove = ()=>{
        //if we declare id parameter inside the handleremove function this will be undefined bcoz that will treat as a local variable 
        //we no need to specify bcoz the id is coming from lexical scope of id 
        // console.log('handle remove',id)
        const confirmRemove = window.confirm('Are you sure?')
        if(confirmRemove){
           dispatch(asyncRemoveTask(id))
        }
    }
    const handleToggle = ()=>{
        const result = !toggle
        setToggle(result)
    }
    return(
        <div>
            {
                toggle ? (
                    <div>
                        <EditTask
                            id={id}
                            title={title}
                            status={status}
                            handleToggle={handleToggle}
                        />
                        <button onClick={handleToggle}>cancel</button>
                    </div>
                ):(
                    <div>
                        <h3>{ title }</h3>
                        <button onClick={handleToggle}>edit</button>
                        <button onClick={handleRemove}>remove</button>
                    </div>
                )
            }
        </div>
    )
}
export default TaskItem