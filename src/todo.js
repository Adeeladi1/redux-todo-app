import { useSelector , useDispatch} from "react-redux";
import { useState } from "react";
import {add, del,remove} from './Action/action';

const Todo =()=>{
  const [input, setInput] =useState([]);
  const item =useSelector((state)=> state.rootReducer.list)
  const dispatch =useDispatch();
  return(
  
    <div className="section">
      <div className="icon"><h1>Todo App</h1></div>
      <div className="header">
      <div className="left"> <input type="text" value={input} placeholder="add task.." onChange={(e)=> setInput(e.target.value)}/></div>
       <div className="right"><button onClick={()=> dispatch(add(input), setInput(''))}>Add</button></div>
      </div>
    <div className="list">
      {
        item.map(
          (data) => {
            return(<>
              <div className="reduce-item" key={data.id}>
              <div className="item-font">{data.task}</div>
                <div className="item-button"><button onClick={()=> dispatch(del(data.id))}>Remove</button></div>
                
              </div>

            </>)
            
          }
        )
      }
      <div className="clear">
                <button onClick={()=> dispatch(remove())}>Clear</button>
              </div>
    </div>
    
</div>
  )
}

export default Todo;