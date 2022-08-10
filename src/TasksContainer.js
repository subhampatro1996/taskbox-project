import React ,{ useState,useEffect }from 'react'
import {useDispatch} from 'react-redux'
import axios from 'axios'
import TasksList from './TaskList'
import AddTask from './AddTask'
import { asyncGetTask } from './actions/taskAction'


const TasksContainer = (props)=>{
    const [tasks, setTasks] = useState([])
    const dispatch = useDispatch()
    useEffect(()=>{
        // axios.get('http://localhost:3033/api/tasks')
        // .then((response)=>{
        //     //response is an object and the data we required to consume is present in a property called as data
        //     const result = response.data
        //     // console.log(result)
        //     setTasks(result)
        //     //there is not two different url if the user has get [] or an array of ojects we are dealing with the same url here.
        // })//success

        // .catch((error)=>{
        //     alert(error.message)
        //     // error object has the property called as message like how the response called as data we are showing that message to the user
        // })//error

        //what if the backend server is shut down we still need to handle that error using catch method
        //we shutting down our server tasks-fs  3033
        //so there is an error message send back to the user in the front end called as -  Network error 
        dispatch(asyncGetTask())

    },[])

    const addItem = (task) =>{
        //need to deep copy and set to the state we cant directly  do something like this 
        // setTasks(...tasks,task)
        setTasks([...tasks,task])
    }
    const removeItem = (id)=>{
        const result = tasks.filter((task)=>{
            return task.id !== id
        })
        setTasks(result)
    }
    const editItem = (task)=>{
        const result = tasks.map((t)=>{
            if(t.id === task.id){
                return {...t,...task}
            }else{
                return {...t}
            }
        })
        setTasks(result)
    }

    return(
        <div>
            <TasksList tasks={tasks} 
                removeItem={removeItem}
                editItem={editItem}
            />

            <AddTask addItem={addItem}/>
        </div>
    )
}
export default TasksContainer