import React, { useState } from "react"; 
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";


const API = process.env.REACT_APP_API_URL;

export default function PaintingNew() {
  const navigate = useNavigate();
  const [painting, setPainting] = useState({
    image:"",
    name: "",
    artist_name: "",
    is_painter_alive: false,
    painting_year: "",
    country_of_origin: "",
    price:"",

});

  const addPainting = (newPainting) => {
    axios
      .post(`${API}/paintings`, newPainting)
      .then((response) => {
        setPainting(response.data);
        navigate("/painting");
        window.location.reload();
      })
      .catch((e) => console.error(e));
  };


  const handleTextChange = (e) => {
    setPainting({ ...painting, [e.target.id]: e.target.value });
    console.log(e.target.value);
  };

  const handleCheckboxChange = () => {
    setPainting({ ...painting, is_painter_alive: !painting.is_painter_alive });
    console.log(painting);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(painting);
    addPainting(painting);
  };

  return (
    <div className="NewAll">
      <h1> Add New Painting </h1>
      <form onSubmit={handleSubmit}>
      <div className="form_items">
                <label htmlFor="img">Name:</label>
                <input
                    id="img"
                    value={painting.image}
                    type="url"
                    onChange={handleTextChange}
                    placeholder="Image"
                    required
                />
            </div>

          <div className="form_items">
                <label htmlFor="name">Name:</label>
                <input
                    id="name"
                    value={painting.name}
                    type="text"
                    onChange={handleTextChange}
                    placeholder="Name of painting"
                    required
                />
            </div>
            <div className="form_items">
                <label htmlFor="artist">Painter:</label>
                <textarea 
                    id="artist"
                    value={painting.artist_name}
                    type="text"
                    placeholder="Artist"
                    onChange={handleTextChange}
                    required
                />
            </div>
            <div className="form_items">
                <label htmlFor="art">Is The Aristist Alive</label>
                <input 
                    id="art"
                    type="checkbox"
                    onChange={handleCheckboxChange}
                    checked={painting.is_painter_alive}
                    required
                />
            </div>
            <div className="form_items">
                <label htmlFor="year">Painting Created :</label>
                <textarea 
                    id="year"
                    value={painting.painting_year}
                    type="text"
                    placeholder="year"
                    onChange={handleTextChange}
                    required
                />
            </div>
            <div className="form_items">
                <label htmlFor="country">Origin Country :</label>
                <textarea 
                    id="country"
                    value={painting.country_of_origin}
                    type="text"
                    placeholder="country"
                    onChange={handleTextChange}
                    required
                />
            </div>
            <div className="form_items">
                <label htmlFor="price">Price:</label>
                <textarea 
                    id="price"
                    value={painting.price}
                    type="text"
                    placeholder="price"
                    onChange={handleTextChange}
                    required
                />
            </div>
        <br />
        <div className="form_items buttons" >
          <input className="submit" type="submit" />
       
        <button className="new">
          <Link to="/games">Nevermind!</Link>
        </button>
        </div>
      </form>
    </div>
  );
}
