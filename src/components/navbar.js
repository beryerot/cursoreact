import "./navbar.css"
import logo from "./logo.png"

const NavBar = () => {
    return <nav>
        <ul>
            <li className="brand">Tienda de arte</li>
            <li><a href="#">Home</a></li>
            <li><a href="#">Productos</a></li>
            <li><a href="#">Servicios</a></li>
            <li><a href="#">Contacto</a></li>
            <li className="brand"><img src={logo} width="20" ></img></li>
        </ul>
    </nav>


};

export default NavBar