import "../CSS/SearchBar.css"
export default function SearchBar({searchPainting, handleSearchChange}) {

    return (
      <div>
          <div className="search-bar">
            <input
                type="text"
                className="Search"
                placeholder="Search for a painting..."
                value={searchPainting}
                onChange={handleSearchChange}
            />
          </div>
      </div>
    );
  }
