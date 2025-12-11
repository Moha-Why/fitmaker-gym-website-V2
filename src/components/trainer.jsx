import React from 'react'

const trainer = ({data}) => {
  return (
    <>
        <div className="card relative text-gray-100 bg-[#1E1E1E] shadow-md transition hover:-translate-y-2 shadow-emerald-950 text-center flex flex-col items-center w-full md:w-1/3">
            <div className="image w-full h-full ">
                <img src={data.imgURL} className='w-full rounded-lg h-full object-cover' alt="" />
            </div>
            <div className="overlay absolute inset-0 bg-linear-to-t from-black/80 to-transparent"></div>
            <div className="text absolute w-full p-2 left-1/2 bottom-2 -translate-x-1/2">
              <h3 className='font-bold lg:text-xl mb-2'>{data.name}</h3>
              <h4 className='font-light lg:text-lg'>{data.content}</h4>
            </div>
        </div>  
    </>
  )
}

export default trainer
