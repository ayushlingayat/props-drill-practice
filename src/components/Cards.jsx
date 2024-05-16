import React from 'react'

const Cards = ({data , handelClick , index}) => {

    const{image , artist , name , added } = data

  return (
    <div className="w-60 bg-zinc-100 p-4 rounded-md flex gap-4 pb-9 relative mt-10">
      <div className="w-20 h-20 bg-orange-600 rounded-md overflow-hidden">
        <img className="w-full h-full object-cover"src={image} alt="" />
      </div>
      <div className="">
        <h3 className='text-xl leading-none font-semibold'>{name}</h3>
        <h6 className="text-sm">{artist}</h6>
      </div>
      <button onClick={()=>handelClick(index)} className={`px-4 py-3 ${added === false ? "bg-pink-500" : "bg-blue-500"} absolute left-1/2 translate-y-[50%] -translate-x-[50%] whitespace-nowrap text-white text-xs rounded-full bottom-0`}>{added === false ? "Add to Favourites" : "Added"}</button>
    </div>
  )
}

export default Cards
