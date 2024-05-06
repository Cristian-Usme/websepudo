import styles from '../../public/styles/Contact.module.css';

function Contact() {
    return (
        <div id={styles.body}>
            <h1 className={styles.title}>CONTÁCTANOS</h1>
            <div className={styles.container}>
               <section>
                    <img className={styles.image} src="https://static.vecteezy.com/system/resources/thumbnails/030/920/297/small/empty-concert-stage-in-the-light-of-spotlights-performance-photo.jpg" alt="concert" />
               </section>
               <div className={styles.contactItems}>
                    <div>
                        <iframe className={styles.boxes} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1225.80247804863!2d-75.60255933729061!3d6.255674551532123!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e44297396740ccb%3A0xdf2ebdea455df74c!2sParque%20de%20La%20Floresta!5e0!3m2!1ses!2sco!4v1714960382972!5m2!1ses!2sco" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                    <div className={styles.boxes}>
                        
                    </div>
                    <div className={styles.boxes}>
                        
                    </div>
               </div>
            </div>
        </div>
    );
}

export default Contact;