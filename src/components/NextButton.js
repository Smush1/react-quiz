import React from 'react'

function NextButton({answer, dispatch, index, numQuestions}) {
  if(index < numQuestions - 1)
  return (
    (answer !== null ) && <div className='btn btn-ui' onClick={()=> dispatch({type: 'nextQuestion'})}>Next</div>
  )

  if( index === numQuestions - 1)
  return (
    (answer !== null ) && <div className='btn btn-ui' onClick={()=> dispatch({type: 'finish'})}>Finish</div>
  )
}

export default NextButton