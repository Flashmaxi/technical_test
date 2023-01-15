import React, { useState } from 'react'




const IncomeTable = ( props ) => {
  const getFinalSalary = ( frequency) => {
    const row = props.value.groupResults.find(el => el.type === frequency)
    return props.value.chosenIncomeType === 'gross' ? row.gross : row.net;
  }
  const [showFinalSalary, setShowFinalSalary] = useState(getFinalSalary(props.value.incomeInterval));

  const frequencyHandler = (e) => {
    setShowFinalSalary(getFinalSalary(e.target.value))
  }
  



  return (
    <div className='bg-[#c7f0ce] p-[32px] rounded-lg h-full w-full'>
      <div className='flex items-center gap-[32px] mb-[32px]'>
        <p className='text-2xl font-semibold p-[12px] rounded-lg bg-[#3acb51] leading-6'>${showFinalSalary}</p>
        <p className='text-2xl font-semibold'>your {props.value.chosenIncomeType} <select className='underline underline-offset-1 bg-[#c7f0ce] text-gray-600' onChange={frequencyHandler} defaultValue={props.value.incomeInterval} name='incomeInterval' type='dropdown'>
        <option value='weekly'>Weekly</option>
        <option value='fortnightly'>Fortnightly</option>
        <option value='monthly'>Monthly</option>
        <option value='annually'>Annually</option>
      </select> income</p>
      </div>
      <table className="pt-8  table-fixed bg-white border-none p-4 w-full">
        <thead className='font-semibold w-full border-b-2 h-[44px]'>
          <tr>
            <th className='pr-32'>Frequency</th>
            <th className='pr-32'>Gross</th>
            <th className='pr-32'>Tax</th>
            <th className='pr-32'>Net</th>
          </tr>
        </thead>
        <tbody>
          {props.value.groupResults.map(groupResult => ( 
            <tr className='justify-items-center' key={groupResult.type}>
              <td className='pl-8 self-center border-b-2 h-[44px] '>{groupResult.type}</td>
              <td className='pl-12 self-center border-b-2 h-[44px]'>{groupResult.gross}</td>
              <td className='pl-14 self-center border-b-2 h-[44px]'>{groupResult.tax}</td>
              <td className='pl-12 self-center border-b-2 h-[44px]'>{groupResult.net}</td>
            </tr>
          ))}
          
        </tbody>
      </table>
    </div>
  )
}

export default IncomeTable;