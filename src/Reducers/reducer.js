const initialState={
      list:[]
    };
 const rootReducer=(state=initialState, action) =>{
     switch(action.type)
     {
        case "ADD":
            
             const {id,task,complete} =action.payload;
            return{
             ...state,
             list:[...state.list, {id, task, complete}]
            }  
        case "DELETE":
            const newList =state.list.filter(e=> e.id !==action.id)
            return{
                ...state,
                list:newList
            }
        case "REMOVE":
            return{
                ...state,
                list:[]
            }
        case "COMPLETE" :
                   
            const check= state.list.map(todo => 
            todo.id === action.id ? 
            {...todo, complete: !todo.complete}: todo)
                        
            return {
            ...state,
            list:check
            }
            default:

            return state;
     }
}

export default rootReducer;