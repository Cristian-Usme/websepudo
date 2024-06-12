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
                        <div className={styles.row}>
                            <img src={InstagramIcon} alt="logo" className={styles.icon} />
                            <h1>Instagram</h1>
                        </div>
                        <div className={styles.row}>
                            <img src={WhatsappIcon} alt="logo" className={styles.icon} />
                            <h1>WhatsApp</h1>
                        </div>
                        <div className={styles.row}>
                            <img src={TwitterIcon} alt="logo" className={styles.icon} />
                            <h1>Twitter</h1>
                        </div>
                        <div className={styles.row}>
                            <img src={FacebookIcon} alt="logo" className={styles.icon} />
                            <h1>Facebook</h1>
                        </div>
                        <div className={styles.row}>
                            <img src={YoutubeIcon} alt="logo" className={styles.icon} />
                            <h1>YouTube</h1>
                        </div>
                        <div className={styles.row}>
                            <img src={TelephoneIcon} alt="logo" className={styles.icon} />
                            <h1>Línea de atención</h1>
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