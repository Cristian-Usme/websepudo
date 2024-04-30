import styles from '../../public/styles/Events.module.css';
import Slider from '../components/Slider';

function Events() {
    const slides = [
        {url: "https://img.freepik.com/foto-gratis/luz-brillante-escenario-ilumina-entusiastas-fanaticos-rock-generados-ia_188544-37983.jpg?size=626&ext=jpg&ga=GA1.1.1687694167.1714348800&semt=sph", title: "1"},
        {url: "https://www.bbva.com/wp-content/uploads/2020/05/festival2.jpg", title: "2"},
        {url: "https://cc-prod.scene7.com/is/image/CCProdAuthor/concert-photography_P1_900x420?$pjpeg$&jpegSize=200&wid=900", title: "3"},
        {url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3Ud7B6vVH31RZ_aC1XvR7brvkYrVfvdFV1MHVuV-kYHmlxLosydaVznh0J9QQj8OpWMw&usqp=CAU", title: "4"}
    ];
    return (
        <div id={styles.body}>
            <h1 className={styles.title}>NUESTROS EVENTOS</h1>
            <div id='main' className={styles.container}>
                <div className={styles.row}>
                    <section className={styles.thumbnails}>
                        <img className={styles.image} alt="1" src="https://img.freepik.com/foto-gratis/luz-brillante-escenario-ilumina-entusiastas-fanaticos-rock-generados-ia_188544-37983.jpg?size=626&ext=jpg&ga=GA1.1.1687694167.1714348800&semt=sph"/>
                        <h2 className={styles.title}>KAROL G</h2>
                        <h3 className={styles.city}>Medellín</h3>
                    </section>
                    <section className={styles.thumbnails}>
                        <img className={styles.image} alt="2" src="https://www.bbva.com/wp-content/uploads/2020/05/festival2.jpg"/>
                        <h2 className={styles.title}>BAD BUNNY</h2>
                        <h3 className={styles.city}>Bogotá</h3>
                    </section>
                    <section className={styles.thumbnails}>
                        <img className={styles.image} alt="3" src="https://cc-prod.scene7.com/is/image/CCProdAuthor/concert-photography_P1_900x420?$pjpeg$&jpegSize=200&wid=900"/>
                        <h2 className={styles.title}>DIOMEDES</h2>
                        <h3 className={styles.city}>Ibiza</h3>
                    </section>
                    <section className={styles.thumbnails}>
                        <img className={styles.image} alt="4" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3Ud7B6vVH31RZ_aC1XvR7brvkYrVfvdFV1MHVuV-kYHmlxLosydaVznh0J9QQj8OpWMw&usqp=CAU"/>
                        <h2 className={styles.title}>PESO PLUMA</h2>
                        <h3 className={styles.city}>Buenos Aires</h3>
                    </section>
                </div>
                <div className={styles.row}>
                    <section className={styles.thumbnails}>
                        <img className={styles.image} alt="1" src="https://img.freepik.com/foto-gratis/luz-brillante-escenario-ilumina-entusiastas-fanaticos-rock-generados-ia_188544-37983.jpg?size=626&ext=jpg&ga=GA1.1.1687694167.1714348800&semt=sph"/>
                        <h2 className={styles.title}>KAROL G</h2>
                        <h3 className={styles.city}>Medellín</h3>
                    </section>
                    <section className={styles.thumbnails}>
                        <img className={styles.image} alt="2" src="https://www.bbva.com/wp-content/uploads/2020/05/festival2.jpg"/>
                        <h2 className={styles.title}>KAROL G</h2>
                        <h3 className={styles.city}>Medellín</h3>
                    </section>
                    <section className={styles.thumbnails}>
                        <img className={styles.image} alt="3" src="https://cc-prod.scene7.com/is/image/CCProdAuthor/concert-photography_P1_900x420?$pjpeg$&jpegSize=200&wid=900"/>
                        <h2 className={styles.title}>KAROL G</h2>
                        <h3 className={styles.city}>Medellín</h3>
                    </section>
                    <section className={styles.thumbnails}>
                        <img className={styles.image} alt="4" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3Ud7B6vVH31RZ_aC1XvR7brvkYrVfvdFV1MHVuV-kYHmlxLosydaVznh0J9QQj8OpWMw&usqp=CAU"/>
                        <h2 className={styles.title}>KAROL G</h2>
                        <h3 className={styles.city}>Medellín</h3>
                    </section>
                </div>
            </div>
            <h1 className={styles.title}>GALERÍA</h1>
            <div className={styles.slider}>
                <Slider slides={slides} />
            </div>
        </div>
    );
}

export default Events;