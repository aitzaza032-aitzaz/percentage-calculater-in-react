
import {  useState } from 'react'
import './App.css'

function App() {
    const [obt,setobt]=useState()
  const [tot,settot]=useState()
  const percentage=(Number(obt)/Number(tot)*100);


  return (
    <>
      <div>
       
      <h1 className='shp'>welcome and your percentage is {percentage}  </h1>
   

  <label htmlFor='obtmarks'>OBTAINED MARKS</label><br/>
   <input type='number' 
   placeholder='enter obt marks'
   value={obt}
   onChange={(a)=>setobt(a.target.value)}/>

    <br/>  <label htmlFor='totmarks'>TOTAL MARKS</label><br/>
   <input type='number' 
   placeholder='enter tot marks'
   value={tot}
   onChange={(a)=>settot(a.target.value)}/>

    <h2 className='sh'>   {percentage  &&  percentage + "%"}    </h2>

   




       
      </div>
     
    </>
  )
}

export default App
