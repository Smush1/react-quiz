import React from 'react'

function NextButton({answer, dispatch}) {
  return (
    (answer !== null ) && <div className='btn btn-ui' onClick={()=> dispatch({type: 'nextQuestion'})}>Next</div>
  )
}

export default NextButton