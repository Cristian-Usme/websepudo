import "../../public/styles/Footer.css";

const Footer = () => {
    return (
        <div>
            <footer className="footer">
                <div>
                    <p>¡Gracias por visitar nuestro sitio!</p>
                    <p>&copy; 2024 Mi Sitio Web</p>
                    <p>Contacto: 555-555-5555</p>
                    <p>Dirección: 123 Main St, Anytown, COL</p>
                    <a href="https://www.instagram.com/" target="_blank"><i className="fa-brands fa-square-instagram"></i></a>
                    <a href="https://www.linkedin.com/" target="_blank"><i className="fa-brands fa-linkedin"></i></a>
                    <a href="https://www.facebook.com/" target="_blank"><i className="fa-brands fa-square-facebook"></i></a>
                    <a href="https://twitter.com/" target="_blank"><i className="fa-brands fa-square-x-twitter"></i></a>
                    <a href="https://www.whatsapp.com/" target="_blank"><i className="fa-brands fa-square-whatsapp"></i></a>
                </div>
            </footer>
        </div>
    );
};

export default Footer