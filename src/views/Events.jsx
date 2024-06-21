import styles from '../../public/styles/Events.module.css';
import Carousel from '../components/Carousel';
import { eventSlides } from '../js/slidesData';

function Events() {
    



    return (
        <div id={styles.body}>
            <h1 className={styles.title}>NUESTROS EVENTOS</h1>
            <Carousel slides={eventSlides} />
            <div className={styles.container}>
                {eventSlides.map(event => (
                    <div key={event.id} className={styles.event}>
                        <img className={styles.image} alt={event.artist} src={event.img} />
                        <div className={styles.info}>
                            <h2 className={styles.title}>{event.conciert}</h2>
                            <section className={styles.nameAndCountry}>
                                <h2 className={styles.artist}>{event.artist} en </h2>
                                <h3 className={styles.city}>{event.city}</h3>
                            </section>
                            <p className={styles.description}>{event.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Events;
