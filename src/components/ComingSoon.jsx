import style from "../../public/styles/ComingSoon.module.css";

const ComingSoon = () => {
    return (
        <div className={style.container}>
            <div className={style.comingSoon}>
                <div className={style.overlay}>
                    <div className={style.left}>
                        <h2 className={style.subtitle}>
                            ¿Quieres ser parte <br />
                            de los próximos eventos?
                        </h2>
                    </div>
                    <div className={style.right}>
                        <button className={style.button} onClick={() => window.location.href = 'ruta-a-tu-destino'}>
                            Únete Ahora
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ComingSoon;
