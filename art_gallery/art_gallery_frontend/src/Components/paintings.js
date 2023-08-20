import { Link } from "react-router-dom";
import {useState, useEffect} from "react";

//COMPONENTS
import SearchBar from "./SearchBar";

export default function Paintings ({paintings}) {
    const [searchPainting, setSearchPainting] = useState('');
    const [filteredPainting, setFilteredPainting] = useState([]);

  useEffect(() => {
    const filtered = paintings.filter(painting => 
        painting.name.toLowerCase().includes(searchPainting.toLocaleLowerCase())
    );
    setFilteredPainting(filtered);
}, [paintings, searchPainting]);

const handleSearchChange = (e) => {
  e.preventDefault();

  let typed = e.target.value;
  setSearchPainting(typed);
  typed = ''
}


    return (
        <div className="Painting">
            <div>
                <SearchBar 
                searchGame={searchPainting}
                handleSearchChange={handleSearchChange}
                setSearchGame={setSearchPainting}
                />
            </div>
            <section>
                {filteredPainting.length === 0 ? (
                            <div>
                                <p>
                                    Sorry, that painting has not been added. No worries, you can add it here:
                                </p>
                                <Link to="/paintings/new">Add Painting</Link>
                            </div>
                        ) : (
                <div className="table-container">
                    <table>
                        <thead>
                            <tr>
                                <th>Url</th>
                                <th>Name</th>
                                <th>Painter</th>
                                <th>Is Artist Alive</th>
                                <th>Painting Year</th>
                                <th>Origin Country</th>
                                <th>Price</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredPainting.map((painting, index) => {
                                return (
                                    <tr key={index}>
                                        <td> {painting.image}</td>
                                        <td>
                                            <Link to={`/paintings/${painting.id}`}>{painting.name}</Link>
                                        </td>
                                        <td>{painting.artist_name}</td>
                                        <td>
                                        {painting.is_painter_alive ? (
                                            <span>Painter is Alive</span>
                                        ): (
                                            <span>Painter Is Not Alive</span>
                                        )}
                                        </td>
                                        <td>{painting.country_of_origin}</td>
                                        <td style={{ textAlign: 'left' }}>{painting.price}</td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>
                )}
            </section>
        </div>
    );
}
