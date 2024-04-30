import { Link } from "react-router-dom";
import "../../public/styles/NavBar.css";
import ParticleBg from './ParticleBg';


const links = [
    {
        name: "Inicio",
        path: "/",
    },
    {
        name: "Nosotros",
        path: "/About",
    },
    {
        name: "Contactanos",
        path: "/Contact",
    },
    {
        name: "Unete",
        path: "/JoinUs",
    },
    {
        name: "Eventos",
        path: "/Events",
    }
];

const NavBar = () => {
    return (
        <div>
            <div className="navbar-container">
            <div className="logo"><img src="../../public/vite.svg" alt="logo" /></div>
            
                <nav className="navbar">
                    {links.map((link) => (
                        <Link className="nav-links jersey-25-regular" key={link.name} to={link.path}>
                            {link.name}
                        </Link>
                        ))}
                </nav>
                </div>
            <ParticleBg />
        </div>
    );
};

export default NavBar