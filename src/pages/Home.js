import React from 'react'
import './Home.css'
import { Link } from 'react-router-dom'
import AppsIcon from '@mui/icons-material/Apps'
import { Avatar } from '@mui/material'
import SearchBar from './components/SearchBar'



function Home() {
  return (
    <div>
      {/* <h1>This is homePage</h1> */}
      <div className='home___header'>
        <div className='home__headerLeft'>
          {/* link */}
          {/* we used a link tag and not a anchor tag(<a></a>) is because it will go to that page or link and refreshand we don't want the refresh. */}
          <Link to='/about'>About</Link>
          <Link to='/store'>Store</Link>
        </div>
        <div className='home__headerRight'>
          {/* link */}
          <Link to='/gmail'>Gmail</Link>
          <Link to='/images'>Images</Link>
          {/* icon */}
          <AppsIcon></AppsIcon>
          {/* avatar */}
          <Avatar></Avatar>
        </div>
      </div>
      <div className='home___body'>
        <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/800px-Google_2015_logo.svg.png' alt='google-logo'></img>
        <div className='home__inputContainer'>
          {/* We are creating the search bar as a component because we want to add it in search page also*/}
          <SearchBar></SearchBar>
        </div>
      </div>
    </div>
  )
}

export default Home
