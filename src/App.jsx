import React, { useState } from 'react'
import Cards from './components/Cards'
import Navbar from './components/Navbar'

const App = () => {

  const data =[
    {
      image:"https://i.scdn.co/image/ab67616d0000b2732f2623c93d48a736c6f23cef",
      name:'Beliver',
      artist:"Imagine Dragons",
      added:true
    },
    {
      image:"https://i.ytimg.com/vi/ay9y3CTkT40/maxresdefault.jpg?sqp=-oaymwEmCIAKENAF8quKqQMa8AEB-AH-CYAC0AWKAgwIABABGHIgRyg8MA8=&rs=AOn4CLCP51dkGCbW0NAhvXwDbEhnNvgvRw",
      name:'Peaches',
      artist:"Justin Bieber",
      added:false
    }, {
      image:"https://i.ytimg.com/vi/tf8NV-tUXXY/maxresdefault.jpg",
      name:'Oggy Title Track',
      artist:"Ayu",
      added:false
    }, {
      image:"https://c.saavncdn.com/417/Shinchan-Hindi-Rap--Hindi-2022-20220227133310-500x500.jpg",
      name:'Shinchan',
      artist:"Divyam Deep",
      added:false
    },
    {
      image:"https://i.guim.co.uk/img/media/66e444bff77d9c566e53c8da88591e4297df0896/120_0_1800_1080/master/1800.png?width=465&dpr=1&s=none",
      name:'Pokemon Tilte Track',
      artist:"Jaison Page",
      added:false
    },
    {
      image:"https://staticg.sportskeeda.com/editor/2023/12/1f65a-17016694277476-1920.jpg?w=640",
      name:'Doremon Title Track',
      artist:"Kumiko Osugi",
      added:false
    },
    {
      image:"https://m.media-amazon.com/images/S/pv-target-images/11c37b0f136c5b392fa4eed0b89a935ce4844220599da91166d4423e4256cc15.jpg",
      name:'Zig Sharko',
      artist:"Vincent Artaud",
      added:false
    },
    {
      image:"https://i.ytimg.com/vi/ebfV2J4lso4/mqdefault.jpg",
      name:'Ben Ten',
      artist:"Sunidhi Chauhan",
      added:false
    }


  ];

  const [songData , setSongData] =  useState(data);

  const handelClick = (index) =>{
    setSongData((prev)=>{
     return prev.map((item , itemindex)=>{
      if(itemindex === index){
        return {...item , added : !item.added}
      }
          return item;
      })
    })
  }

  return (
    <div className="w-full h-screen bg-black ">
    <Navbar data={songData}/>
    <div className="px-20 flex gap-10 mt-10 flex-wrap">
      {songData.map((obj ,index)=>
       <Cards key={index} data={obj} handelClick={handelClick} index={index} />
      )}
    </div>
    </div>
  )
}

export default App
