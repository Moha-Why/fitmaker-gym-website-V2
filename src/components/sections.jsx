import React, { useEffect, useRef, useState } from 'react'

const sections = ({data, white}) => {
    // const white = true
      const [isVisible, setIsVisible] = useState(false)
      const itemRef = useRef(null)

      useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
          if (entries[0].isIntersecting) {
            setIsVisible(true)
          }
        }, {threshold: 0})
        observer.observe(itemRef.current)
      }, [])

  return (
    <>

        {/* <div ref={itemRef} className={`whiteSection w-full ${white ? "" : "bg-dark"} mb-5 h-screen sm:h-[70vh] transition-all duration-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <div className={`flex ${white ? "flex-row-reverse" : null} flex-wrap content-center sm:flex-nowrap gap-5 mx-auto h-full`}>
                <div className="image w-full h-[55%] sm:h-full">
                  <img src={data.imgURL} className='object-cover w-full h-full' alt="" />
                </div>
                <div className={`text w-full md:w-[40%] flex absolute h-1/2 bottom-0 md:h-full ${white ? "bg-[#1a1a1a] md:-skew-x-12 md:left-[5%]" : "bg-dark md:skew-x-12 md:right-[5%]"} p-5 flex-wrap content-center`}>
                  <h1 className='text-red-hot text-4xl mb-10'>{data.title}</h1>
                  <h3 className={`{ ${white ? "text-gray-100" : "text-gray-100"} text-2x`} dangerouslySetInnerHTML={{__html: data.text}}></h3>
                </div>
            </div>
        </div> */}
      <div
        ref={itemRef}
        className={`whiteSection w-full h-screen sm:h-[70vh] 
        transition-all duration-500 
        ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}
        ${white ? "bg-dark" : "bg-dark"}
      `}
      >
        <div
          className={`flex flex-col sm:flex-row h-full mx-auto gap-6 p-6 
          ${white ? "sm:flex-row-reverse" : "sm:flex-row"}`}
        >
          {/* IMAGE */}
          <div className="w-full h-[50%] sm:h-full sm:w-1/2 rounded-xl overflow-hidden shadow-lg">
            <img
              src={data.imgURL}
              alt=""
              className="w-full h-full object-cover"
            />
          </div>

          {/* TEXT CARD */}
          <div
            className={`w-full sm:w-1/2 rounded-xl shadow-xl p-8 flex flex-col justify-center
            ${white ? "bg-[#1a1a1a] text-gray-100" : "bg-[#1c1c1c] text-gray-100"}`}
          >
            <h1 className="text-red-hot text-4xl font-bold mb-6">
              {data.title}
            </h1>

            <h3
              className="text-lg leading-relaxed"
              dangerouslySetInnerHTML={{ __html: data.text }}
            ></h3>
          </div>
        </div>
      </div>

    </>
  )
}

export default sections
