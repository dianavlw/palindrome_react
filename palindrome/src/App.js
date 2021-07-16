import React, { useState } from 'react'
import './App.css';

function App() {
  const [word, setWord] = useState('')
  const [isPal, setIsPal ] = useState (false)

  // console.log("WORD:", word)

  const handleChange = (evt) => {
    // console.log(evt.target.value)
    // setWord(evt.target.value)
    reverseWord(evt.target.value)
  }

  const isPalindrome = (evt) =>{
    evt.preventDefault()
    // console.log("SUBMITTED")
    const inputWord = evt.target.wordValue.value
    // console.log(inputWord)
    return reverseWord(inputWord)
  }
  const reverseWord = (word) => {
    word = word.replace(/\s/g, '');
    if(!word.length){
      return setIsPal(false)
    }
    let left = 0;
    let right  = word.length - 1;
    while(left < right) {
      if(word[left] !== word[right]){
        return setIsPal(false)
      } else{
        left++;
        right--;
      }
    }
    // console.log("two: ", word)
    return setIsPal(true)
  }
  // console.log(isPal)
  return (
    <div className="App">
      <h1>Is this a palindrome?</h1>
      <form onSubmit={isPalindrome}>
        <input type='text' name='wordValue' />
        <button type='submit'>Submit</button>
        </form> 
       
        {
          isPal
          ?
          <h1>TRUE</h1>
          :
          <h1>FALSE</h1>
        }
    </div>
  );
}

export default App;
