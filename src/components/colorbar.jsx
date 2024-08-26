import React from 'react'
import { useState } from 'react'

export default function colorbar() {
    const [color, setColor] = useState("lavender  ")
  return (
    <>
    <div style={{ backgroundColor: color, height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
    <button className='bg-white'>
<div className="flex justify-around flex-col space-y-2 md:flex-row md:space-x-2 md:space-y-0">
  <button 
  onClick={()=>setColor("red")
}
    type="button"
    className="rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm "
  >
    Red 
  </button>
  <button
  onClick={()=>setColor("green")}
    type="button"
    className="rounded-md bg-green-600 px-3 py-2 text-sm font-semibold text-white shadow-sm"
  >
    Green
  </button>
  <button
  onClick={()=>setColor("blue")}
    type="button"
    className="rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm"
  >
    Blue
  </button>
  <button 
  onClick={()=>setColor("olive")}
    type="button"
    className="rounded-md bg-green-950 px-3 py-2 text-sm font-semibold text-white shadow-sm "
  >
   Olive
  </button>
  <button
  onClick={()=>setColor("gray")}
    type="button"
    className="rounded-md bg-gray-600 px-3 py-2 text-sm font-semibold text-white shadow-sm"
  >
    Gray
  </button>
  <button
  onClick={()=>setColor("yellow")}
    type="button"
    className="rounded-md bg-yellow-600 px-3 py-2 text-sm font-semibold text-white shadow-sm"
  >
    Yellow
  </button>
  <button
  onClick={()=>setColor("pink")}
    type="button"
    className="rounded-md bg-pink-400 px-3 py-2 text-sm font-semibold text-white shadow-sm"
  >
    Pink
  </button>
  <button
   onClick={()=>setColor("purple")}
    type="button"
    className="rounded-md bg-purple-700 px-3 py-2 text-sm font-semibold text-white shadow-sm"
  >
   Purple
  </button>
  <button
  onClick={()=>setColor("lavender")}
    type="button"
    className="rounded-md bg-purple-200 px-3 py-2 text-sm font-semibold text-black shadow-sm"
  >
   Lavender
  </button>
  <button
  onClick={()=>setColor("white")}
    type="button"
    className="rounded-md bg-white px-3 py-2 text-sm font-semibold text-black shadow-sm "
  >
   White
  </button>
  <button
  onClick={()=>setColor("black")}
    type="button"
    className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm"
  >
   Black
  </button>
</div>
</button>
</div>
    </>
  )
}
