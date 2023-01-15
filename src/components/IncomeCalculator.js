import React, { useRef, useState } from 'react'
import Header from './Header'

const IncomeCalculator = ( props ) => {
  const inputRef = useRef(null);
  const radioRefOne = useRef(null);
  const radioRefTwo = useRef(null);
  const dropRef = useRef(null);

const taxRate = 2 / 100

const calculateResult = (type) => {
  let gross = inputRef.current.value;
  if(type === 'weekly') {
    gross = gross * 12 / 52;
  } else if  (type === 'fortnightly') {
    gross = gross * 12 / 26 
  } else if ( type === 'annually') {
    gross = gross * 12
  }
  const taxTotal = gross * taxRate;
  const netTotal = gross - taxTotal;

  return {
    type: type , gross: Math.floor(gross), tax: Math.floor(taxTotal), net: Math.floor(netTotal)
  }
}





const calculateHandler = () => {

  const result = {
    chosenIncomeType: radioRefOne.current.checked ? radioRefOne.current.value : radioRefTwo.current.value,
    chosenSalary: inputRef.current.value,
    incomeInterval: dropRef.current.value,
    groupResults: [
      calculateResult('weekly'),
      calculateResult('fortnightly'),
      calculateResult('monthly'),
      calculateResult('annually')

    ]
    
  }
  
  props.onResult(result)
}
const [useButton, setUseButton] = useState(false)



const validateForm = () => {
  setUseButton(isValid())
}






 const isValid = () => {
  return (inputRef.current && inputRef.current.value > 0 && (radioRefOne.current.checked || radioRefTwo.current.checked)) 
    
}

  return (
    <div>
      <Header/>
      <label className='py-4 text-2xl font-medium leading-8'>What is your total income?</label>
      <div className='relative flex items-center border-solid border-t-red-100 w-full rounded-md border-black'>
        <div role='button' className='flex items-center flex-grow-0 flex-shrink-0 mr-4 justify-center'>$</div>
      <input className='relative p-[6px] flex items-center flex-grow-1 w-full min-h-[48px] border-none' placeholder='e.g. 12,000' ref={inputRef} onChange={validateForm} inputmode='numeric'  name='salary' min='0'></input>
      <div>
      <select className='flex items-center bg-[#eaeaea] w-auto mr-0 min-h-[48px]' onChange={validateForm} defaultValue='monthly' ref={dropRef} name='incomeInterval' type='dropdown'>
        <option value='weekly'>Weekly</option>
        <option value='fortnightly'>Fortnightly</option>
        <option value='monthly'>Monthly</option>
        <option value='annually'>Annually</option>
      </select>
      </div>
      </div>
    <label className=' py-8 text-2xl font-medium leading-8'>Please choose the income type</label>
    <div className='py-8' onChange={validateForm}>
    <label className='text-xl font-medium leading-8 mr-6'>Gross income<input className='ml-4' ref={radioRefOne} type='radio' value='gross' name='incomeType'/></label>
    <label className='text-xl font-medium leading-8'>Net income<input className='ml-4' ref={radioRefTwo} type='radio' value='net' name='incomeType'/></label>
    </div>
    <button className='w-1/2 bg-[#3acb51] hover:bg-green-700 text-white font-bold py-2 px-4 rounded ' disabled={!useButton} onClick={calculateHandler} type='button'>Calculate</button>
    </div>

  )
}

export default IncomeCalculator;