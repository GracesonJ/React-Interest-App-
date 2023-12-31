import { TextField, Stack, Button } from '@mui/material'
import React, { useState } from 'react'
import './App.css';


function App() {
  const [interest,setInterest] = useState(0)
  const [principle,setPrinciple] = useState(0)
  const [rate,setRate] = useState(0)
  const [year,setYear] = useState(0)
  
  const [validPrinciple,setValidPrinciple] = useState(true)
  const [validRate,setValidRate] = useState(true)
  const [validYear,setValidYear] = useState(true)
  const handleCalculate = (e)=>{
    e.preventDefault()
    if(!principle || !rate || !year){
    alert("Please Fill The Form Completely")
  }else{
    setInterest(Math.floor(principle*rate/100*year))
  }
}

const validateUserInput = (e)=>{
    //{key}=object
    const {name,value} = e.target
    if(!!value.match(/^[0-9]+$/)){
      //valid expression
      if(name==="principle"){
        setPrinciple(value)
        setValidPrinciple(true)
      }else if(name==='rate'){
        setRate(value)
        setValidRate(true)
      }else{
        setYear(value)
        setValidYear(true)
      }
    }else{
      //invalid expression
      if(name==="principle"){
        setPrinciple(value)
        setValidPrinciple(false)
      }else if(name==='rate'){
        setRate(value)
        setValidRate(false)
      }else{
        setYear(value)
        setValidYear(false)
      }
    }
    
  }
  
const handleReset = ()=>{
  setInterest(0)
  setPrinciple(0)
  setRate(0)
  setYear(0)
}
  return (
    <div style={{height:"100vh"}} className='d-flex justify-content-center align-items-center bg-dark'>
      <div style={{width:"400px"}} className='bg-light p-4 rounded'>
        <h3>simple intrest calculator</h3>
        <p>calculate your simple intrest easily</p>
        <div style={{height:"120px"}} 
        className='intrest-card w-100 bg-warning d-flex flex-column justify-content-center align-items-center rounded shadow text-light mt-4'>
          <h1>₹ {' '} {interest}</h1>
          <p>Total Simple Intrest</p>
        </div>
        <form className="mt-3" onSubmit={handleCalculate} >
          <div className="mb-3">
          <TextField 
          className='w-100' 
          id="outlined-basic1" 
          label="₹ Principal Amount" 
          variant="outlined" 
          value={principle || ""} 
          name='principle' 
          onChange={(e)=>validateUserInput(e)} />
          </div>
          {
          !validPrinciple &&
          <div className="mb-3 text-danger fw-bolder">
            *Invalid Principal Amount
          </div>
          }
          <div className='mb-3'>
            <TextField 
            className='w-100' 
            id="outlined-basic2" 
            label="Rate of Interest (p.a) %" 
            variant="outlined" 
            value={rate || ""} 
            name='rate' 
            onChange={(e)=>validateUserInput(e)} />
          </div>
          {
            !validRate &&
          <div className="mb-3 text-danger fw-bolder">
            *Invalid Principal Amount
          </div>
          }
          <div className='mb-3'>
            <TextField 
            className='w-100' 
            id="outlined-basic3" 
            label="Time Period (Yr)" 
            variant="outlined" 
            value={year || ""} 
            name='year' 
            onChange={(e)=>validateUserInput(e)} />
          </div>
          {
            !validYear &&
          <div className="mb-3 text-danger fw-bolder">
            *Invalid Year
          </div>
          }
          <Stack direction="row" spacing={2}>
            <Button style={{height:"70px", width:"230px"}} 
            variant="outlined" 
            onClick={handleReset}>Reset</Button>

            <Button 
            type='submit'
             style={{height:"70px", width:"230px"}} 
            className='bg-blue' 
            variant="contained" 
            disabled={validPrinciple && validRate && validYear?false:true}>Calculate </Button>
          </Stack>
        </form>
      </div>
    </div>
  )
}

export default App