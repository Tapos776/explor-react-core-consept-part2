import './users.css'
export default function UsersAll({users}){
    console.log(users)
    return (
        <div className='box' >
            <h3>Name:{users.name}</h3>
            <h4>Email:{users.email}</h4>
        </div>
    )
}