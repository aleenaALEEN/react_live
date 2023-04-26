import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar';
import { useState } from 'react';

function App() {
  const[data,setdata]=useState('')
  function HandleChng (e) {
    setdata(e.target.value)
    console.log(data,"inputvalue");
  }
  function HandleUperCase(){
    const upper=data.toUpperCase()
    setdata(upper)
  }
  function HandleLowerCase(){
    const lower=data.toLowerCase()
    setdata(lower)
  }
  function HandleClear(){
    const clear=''
    setdata(clear)
  }
  const HandleCopy = () =>{
    navigator.clipboard.writeText(data)
  }
  const HandleSpace = () =>{
    const space=data.trim(/[ ]+/)
    setdata(space)
  }
  return (
    <div className="App">
      <Navbar/>
      <div className='container-fluid flex justify-center'>
        <div className='container w-[80%]'>
          <h1 className='mt-10 font-semibold text-[28px]'>Enter The Text analize Bellow</h1>
          <textarea value={data} className='border border-gray-300 p-4 mt-[15px] rounded h-52 w-full' onChange={HandleChng}></textarea>
          <div className='mt-2 text-white'>
            <button className='bg-blue-500 ml-4 py-[7px] px-[14px] rounded hover:bg-blue-600 cursor-pointer' onClick={HandleUperCase}>Convert toUperCase</button>
            <button className='bg-blue-500 ml-4 py-[7px] px-[14px] rounded hover:bg-blue-600 cursor-pointer' onClick={HandleLowerCase}>Convert toLowerCase</button>
            <button className='bg-blue-500 ml-4 py-[7px] px-[14px] rounded hover:bg-blue-600 cursor-pointer' onClick={HandleClear}>Clear Text</button>
            <button className='bg-blue-500 ml-4 py-[7px] px-[14px] rounded hover:bg-blue-600 cursor-pointer' onClick={HandleCopy}>Copy Text</button>
            <button className='bg-blue-500 ml-4 py-[7px] px-[14px] rounded hover:bg-blue-600 cursor-pointer' onClick={HandleSpace}>Extra Removing Spacing</button>
          </div>
          <h1 className='mt-2 font-semibold text-[32px]'>Your Text Summery</h1>
          <div className='w-[12%] flex justify-between mt-4'>
            <p>{data.length>0 ? data.trim().split(" ").length : 0}</p>
            <p>Words</p>
            <p>{data.length}</p>
            <p>Characters</p>
          </div>
          <p className='mt-4'>{0.08*data.split(" ").length} minutes Read Word</p>
          <h1 className='mt-2 font-semibold text-[32px]'>Preview Summary</h1>
          <p className='mt-[5px]'>{data ? data : "Enter something in the box above to preview it here"}</p>
        </div>
      </div>
    </div>
  );
}

export default App;
