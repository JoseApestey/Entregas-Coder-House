import { NavLink, Link } from "react-router-dom";
import CartWidget from "../CartWidget/CartWidget";
import './NavBar.css';


const NavBar = () => {
    return (
        
        <nav className="navBar">
          <Link to='/'>
          <h3 className="nameNavBar">E-Commerce</h3>
          </Link>
           <div className="Categories">
             <NavLink to={`/category/Celular`} className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}>Celulares</NavLink>
             <NavLink to={`/category/Tablet`} className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}>Tablet</NavLink>
             <NavLink to={`/category/Notebook`} className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}>Notebooks</NavLink>
           </div>
          <div className="cart-container">
          <CartWidget />
          </div>
        </nav>
        
    )
}

export default NavBar