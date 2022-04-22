import React,{useState} from "react";

function Search({onSearch}) {
  const [searchItem, setSearchItem] = useState("")

  function handleSubmit(e) {
    e.preventDefault();
    const fomrData = searchItem;
    onSearch(fomrData)
    setSearchItem("")
    };

  function searchLisitng(e){
    setSearchItem(e.target.value)
  }

  return (
    <form className="searchbar" onSubmit={handleSubmit}>
      <input
        type="text"
        id="search"
        placeholder="search free stuff"
        value={searchItem}
        onChange={searchLisitng}
      />
      <button type="submit">🔍</button>
    </form>
  );
}

export default Search;
