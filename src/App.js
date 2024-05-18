import './App.css';
import Home from './pages/Home';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import SearchPage from './pages/SearchPage';
//search engine id: 44aef32faadf84312

function App() {
  return (
    //BEM ----CHANGED APP IN CLASSNAME TO LOWERCASE
    <div className="app">
    {/* Router allows us to render certain components based on the route that we are in */}
      <Router>

        <Routes>
          <Route path='/search' element={<SearchPage></SearchPage>}>
          </Route>
          <Route path='/' element={<Home></Home>}>
          </Route>
        </Routes>


        {/* Home (the one with the search one) */}

        {/* SearchPage (the results page) */}
      </Router>
    </div>
  );
}

export default App;
