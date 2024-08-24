import styles from '../../public/styles/Contact.module.css';
import InstagramIcon from '../../public/images/instagram.png';
import WhatsappIcon from '../../public/images/whatsapp.png';
import TwitterIcon from '../../public/images/twitter.png';
import FacebookIcon from '../../public/images/facebook.png';
import YoutubeIcon from '../../public/images/youtube.png';
import TelephoneIcon from '../../public/images/telephone.png';                      
function Contact() {
    return (
        <div id={styles.body}>
            <h1 className={styles.title}>CONTÁCTANOS</h1>
            <div className={styles.container}>
                <section className={styles.contactItems}>
                    <div className={styles.channels}>
                        <div className={styles.socialMedia}>
                            <h2 className={styles.sectionTitle}>Síguenos en Redes Sociales</h2>
                            <p className={styles.sectionDescription}>
                                Conéctate con nosotros a través de nuestras redes sociales para estar al día con las últimas noticias y actualizaciones.
                            </p>
                            <div className={styles.row}>
                                <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                                    <img src={InstagramIcon} alt="Instagram" className={styles.icon} />
                                    <p className={styles.linkText}>Instagram</p>
                                </a>
                            </div>
                            <div className={styles.row}>
                                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                                    <img src={TwitterIcon} alt="Twitter" className={styles.icon} />
                                    <p className={styles.linkText}>Twitter</p>
                                </a>
                            </div>
                            <div className={styles.row}>
                                <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className={styles.link}>
                                    <img src={FacebookIcon} alt="Facebook" className={styles.icon} />
                                    <p className={styles.linkText}>Facebook</p>
                                </a>
                            </div>
                            <div className={styles.row}>
                                <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
                                    <img src={YoutubeIcon} alt="YouTube" className={styles.icon} />
                                    <p className={styles.linkText}>YouTube</p>
                                </a>
                            </div>
                        </div>

                        <div className={styles.contactMethods}>
                            <h2 className={styles.sectionTitle}>Medios de Contacto</h2>
                            <p className={styles.sectionDescription}>
                                Contáctanos directamente a través de nuestros canales de comunicación para recibir asistencia personalizada.
                            </p>
                            <div className={styles.row}>
                                <a href="tel:+1234567890">
                                    <img src={TelephoneIcon} alt="Línea de atención" className={styles.icon} />
                                    <p className={styles.linkText}>Línea de atención</p>
                                </a>
                            </div>
                            <div className={styles.row}>
                                <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer">
                                    <img src={WhatsappIcon} alt="WhatsApp" className={styles.icon} />
                                    <p className={styles.linkText}>WhatsApp</p>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div>
                        <iframe className={styles.map} src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d247.88394663189965!2d-75.5896524!3d6.2448592!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e14618cd342b679%3A0xb3084e2d1d1ef7da!2sSmart%20Talent%20IT!5e0!3m2!1ses!2sus!4v1718166484556!5m2!1ses!2sus" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </section>
            </div>
        </div>
    );
}

export default Contact;
