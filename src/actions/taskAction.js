import axios from 'axios'

export const getTask = (data)=>{
    return{
        type:'POST_TASK',
        payload:data
    }
}

export const setTask = (task)=>{
    return{
        type : 'ADD_TASK',
        payload : task
    }
}

export const asyncSetTask = (task)=>{
    return (dispatch)=>{
        axios.post('http://localhost:3033/api/tasks',task)
        .then((response)=>{
           const result = response.data
        //    console.log("syncsettask",typeof dispatch(setTask(result)))
           dispatch(setTask(result))
           // console.log('formsubmit',result)
        })//success 
        .catch((error)=>{
           alert(error.message)
        })//error
    }
}

export const asyncGetTask = ()=>{
    return (dispatch)=>{
        axios.get('http://localhost:3033/api/tasks')
             .then((response)=>{
                const result = response.data
                console.log(result)
                dispatch(getTask(result))
             })//success 
             .catch((error)=>{
                alert(error.message)
             })//error
    }
}

export const removeTask = (id)=>{
    return{
        type: "DELETE_ITEM",
        payload : id
    }
}

export const asyncRemoveTask = (id)=>{
    return (dispatch)=>{
        axios.delete(`http://localhost:3033/api/tasks/${id}`)
         .then((res)=>{
             console.log(res.data)
            dispatch(removeTask(id))
         })
         .catch((err)=>{
             console.log(err.message)
         })
    }
}

export const updateTask = (data)=>{
    return{
        type:"UPDATE_TASK",
        payload:data
    }
}
export const asyncUpdateTask = (data)=>{
    return(dispatch)=>{
        axios.put(`http://localhost:3033/api/tasks/${data.id}`,data)
        .then((res)=>{
            console.log(res.data)
            dispatch(updateTask(res.data))
        })
        .catch((err)=>{
            console.log(err.message)
        })
    }
}