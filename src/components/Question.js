import React from 'react'
import Option from './Option'

function Question({question, onDispatch, answer}) {
    console.log(question)
  return (
    <>
        <h4>{question.question}</h4>
        < Option question={question} onDispatch={onDispatch} answer={answer} />
    </>
  )
}

export default Question