import { useNavigate } from "react-router-dom";
import styles from "../../public/styles/Home.module.css";
import Slider from "../components/Slider";
import { dataSlide } from "../js/slidesData";
import ComingSoon from "../components/ComingSoon";

function Home() {
    const navigate = useNavigate();

    return (
        <div>
            <div id={styles.body}>
                <div className={styles.contenido}>
                    <div className={styles.container}>
                        <h1 className="titulo">Sobre nosotros</h1>
                        <p className="texto">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Vitae, omnis! Doloremque voluptates aliquid
                            eos quisquam con ficiis hic perspiciatis magnam
                            assumenda odio et nemo ratione, fuga at quam sint.
                            jsndjasndjnsajd Lorem ipsum dolor, sit amet
                            consectetur adipisicing elit. Rem aspernatur nisi,
                            accusantium quisquam est assumenda magni, quibusdam
                            sapiente natus cupiditate quidem architecto officia
                            quos ad, quod fugiat vitae amet delectus.
                        </p>
                    </div>
                    <img
                        className={styles.imagen}
                        src="https://cdnwordpresstest-f0ekdgevcngegudb.z01.azurefd.net/es/wp-content/uploads/2023/11/concierto-karol-g.jpg"
                        alt="Imagen de prueba"
                    />
                </div>
                <section className={styles.sectionSlider}>
                    <h1 className={styles.title}>NUESTRO EQUIPO DE TRABAJO</h1>
                    <div className={styles.slider}>
                        <Slider slides={dataSlide} />
                    </div>
                </section>
                <div className={styles.contenidoDos}>
                    <section>
                        <button
                            onClick={() => navigate("/Events")}
                            className={styles.borderButton}
                        >
                            <div className={styles.sectionButton}>
                                <img
                                    className={styles.imagenSectionE}
                                    src="../../public/images/cartelCorrecto.png"
                                    alt="Events"
                                />
                                <h1 className={styles.sectionContador}>
                                    +5000
                                </h1>
                                <div className={styles.sectionBotones}>
                                    <h3>Eventos</h3>
                                </div>
                            </div>
                        </button>
                    </section>
                    <section>
                        <button
                            onClick={() => navigate("/JoinUs")}
                            className={styles.borderButton}
                        >
                            <div className={styles.sectionButton}>
                                <img
                                    className={styles.imagenSection}
                                    src="../../public/images/joinUsWeb.svg"
                                    alt="JoinUs"
                                />
                                <h1 className={styles.sectionContador}>
                                    +2000
                                </h1>
                                <div className={styles.sectionBotones}>
                                    <h3>Únete</h3>
                                </div>
                            </div>
                        </button>
                    </section>
                </div>
                <h1 className={styles.title}>PRÓXIMOS EVENTOS</h1>
            </div>
            <div className={styles.contenidoTres}>
                <ComingSoon />
            </div>
        </div>
    );
}

export default Home;
