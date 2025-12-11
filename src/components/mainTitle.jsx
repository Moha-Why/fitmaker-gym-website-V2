import React from 'react'

const mainTitle = (props) => {
  return (
    <h1 className={`mainTitle w-fit my-10 mx-auto px-10 py-2 border-8 border-rad rounded-xl border-red-hot text-${props.white ? "gray-100" : "red-hot"} text-4xl transition hover:bg-red-hot hover:text-gray-100`}>{props.context}</h1>
  )
}

export default mainTitle
