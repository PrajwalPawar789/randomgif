import React, {useState} from 'react'

const Random = () => {
  
  const [gif, setGif] = useState('');
  
  function clickHandler() {
    
  }
  
  return (
    <div className="w-1/2 h-[350px] bg-green-500 rounded-lg border border-black flex
    flex-col items-center gap-y-5 mt-[30px]">
      <h1 className="text-2xl underline uppercase font-bold">A Random Gif</h1>
      <img src={gif} alt="img" width="450px"/>  
      <button onClick={clickHandler}
      className="w-10/12 bg-white opacity-70 text-lg py-2 rounded-lg"
      >
        Generate
      </button>
    </div>
  )
}

export default Random