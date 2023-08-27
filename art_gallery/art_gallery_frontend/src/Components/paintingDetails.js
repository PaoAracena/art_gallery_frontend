import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import "../CSS/PaintingDetails.css"


const API = process.env.REACT_APP_API_URL;

export default function PaintingDetails() {
  const [painting, setPainting] = useState([]);
  let { index } = useParams();
  let navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`${API}/paintings/${index}`)
      .then((response) => {
        console.log(response.data);
        setPainting(response.data);
      })
      .catch(() => {
        navigate("/not-found");
      });
  }, [index, navigate]);

  const handleDelete = () => {
    axios
      .delete(`${API}/paintings/${painting.id}`)
      .then(() => {
        navigate("/paintings");
        window.location.reload();
      })
      .catch((e) => console.log(e));
  };

  return (
    <article className="details">
      <div className="mark">
        <h2><img src={painting.image} className="card-img-top" alt={`${painting.painting}`} /></h2>
        <h3>{painting.name}</h3>
        <h5> By:{painting.artist_name}</h5>
        <h5>
          {painting.is_painter_alive}
          {painting.is_painter_alive ? (
            <span> The painter is still active</span>
          ) : (
            <span>Painter is no longer alive </span>
          )}
        </h5>
        <h5>Painting Created:{painting.painting_year}</h5>
        <h5>Country Of Origin:{painting.country_of_origin}</h5>
        <h5>Price:{painting.price}</h5>
        <div className="showNav"></div>
      </div>

      <div >
        <Link to={`/paintings/`}>
          <button className="new">Back</button>
        </Link>
      </div>
      <div className="buttons" >
        <Link to={`/paintings/${index}/edit`}>
          <button className="new">Edit</button>
        </Link>
      </div>
      <div>
        <button className="new" onClick={handleDelete}>
          Delete
        </button>
      </div>
    </article>
  );
}
