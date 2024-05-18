import React, { useState } from 'react'
import './SearchBar.css'
import SearchIcon from "@mui/icons-material/Search"
import MicIcon from '@mui/icons-material/Mic'
import { Button } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { useStateValue } from '../../StateProvider'
import { actionTypes } from '../../reducer'


function SearchBar({hideButtons = false}) {

    //It gives us two the things
    //1: {}: what the data layer looks like(basically we can say break apart of the state and give me the search {term})
    //2: the dispatch: this is like a gun that allows us to shoot actions into data so that we can change it
    const [{}, dispatch] = useStateValue()
    
    const [input, setInput] = useState('')
    // this provides us with the browsers history
    const navigate= useNavigate();

    const search=(e) => {
        e.preventDefault()
        // console.log('hit it',input)

        dispatch({
            //we can pass it as type: 'SET_SEARCH_TERM' but as we passed in switch case in reducer so we are doing the same thing
            type: actionTypes.SET_SEARCH_TERM,
            term: input
        })

        //basically when you'll serach something and hit enter this will take you to that search page
        navigate('/search')

    }

  return (
    // so earlier we wanted that after typing what we want to search if we hit enter so the google search button click method should RunCircle. so to make that happen we changed the div to form and added type-submit to search button
    <form className='search'>
      <div className='search__input'>
        <SearchIcon className="search__inputIcon"></SearchIcon>
        <input value={input} onChange={(e) => {setInput(e.target.value)}}></input>
        <MicIcon></MicIcon>
      </div>

      {!hideButtons ? (
        <div className='search__buttons'>
            {/* we are using matrial ui button here */}
            {/* material ui provides you with some props one of whic h is variant whose value we chose as outlined */}
            <Button type='submit' onClick={search} variant='outlined'>Google Search</Button>
            <Button variant='outlined'>I'm Feeling Lucky</Button>
        </div>
      ): (
        <div className='search__buttons'>
            {/* we are using matrial ui button here */}
            {/* material ui provides you with some props one of whic h is variant whose value we chose as outlined */}
            <Button className='search__buttonsHidden' type='submit' onClick={search} variant='outlined'>Google Search</Button>
            <Button className='search__buttonsHidden' variant='outlined'>I'm Feeling Lucky</Button>
        </div>
      )}
      
    </form>
  )
}


export default SearchBar
