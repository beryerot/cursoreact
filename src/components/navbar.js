import "./navbar.css"
import CartWidget from "./cartWidget"

const NavBar = () => {
    return <nav className="navBar">
        <ul>
            <li className="brand">Tienda de arte</li>
            <li><a href="#">Home</a></li>
            <li><a href="#">Productos</a></li>
            <li><a href="#">Servicios</a></li>
            <li><a href="#">Contacto</a></li>
            <li><CartWidget /></li>
        </ul>
    </nav>


};

export default NavBar