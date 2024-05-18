import React from 'react'
import './SearchPage.css'
import { useStateValue } from '../StateProvider'
import useGoogleSearch from '../useGoogleSearch'
import response from '../response'
import { Link } from 'react-router-dom'
import SearchBar from './components/SearchBar'
import SearchIcon from "@mui/icons-material/Search"
import DescriptionIcon from "@mui/icons-material/Description"
import ImageIcon from "@mui/icons-material/Image"
import LocalOfferIcon from "@mui/icons-material/LocalOffer"
import RoomIcon from "@mui/icons-material/Room"
import MoreVertIcon from "@mui/icons-material/MoreVert"


function SearchPage() {

    const [{term}, dispatch] = useStateValue()
    //when we'll search something then it will redirect us to this search page. then its going to push the searched content, lets say 'tesla',into the data layer. Once that is in the data layer you can see in the search page we pull it by using useStateValue. So now we have that search term and the we use our custiom hook that we created called useGoogleSearch, we pass that term and then we'll end up making a call ot the google custom search api and then we return the data as an object
    //LIVE API CALL
    const {data} = useGoogleSearch(term)

    //mock api call
    // const data = response

    console.log(data)

  return (
    <div className='searchPage'>
      <div className='searchPage__header'>
        <Link to='/'>
            <img className='searchPage__logo' src='https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/800px-Google_2015_logo.svg.png' alt='google-logo'></img>
        </Link>
        <div className='searchPage__headerBody'>
            <SearchBar hideButtons></SearchBar>
            <div className='searchPage__options'>
                <div className='searchPage__optionsLeft'>
                    <div className='searchPage__option'>
                        <SearchIcon></SearchIcon>
                        <Link to='/all'>All</Link>
                    </div>
                    <div className='searchPage__option'>
                        <DescriptionIcon></DescriptionIcon>
                        <Link to='/news'>News</Link>
                    </div>
                    <div className='searchPage__option'>
                        <ImageIcon></ImageIcon>
                        <Link to='/images'>Images</Link>
                    </div>
                    <div className='searchPage__option'>
                        <LocalOfferIcon></LocalOfferIcon>
                        <Link to='/shopping'>Shopping</Link>
                    </div>
                    <div className='searchPage__option'>
                        <RoomIcon></RoomIcon>
                        <Link to='/maps'>Maps</Link>
                    </div>
                    <div className='searchPage__option'>
                        <MoreVertIcon></MoreVertIcon>
                        <Link to='/more'>More</Link>
                    </div>
                </div>
                <div className='searchPage__optionsRight'>
                    <div className='searchPage__option'>
                        <Link to='/settings'>Settings</Link>
                    </div>
                    <div className='searchPage__option'>
                        <Link to='/tools'>Tools</Link>
                    </div>
                </div>
            </div>
        </div>
        
      </div>
      {term && (
        <div className='searchPage__results'>
            <p className='searchPage__resultCount'>About {data?.searchInformation.formattedTotalResults} result ({data?.searchInformation.formattedSearchTime} seconds) for {term}</p>

            {data?.items.map(item => (
                <div className='searchPage__result'>
                    <a href={item.link}>
                        <img className='searchPage__resultImage' src={item.pagemap?.cse_image?.length>0 && item.pagemap?.cse_image[0]?.src} alt=''></img>
                        {item.displayLink} ▽
                    </a>
                    <a href={item.link} className='searchPage__resultTitle'>
                        <h2>{item.title}</h2>
                    </a>
                    <p className='searchPage__resultSnippet'>{item.snippet}</p>
                </div>
            ))}
        </div>
      )}
    </div>
  )
}

export default SearchPage
