export const add=(data)=>{
    return{
        type:"ADD",
        payload:{
            id:new Date().getTime().toString(),
            task:data,
            complete:false
        }
    }
}

export const del=(id) =>{
    return{
        type:"DELETE",
        id
    }
}

export const remove=() =>{
    return{
        type:"REMOVE"
    }
}

export const completed =(id) =>{
        return {
            type:"COMPLETE",
            id
            
        }
    }