import React, { useState } from 'react'
import './SearchBar.css'
import {FaSearch} from 'react-icons/fa'
import {AiOutlineClose} from 'react-icons/ai'

function SearchBar() {
    const [inputText, setInputText] = useState('')
    function search() {
        console.log('procurou')
        console.log(process.env)
    }
  return (
    <div className='searchBox'>
        <input type='text'  placeholder={'Location'} value={inputText} onChange={(e)=>{setInputText(e.target.value)}}/>
        <FaSearch className='SearchIcons' onClick={()=>{search()}}/>
        <AiOutlineClose className='SearchIcons'/>
    </div>
  )
}

export default SearchBar