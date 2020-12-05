// import React, { useEffect, useState, useRef } from "react";
import movieData from "../MovieData/movie-data.json"
import React, { useEffect, useState, useRef } from "react";
import {Link} from "react-router-dom"
import "./SearchBar.css";

const SearchBar = () => {
  const [display, setDisplay] = useState(false);
  const [options, setOptions] = useState([]);
  const [search, setSearch] = useState("");
  const wrapperRef = useRef(null);

  useEffect(() => {
    window.addEventListener("mousedown", handleClickOutside);
    return () => {
      window.removeEventListener("mousedown", handleClickOutside);
    };
  });
  const handleSearch = (e) => {
    const search = movieData.find(x => x.Title.toLowerCase() == e.target.value.toLowerCase())
    console.log(search)
  }

  const handleClickOutside = event => {
    const { current: wrap } = wrapperRef;
    if (wrap && !wrap.contains(event.target)) {
      setDisplay(false);
    }
  };

  const updatePokeDex = poke => {
    setSearch(poke);
    setDisplay(false);
  };

  return (
    <div ref={wrapperRef} className="flex-container flex-column pos-rel">

      <input
        id="auto"
        onClick={() => setDisplay(!display)}
        onChange={handleSearch}
        placeholder="Search for a movie you are looking for"
        value={search}
        onChange={event => setSearch(event.target.value)}
      />
      {display && (
        <div className="autoContainer" style={{ height: '200px', overflow: 'auto', width: '500px' }}>
            {/* {
                movieData.map(x => 
                <div className='d-flex flex-wrap justify-content-around'>
                    <p className="text-dark text-left">{x.Title}</p>
                <div><Link to='/'>Read more</Link></div>
                </div>

                    )
            } */}
          {movieData
          // .find(x => x.Title.toLowerCase() == search.toLowerCase())
            .map((value, i) => {
              return (
                <div
                  onClick={() => updatePokeDex(value.name)}
                  className="option"
                  key={i}
                  tabIndex="0"
                >
                  <span style={{ fontSize: '15px'}}>{value.Title}</span>
                  <img style={{width : '30px', height : '30px'}} src={value.Poster} alt="pokemon" />
                </div>
              );
            })}
        </div>
      )}
    </div>
  );
};

// function App() {
//   return (
//     <div className="search-bar">
//         <Auto />
//     </div>
//   );
// }

// export default App;


    export default SearchBar;
