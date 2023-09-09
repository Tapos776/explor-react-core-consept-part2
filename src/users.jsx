import { useEffect, useState } from "react"
import UsersAll from "./assets/AllUSer"

export default function Users(){
    const [users , setUsers]=useState([])
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data =>setUsers(data))
    },[])
    return(
    <div className="box">
        <h4>User:{users.length}</h4>
        {
            users.map(allUser =><UsersAll users={allUser}></UsersAll>)
        }
    </div>
    )
}