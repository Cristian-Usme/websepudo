import { Link } from "react-router-dom";
import "../../public/styles/NavBar.css";

const links = [
    {
        name: "Home",
        path: "/",
    },
    {
        name: "About",
        path: "/About",
    },
    {
        name: "Contact",
        path: "/Contact",
    },
    {
        name: "JoinUs",
        path: "/JoinUs",
    },
    {
        name: "Events",
        path: "/Events",
    }
];

const NavBar = () => {
    return (
        <div>
            <nav className="navbar">
                {links.map((link) => (
                    <Link className="nav-links jersey-25-regular" key={link.name} to={link.path}>
                        {link.name}
                    </Link>
                ))}
            </nav>
        </div>
    );
};

export default NavBar