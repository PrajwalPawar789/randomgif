import React, {useState} from 'react'

const Random = () => {
  
  const [gif, setGif] = useState('');
  
  function clickHandler() {
    
  }
  
  return (
    <div>
      <h1>Random Gif</h1>
      <img src={gif}/>
      <button onClick={clickHandler}>
        Generate
      </button>
    </div>
  )
}

export default Random