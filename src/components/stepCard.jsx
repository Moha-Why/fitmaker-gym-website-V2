import React from 'react'

const stepCard = ({data, count}) => {
  return (
    <>
        <div className="card flex bg-black text-gray-100 rounded-2xl p-5 relative shadow-[0px_0px_4px_0] shadow-black/25 flex-wrap sm:flex-nowrap group justify-evenly items-center mt-8 lg:h-[55vh]">
            <div className="counter self-baseline w-fit h-fit absolute top-4 left-4 lg:top-0 lg:left-0 lg:relative lg:h-full sm:translate-0 ">
                <div className="number w-8 h-8 lg:relative lg:h-full rounded-lg bg-red-hot transition duration-300 group-hover:bg-gray-600 group-focus:bg-gray-600 text-gray-100 text-xl font-bold flex items-center justify-center">{count}</div>
            </div>
            <div className="stepContext w-full sm:w-2/6 flex flex-col gap-5 px-2">
                <h3 className='font-bold text-xl lg:text-2xl mt-1 sm:mr-0'>{data.stepTitle} :</h3>
                <ul className='text-md lg:text-xl flex flex-col gap-2'>
                    <li><span className='font-bold'>عدد المجموعات:</span> {data.stepSets}</li>
                    <li><span className='font-bold'>عدد العدّات:</span> {data.stepReps} تكرار</li>
                    <li><span className='font-bold'>ملاحظة مهمة:</span> {data.stepNote}</li>
                </ul>
            </div>
            <div className="stepImage w-full sm:aspect-video xl:max-h-[300px] 2xl:max-h-[350px] overflow-hidden sm:w-3/6">
                <img src={data.imgURL} className='w-full h-full object-cover' alt="" />
            </div>
        </div>
        <div className="spacingBorder w-8/12 h-0.5 mt-5 bg-[#DDDDDD] mx-auto last:hidden"></div>
    </>
  )
}

export default stepCard
