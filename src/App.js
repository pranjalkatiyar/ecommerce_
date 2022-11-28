import "./App.css";
import NavBar from "./Components/Navbar/Navbar";
import Card from "./Components/contactcard/Card";
import Journey from "./Components/Journey/Journey";
import Team from "./Components/Team/Team";
import Store from "./Components/Store/Store";
import Specific from "./Components/Store/specificProduct/Specific";
import {Routes,Route} from 'react-router-dom';
 import CartContext from "./Components/Context/Context";
function App() {
  return (
    
    <CartContext>
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Store/>} />
        <Route path="journey" element={<Journey/>} />
        <Route path="team" element={<Team/>} />
        <Route path="contact" element={<Card/>} />
        <Route path="product/:id" element={<Specific/>} />
      </Routes>
    </div>
    </CartContext>
    
  );
}

export default App;
