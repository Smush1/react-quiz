import React from 'react'

function StartScreen({numQuestions, onDispatch}) {

  function handleClick(){
    onDispatch({
      type: "start"
    })
  }

  return (
    <div className='start'>
        <h2>Welcome to the React Quiz!</h2>
        <h3> {numQuestions} question to test your react mastery</h3>
        <button className='btn btn-ui' onClick={handleClick}>Let's Start</button>
    </div>
  )
}

export default StartScreen