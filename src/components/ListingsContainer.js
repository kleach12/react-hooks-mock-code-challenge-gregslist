import React from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({listingArr,onDelete}) {
  // console.log(listingArr)

  const singleListing = listingArr.map((listing) => (
    <ListingCard 
    key = {listing.id} 
    id = {listing.id}
    image = {listing.image}
    description = {listing.description}
    location = {listing.location}
    deleteList = {onDelete}
    />

  ))
  // console.log(singleListing)
  return (
    <main>
      <ul className="cards">
        {singleListing}
      </ul>
    </main>
  );
}

export default ListingsContainer;
