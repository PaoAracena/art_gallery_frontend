import React, { useState } from "react"; 
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "../CSS/PaintingNew.css"

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
        navigate("/paintings");
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
                <label htmlFor="img">Image Url:</label>
                <input
                    id="image"
                    value={painting.image}
                    type="text"
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
                <input 
                    id="artist_name"
                    value={painting.artist_name}
                    type="text"
                    onChange={handleTextChange}
                    placeholder="Artist"
                    
                />
            </div>
            <div className="form_items">
                <label htmlFor="art">Is The Aristist Alive</label>
                <input 
                    id="is_painter_alive"
                    type="checkbox"
                    onChange={handleCheckboxChange}
                    checked={painting.is_painter_alive}
                    
                />
            </div>
            <div className="form_items">
                <label htmlFor="year">Painting Created :</label>
                <input 
                    id="painting_year"
                    value={painting.painting_year}
                    type="text"
                    placeholder="year"
                    onChange={handleTextChange}
                   
                />
            </div>
            <div className="form_items">
                <label htmlFor="country">Origin Country :</label>
                <input 
                    id="country_of_origin"
                    value={painting.country_of_origin}
                    type="text"
                    placeholder="country"
                    onChange={handleTextChange}
                    
                />
            </div>
            <div className="form_items">
                <label htmlFor="price">Price:</label>
                <input 
                    id="price"
                    value={painting.price}
                    type="text"
                    placeholder="price"
                    onChange={handleTextChange}
                   
                />
            </div>
        <br />
        <div className="form_items buttons" >
          <input className="submit" type="submit" />
       
        <button className="new">
          <Link to="/paintings">Nevermind!</Link>
        </button>
        </div>
      </form>
    </div>
  );
}
