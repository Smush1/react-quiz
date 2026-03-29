import React from 'react'

function Option({question, onDispatch, answer, points}) {

  const hasAnswer = answer !== null;


  function checkAnswer(index){
   // console.log(e.target.innerText)
    onDispatch({
      type: "newAnswer",
      payload: index
    })
  }

  return (
    <div className='options'>
     { question.options.map((option, index)=> 
     <button 
     className={`btn btn-option ${index === answer? 'answer' : ''} 
     ${ hasAnswer 
      ? index === question.correctOption 
      ? 'correct': 'wrong'
      : ''}`} 
     disabled={answer != null}
     onClick={()=>checkAnswer(index)} key={option}>
      {option}
     </button>
    )}
    </div>
  )
}

export default Option