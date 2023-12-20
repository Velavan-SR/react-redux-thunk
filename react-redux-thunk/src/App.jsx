import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useSelector , useDispatch } from 'react-redux'
import axios from 'axios';
import { dataFetching, fetchDataFunction } from './redux/action'

function App() {

  const data = useSelector((store)=>store.data)
  console.log(data)

  const dispatch = useDispatch()

  const getData = () =>{

    dispatch(dataFetching())

  }

  return (
    <>

     {data.map((el)=>{
      return <div id='item' key={el.id}>
        <div style={{color:'#00A5E3',fontSize:'x-large'}}>{el.name}</div>
        <div style={{color:'#4DD091',fontSize:'medium'}}>{el.email}</div>
      </div>
     })}
      
       <button onClick={getData}>Get Data</button>

    </>
  )
}

export default App
