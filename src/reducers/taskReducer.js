const taskInitialState = []
const taskReducer = (state = taskInitialState,action)=>{
         switch(action.type){
             case "POST_TASK":{
                return [...action.payload]
             }
             case "ADD_TASK":{
                 return [action.payload,...state]
             }
             case "DELETE_ITEM":{
                const newTask = state.filter((task)=> task.id !== action.payload)
                return newTask
             }
             case "UPDATE_TASK":{
                const newTask = state.map((task)=>{
                    console.log("taskt - ",task.id === action.payload.id)
                    if(task.id === action.payload.id){
                        return {...action.payload}
                    }else{
                        return {...task}
                    }
                })
                return newTask
             }
             default:{
                 return state
             }
         }
}
export default taskReducer
