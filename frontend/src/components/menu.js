import { useState } from "react"
import "./navbar.css"
import MenuIcon from '@mui/icons-material/Menu';
export const Navbar=()=> {
  const [isNavExpanded, setIsNavExpanded] = useState(false)

  return (
    <nav className="navigation ">
      <a href="/" className="brand-name " style={{color: 'white'}}>
        MacroSoft
      </a>
      <button
        className="hamburger"
        onClick={() => {
          setIsNavExpanded(!isNavExpanded)
        }}
      >
    <MenuIcon />
       
      </button>
      <div
        className={ isNavExpanded? "navigation-menu expanded menu" : "navigation-menu menu" 
        }
      >
        <ul className="menu " >
          <li>
            <a href="/admin" style={{color:"white"}}>Admin</a>
          </li>
          <li>
            <a href="/ticket" style={{color:"white"}}>Ticket</a>
          </li>
          <li>
            <a href="/contact" style={{color:"white"}}>Contact Us</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}