import React,{useState} from 'react'
import useGif from './hooks/useGif';
import Spinner from './Spinner';
const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;
const Random = () => {
  const {gif,loading,fetchData}=useGif();
  
  return (
    <div className='w-1/2  bg-green-500 rounded-lg border border-black 
        flex flex-col gap-y-10 items-center mt-[15px]'>

      <h1 className='text-2xl mt-[15px] underline uppercase font-bold'>A Random gif</h1>
      {
        loading ? (<Spinner/>) : (<img src={gif} width="450" />)
      }
      
      

      <button className='w-10/12 mb-[15px] bg-yellow-400 py-2 rounded-lg text-lg' 
      onClick={()=>fetchData()}>
        Generate
      </button>

    </div>
  )
}

export default Random
