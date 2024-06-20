import { useCallback, useState, useEffect, useRef } from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [isNumber, setisNumber] = useState(false)
  const [isCharacter, setisCharacter] = useState(false)
  const [password, setPassword] = useState("")
  const passRef = useRef(null)


  const generatePassword = useCallback(() => {
    let characters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
    if(isNumber){
      characters += "0123456789";
    }
    if(isCharacter){
      characters += "!@#$%^&*()_+";
    }
    let pass = "";
    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * characters.length + 1)
      pass += characters.charAt(char)
    }
    setPassword(pass)

  }, [length, isNumber, isCharacter, setPassword])

  const copyPassword = useCallback(() => {
    passRef.current?.select();
    passRef.current?.setSelectionRange(0, 101);
    window.navigator.clipboard.writeText(password);
  },[password])

  useEffect(() => {
    generatePassword()
  }, [length, isNumber, isCharacter, generatePassword])



  return (
    <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500'>
      <h1 className='text-white text-center my-3'>Password Generator</h1>
      <div className='flex shadow rounded-lg overflow-hidden mb-4'>
        <input type="text" 
          readOnly
          value={password}
          placeholder='password'
          ref = {passRef}
          className='outline-none w-full py-1 px-3'/>
        <button className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0' onClick={copyPassword}>Copy</button>
      </div>
      <div className='flex text-sm gap-x-2'>
        <input type="range" 
          value={length}
          max = "100"
          min="5"
          className='cursor-pointer'
          onChange={(e) => setLength(e.target.value)}
        />
        <label htmlFor="length">Length:{length}</label>
        <input type="checkbox"
          checked={isNumber}
          onChange={() => {
            setisNumber(!isNumber)
          }}
        />
        <label htmlFor="number">Number</label>
        <input type="checkbox"
          checked={isCharacter}
          onChange={() => {
            setisCharacter(!isCharacter)
          }}
        />
        <label htmlFor="character">Character</label>
      </div>







    </div>
    
  )
}

export default App
