import './App.css'
import CountBtn from './Count'
import Players from './Players'
import Users from './users'
function App(){
  function handelClick(sum){
    alert(sum+5)
  }
  const names = {name:"Tapos", age:23 , class:'11'}
  

  
  return (
    

    <>
      
      <h1>Vite + React</h1>
      <button onClick={()=>handelClick(5)}>Click me</button>
      <button onClick={()=> {confirm("Are you Robot?")}}>Click</button>
      <CountBtn name={names}></CountBtn>
      <Players></Players>
      <Users></Users>
    </>
  )
  }

export default App
