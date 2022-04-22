import React,{useState} from "react";

function ListingCard({image,description,location, id, deleteList}) {
  const [liked, setLiked] = useState(false)

  function handleClick(e){
    // console.log("clicked")
    setLiked((liked) => !liked)
  }

  function handleDelete(e){
    fetch(`http://localhost:6001/listings/${id}`,{
      method: "Delete",
    })
    .then((res)=> res.json())
    .then(() => {
      console.log("Deleted")
      deleteList(id)
    })

    // setListing(listings.filter((listing) => listing.id !== e.target.value))
  }


  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={image} alt={"description"} />
      </div>
      <div className="details">
        {liked ? (
          <button onClick = {handleClick} className="emoji-button favorite active">★</button>
        ) : (
          <button onClick = {handleClick}className="emoji-button favorite">☆</button>
        )}
        <strong>{description}</strong>
        <span> · {location}</span>
        <button onClick = {handleDelete} className="emoji-button delete" value = {id}>🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
