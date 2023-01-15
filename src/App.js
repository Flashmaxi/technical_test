import React, { useState } from 'react'
import IncomeCalculator from './components/IncomeCalculator';
import IncomeTable from './components/IncomeTable';
import NavBar from './components/NavBar';


const App = () => {
  const handlerFunction = (result) => {
    console.log(result)
    setCurrentPage(1)
    setShowResult(result)
  }

  const navigateBtn = (page) => {
    if(page === 1 && showResult === null) {
      return
    }
    setCurrentPage(page)
  }

  const [ currentPage, setCurrentPage ] = useState(0)
  const [showResult, setShowResult] = useState(null)


  return (
    <div className="w-full h-screen flex items-center justify-center">
      <div className="h-screen flex flex-col max-h-96">
  <NavBar currentPage={currentPage} navigationChange={navigateBtn}/>
  </div>
  <div className="p-4 w-full max-w-6xl h-screen max-h-96 bg-white shadow-lg rounded-lg flex flex-col rounded-t-none">
  {currentPage === 0 ? <IncomeCalculator onResult={handlerFunction}/> : <IncomeTable value={showResult} /> }
  </div>
  
   
</div>
  )
}

export default App;