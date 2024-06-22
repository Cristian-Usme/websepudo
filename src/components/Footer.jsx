import styles from '../../public/styles/Footer.module.css';

const Footer = () => {
    return (
        <div>
            <footer className={styles.footer}>
                <div className={styles.linksSocial}>
                    <img src="../../public/vite.svg" alt="" />
                    <div>
                        <h2>Enlaces</h2>
                        <a className={styles.lblA} href="/">Inicio</a>
                        <br />
                        <a className={styles.lblA} href="/Contact">Contactanos</a>
                        <br />
                        <a className={styles.lblA} href="/JoinUs">Unete</a>
                        <br />
                        <a className={styles.lblA} href="/Events">Eventos</a>
                    </div>
                    <div>
                        <h2>Contacto</h2>
                        <p className={styles.lblP}>555-555-5555</p>
                        <p className={styles.lblP}>Johndoe@doemail.com</p>
                        <p className={styles.lblP}>123 Main St, Anytown, COL</p>
                    </div>
                    <div className={styles.socialNetworks}>
                        <h2>Redes sociales</h2>
                        <a className={styles.lblA} href="https://www.instagram.com/" target="_blank"><i className="fa-brands fa-square-instagram"></i><span className={styles.lblSpan}>Instagram</span></a>
                        <a className={styles.lblA} href="https://www.linkedin.com/" target="_blank"><i className="fa-brands fa-linkedin"></i><span className={styles.lblSpan}>LinkedIn</span></a>
                        <a className={styles.lblA} href="https://www.facebook.com/" target="_blank"><i className="fa-brands fa-square-facebook"></i><span className={styles.lblSpan}>Facebook</span></a>
                        <a className={styles.lblA} href="https://twitter.com/" target="_blank"><i className="fa-brands fa-square-x-twitter"></i><span className={styles.lblSpan}>X</span></a>
                        <a className={styles.lblA} href="https://www.whatsapp.com/" target="_blank"><i className="fa-brands fa-square-whatsapp"></i><span className={styles.lblSpan}>WhatsApp</span></a>
                    </div>
                    <div>
                        <h2>Equipo de desarrollo</h2>
                        <img src="../../public/vite.svg" alt="" />
                    </div>
                </div>

                <div className={styles.right}>&copy; Todos los derechos reservados 2024</div>
            </footer>
        </div>
    );
};

export default Footer