import React from 'react'

function myFunction() {
    var element = document.body;
    element.classList.toggle("dark-mode");
  }

export default function Navbar() {
  return (
    <>
    <div className='nav container-fluid bg-gray-100 h-14 flex justify-center '>
        <div className='w-[99%] flex justify-between'>
            <div className='w-[215px] flex justify-between items-center'>
                <p className='text-xl cursor-pointer'>Navbar</p>
                <ul className='flex justify-between items-center w-[125px] cursor-pointer invisible sm:visible'>
                    <li>Home</li>
                    <li className='text-gray-500 hover:text-gray-900 duration-1000'>About us</li>
                </ul>
            </div>
            <div className='w-[220px] flex items-center justify-between'>
            <label className="inline-flex relative items-center cursor-pointer">
                            <input type="checkbox" value="" className="sr-only peer " />
                            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full
                         after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600" onClick={myFunction}></div>
                            <span className="ml-3 text-sm text-xl dark:text-gray-300">Enable to Dark Mode</span>
                        </label>
            </div>
        </div>
        </div> 
    </>
  )
}
