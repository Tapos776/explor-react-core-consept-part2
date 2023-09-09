import { useState } from "react"
import NewCount from "./assets/NewCount"

export default  function CountBtn({name}){
     const [count ,setCount]=useState(0)
     const AddBtn=()=>{
        const newValues =count +1 ;
        setCount(newValues)
     }
     const RemoveBtn=()=>{
        const newValues =count-1 ;
        setCount(newValues)
     }
    return (
        <div>
            <h3>Name:{name.name}</h3>
            <NewCount count={name}></NewCount>
            <h4>Counter:{count}</h4>
            <button onClick={AddBtn}> Add</button>
            <button onClick={RemoveBtn}> Remove</button>
        </div>
    )
}