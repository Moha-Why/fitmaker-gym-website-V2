import React, { useState } from 'react'
import MainTitle from '../components/mainTitle'
import Step from '../components/stepCard'
import steps from '../data/trainingSteps'

const Training = () => {
  const [page, setPage] = useState(1)
  const currentSteps = steps[page - 1]

  function handleClick(e) {
    setPage(parseInt(e.currentTarget.dataset.num))
    window.scrollTo({top: 0, behavior: "smooth"})
  }

  return (
    <>
      <MainTitle context="خطه الثلاث ايام!" />
      <div className="container mx-auto px-5 flex flex-col">
        <div className="trainingPlan py-5 px-2">
          <h2 className='trainingTitle text-3xl text-center text-gray-100 sm:text-right font-bold mb-5'>{currentSteps[0]}</h2>
          {currentSteps.map((ele, index) => {
            if (index === 0) {
              return null
            } else {
              return <Step data={ele} key={index} count={index} />
            }
          })}
        </div>
      </div>
      <div className="pageNavigation justify-center my-8 mx-auto flex gap-20 items-center text-red-hot text-2xl font-bold">
        <button data-num="1" onClick={handleClick} className="pageNum w-10 h-10 border-4 cursor-pointer hover:bg-red-hot hover:text-gray-100 focus:bg-red-hot focus:text-gray-100 transition duration-300 border-red-hot rounded-xl flex justify-center items-center">1</button>
        <button data-num="2" onClick={handleClick} className="pageNum w-10 h-10 border-4 cursor-pointer hover:bg-red-hot hover:text-gray-100 focus:bg-red-hot focus:text-gray-100 transition duration-300 border-red-hot rounded-xl flex justify-center items-center">2</button>
        <button data-num="3" onClick={handleClick} className="pageNum w-10 h-10 border-4 cursor-pointer hover:bg-red-hot hover:text-gray-100 focus:bg-red-hot focus:text-gray-100 transition duration-300 border-red-hot rounded-xl flex justify-center items-center">3</button>
      </div>
    </>
  )
}

export default Training
