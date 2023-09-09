import { useState } from "react"

export default function Players(){
    const [count ,newPlayer]=useState(11)
    const newPlayers =()=>{
        newPlayer(count + 1)
    }
    return(
        <div>
            <h3>Players:{count}</h3>
            <button onClick={newPlayers}>Add Play</button>
        </div>
    )
}