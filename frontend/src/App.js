
import "./main.css"
import {Navbar} from "./components"
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Ticket from "./Ticket"
import Admin from "./admin"
function App() {
  return (
    <BrowserRouter>
    <Navbar />
    <Routes>
        <Route path="/" element={<div>dfd</div>} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/ticket" element={<Ticket />} />
      </Routes>
  
      </BrowserRouter>
  
  );
}

export default App;
