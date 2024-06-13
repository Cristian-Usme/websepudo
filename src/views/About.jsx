// import React from "react";
import { useNavigate } from "react-router-dom";
import styles from '../../public/styles/About.module.css';
import Slider from '../components/Slider';

function About() {
    const navigate = useNavigate();

    const slides = [
        { url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJ2DpxEqyXpwMxLSlx1MVjuAQxoB58yOg-WA&s", title: "1" },
        { url: "https://www.semana.com/resizer/v2/3UI6J6DICVBUVBCRPOAT3IUEKY.jpg?auth=67839dd55ebe7ca8f92ca63dcbb8a866764a375b1ae9ea0515d00980f4536437&smart=true&quality=75&width=1280&fitfill=false", title: "2" },
        { url: "https://empresa.sumatec.co/wp-content/uploads/2019/10/portada-logistica-y-cadena-de-suministros-4-04.jpg", title: "3" },
        { url: "https://img.freepik.com/foto-gratis/hombres-casco-trabajando-logistico_23-2148886815.jpg", title: "4" }
    ];

    return (
        <div id={styles.body}>
            <div className={styles.contenido}>
                <div className={styles.container}>
                    <h1 className='titulo'>Sobre nosotros</h1>
                    <p className='texto'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, omnis! Doloremque voluptates aliquid eos quisquam con ficiis hic perspiciatis magnam assumenda odio et nemo ratione, fuga at quam sint.
                        jsndjasndjnsajd Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem aspernatur nisi, accusantium quisquam est assumenda magni, quibusdam sapiente natus cupiditate quidem architecto officia quos ad, quod fugiat vitae amet delectus.</p>
                </div>
                <img className={styles.imagen} src="https://cdnwordpresstest-f0ekdgevcngegudb.z01.azurefd.net/es/wp-content/uploads/2023/11/concierto-karol-g.jpg" alt="Imagen de prueba" />
            </div>
            <section className={styles.sectionSlider}>
                <h1 className={styles.title}>THE TEAMGAYS</h1>
                <div className={styles.slider}>
                    <Slider slides={slides} />
                </div>
            </section>
            <div className={styles.contenidoDos}>
                <section>
                    <button onClick={() => navigate('/Events')} className={styles.borderButton}>
                        <section className={styles.sectionButton}>
                            <img className={styles.imagenSectionE} src="../../public/images/cartelCorrecto.png" alt="Events" />
                            <h1 className={styles.sectionContador}>+5000</h1>
                            <button className={styles.sectionBotones}><h3>Eventos</h3></button>
                        </section>
                    </button>
                </section>
                <section>
                    <button onClick={() => navigate('/JoinUs')} className={styles.borderButton}>
                        <section className={styles.sectionButton}>
                            <img className={styles.imagenSection} src="../../public/images/joinUsWeb.svg" alt="JoinUs" />
                            <h1 className={styles.sectionContador}>+2000</h1>
                            <button className={styles.sectionBotones}><h3>Unete</h3></button>
                        </section>
                    </button>
                </section>

            </div>
        </div>
    );
}

export default About;