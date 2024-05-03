// import React from "react";
import { useNavigate } from "react-router-dom";
import styles from '../../public/styles/About.module.css';

function About() {
    const navigate = useNavigate();
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
            <div className={styles.contenidoDos}>
                <section className={styles.sectionButton}>
                    <img className={styles.imagenSectionE} src="../../public/images/cartelCorrecto.png" alt="Events" />
                    <h1 className={styles.sectionContador}>+5000</h1>
                    <button onClick={() => navigate('/Events')} className={styles.sectionBotones}><h3>Eventos</h3></button>
                </section>
                <section className={styles.sectionButton}>
                    <img className={styles.imagenSection} src="../../public/images/joinUsWeb.svg" alt="JoinUs" />
                    <h1 className={styles.sectionContador}>+2000</h1>
                    <button onClick={() => navigate('/JoinUs')} className={styles.sectionBotones}><h3>Unete</h3></button>
                </section>
            </div>
        </div>
    );
}

export default About;