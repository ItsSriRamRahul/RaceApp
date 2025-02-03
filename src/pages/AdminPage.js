import React, { useState } from 'react'
import NavBar from './components/NavBar'
import { Plus,Minus } from 'lucide-react'
function AdminPage() {
 const [score1,SetScore1]=useState(0)
 const [score2,SetScore2]=useState(0)
    


  return (
    <div class ="min-h-screen bg-gray-100 flex flex-col ">
        {/* {nVBr} */}
        <NavBar/>
        {/* {body} */}
        <div class='container mx-auto py-8 px-3 md:flex md:justify-center md:flex-col md:items-center flex flex-1 flex-col' >
            <p class="text-2xl font-bold text-center text-black mb-8">Badminton Tournament</p>
            <div className='bg-white rounded-2xl shadow-md mx-2 p-4 my-4 grid grid-cols-3 gap-y-5-2 md:w-1/2  '> 
                <div class=" row-span-2  ">
                <p className='font-bold text-xl'>Rahul</p>
                <p>team alpha</p>
                </div> 
                <p class="flex font-bold text-xl row-span-2 items-center justify-center">{score1}</p>
                <div className='flex row-span-2  justify-around'><button className='mx-2 ' onClick={()=>{
                    SetScore1(score1+1)
                }}><Plus/></button>

                <button className='mx-4' onClick={()=>{
                    SetScore1(score1-1)
                }}><Minus/></button>
                
                </div>
            </div>
            <div className='bg-white rounded-2xl shadow-md mx-2 p-4 my-4 grid grid-cols-3 gap-y-5-2 md:w-1/2  '> 
                <div class=" row-span-2  ">
                <p className='font-bold text-xl'>Raja</p>
                <p>team alpha</p>
                </div> 
                <p class="flex font-bold text-xl row-span-2 items-center justify-center">{score2}</p>
                <div className='flex row-span-2  justify-around'><button className='mx-2 ' onClick={()=>{
                    SetScore2(score2+1)
                }}><Plus/></button>

                <button className='mx-4' onClick={()=>{
                    SetScore2(score2-1)
                }}><Minus/></button>
                
                </div>
            </div>
            <div className='flex justify-center items-center text-xl p-4'>
                <button className='bg-black text-white p-4 rounded-md'> Submit</button>
            </div>
            <div className=" grid grid-row-3 flex-1 my-4 w-full">
               
                <div className=' bg-white grid grid-cols-2 h-36'>
                 <div className='col-span-2 h-[2px] justify-center text-center text-2xl'>Last Round</div>
                    <div className='flex flex-col row-span-1 justify-start text-center border-r-2 border-black border-t-2'>
                        <p className='text-2xl font-semibold p-1'>Raja</p>
                        <p className='text-2xl'>21</p>
                        </div>
                        <div className='flex flex-col row-span-1 justify-start text-center  border-black border-t-2'>
                        <p className='text-2xl font-semibold p-1'>Rahul</p>
                        <p className='text-2xl'>21</p>
                        </div>
                </div>
                <div className='row-span-1'>2</div>
                <div className='row-span-1'>3</div>
            </div>
        </div>
        
    </div>
  )
}

export default AdminPage