// import React from 'react'


const TimeLineItem = ({year,title,duration,details}) => {
  return (
    <div>
        <ol className="flex flex-col md-flex-row relative border-l border-stone-400">
      <li className=" mb-10 ml-6">
        <div className=" absolute w-3 h-3 bg-stone-700 rounded-full mt-1.5 border -left-1.5 border-white"/>
        <h1 className="flex flex-wrap gap-4 flex-row items-center justify-start yext-xs md:text-sm">
          <span className=" inline-block px-2 py-1 font-semibold text-white bg-stone-900 rounded-md">
            {year}
          </span>
          <h3 className="text-lg capitalize font-semibold text-stone-900">
            {title}
          </h3>
          <p className="my-1 capitalize text-sm font-normal leading-none text-stone-400">
            {duration}
          </p>
          </h1>
        
        <p className="my-2 capitalize text-base font-normal text-stone-500">
          {details}
        </p>
      </li>
    </ol>
  </div>
  )
}

export default TimeLineItem