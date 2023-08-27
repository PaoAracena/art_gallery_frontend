import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from "react";
import axios from "axios";

//COMPONENTS
import NavBar from './Components/NavBar';
import Paintings from './Components/paintings';

//PAGES
import Home from './Pages/Home';
import New from  './Pages/New';
// import Index from "./Pages/Index";
import Show from './Pages/Show';
import Edit from './Pages/Edit';
import FourOFour from './Pages/FourOFour';


//BASE URL
const API = process.env.REACT_APP_API_URL;
console.log(API)


function App() {
  const [paintings, setPaintings] = useState([]);

  useEffect(() => {
      axios.get(`${API}/paintings`)
      .then((response) => {
          // console.log(response);
          // console.log("this is the data")
          // console.log(response.data);
          setPaintings(response.data);

      })
      .catch((e) => console.error("catch", e));
  }, []);

  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/paintings" element={<Paintings paintings={paintings} />} />
          <Route path="/paintings/new" element={<New />} />
          <Route path='/paintings/:index' element={<Show />} />
          <Route path="/paintings/:index/edit" element={<Edit />} />
          <Route path="*" element={<FourOFour />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
