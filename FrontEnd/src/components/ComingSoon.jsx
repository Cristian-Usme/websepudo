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
                        <button className={style.button} 
                        onClick={() => window.open('https://www.google.com/intl/en-GB/forms/about/', '_blank')}>
                            Únete Ahora
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ComingSoon;
