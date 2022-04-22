import React, {useState, useEffect} from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {
  const [listings, setListing] = useState([])

  useEffect(() => {
    fetch("http://localhost:6001/listings")
    .then((res => res.json()))
    .then((data) => {
      // console.log(data)
      setListing(data)
    })
  },[])

  function handleDeleteItem(deleteLisitng){
    const updatedList = listings.filter((listing) => listing.id !== deleteLisitng)
    setListing(updatedList)
  }

  function handleListingSearch(item){
    const SearchedLisitng = listings.filter((listing) => {
      if (listing.description === item){
        return listing
      }
    })
    setListing(SearchedLisitng)
  }

  return (
    <div className="app">
      <Header handleSearch = {handleListingSearch}/>
      <ListingsContainer listingArr = {listings} onDelete = {handleDeleteItem}/>
    </div>
  );
}

export default App;
