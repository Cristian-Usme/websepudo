import styles from '../../public/styles/Events.module.css';
import Carousel from '../components/Carousel';

function Events() {
    const eventSlides = [
        {
            id: 1,
            artist: "BAD BUNNY",
            city: "Medellín",
            description: "Concierto en el estadio Atanasio Girardot",
            img: "https://img.freepik.com/foto-gratis/luz-brillante-escenario-ilumina-entusiastas-fanaticos-rock-generados-ia_188544-37983.jpg?size=626&ext=jpg&ga=GA1.1.1687694167.1714348800&semt=sph"
        },
        {
            id: 2,
            artist: "KAROL G",
            city: "Bogotá",
            description: "Presentación en el parque Simón Bolívar",
            img: "https://www.bbva.com/wp-content/uploads/2020/05/festival2.jpg"
        },
        {
            id: 3,
            artist: "DIOMEDES",
            city: "Ibiza",
            description: "Evento en la famosa discoteca Pacha",
            img: "https://redmas.com.co/__export/1712706938307/sites/redmas/img/2024/04/09/feid-nuevas-fechas-concierto.jpg_1841751969.jpg"
        },
        {
            id: 4,
            artist: "PESO PLUMA",
            city: "Madrid",
            description: "Concierto en el WiZink Center",
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3Ud7B6vVH31RZ_aC1XvR7brvkYrVfvdFV1MHVuV-kYHmlxLosydaVznh0J9QQj8OpWMw&usqp=CAU"
        }
    ];



    return (
        <div id={styles.body}>
            <h1 className={styles.title}>NUESTROS EVENTOS</h1>
            <Carousel slides={eventSlides} />
            <div className={styles.container}>
                {eventSlides.map(event => (
                    <div key={event.id} className={styles.event}>
                        <img className={styles.image} alt={event.artist} src={event.img} />
                        <div className={styles.info}>
                            <h2 className={styles.title}>{event.artist}</h2>
                            <h3 className={styles.city}>{event.city}</h3>
                            <p className={styles.description}>{event.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Events;
