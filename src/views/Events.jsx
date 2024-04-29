import styles from '../../public/styles/Events.module.css';

function Events() {
    return (
        <div id={styles.body}>
            <div id='main' className={styles.container}>
                <div className={styles.row}>
                    <section className={styles.thumbnails}>
                        <p>1</p>
                    </section>
                    <section className={styles.thumbnails}>
                        <p>2</p>
                    </section>
                    <section className={styles.thumbnails}>
                        <p>3</p>
                    </section>
                    <section className={styles.thumbnails}>
                        <p>4</p>
                    </section>
                </div>
                <div className={styles.row}>
                    <section className={styles.thumbnails}>
                        <p>1</p>
                    </section>
                    <section className={styles.thumbnails}>
                        <p>2</p>
                    </section>
                    <section className={styles.thumbnails}>
                        <p>3</p>
                    </section>
                    <section className={styles.thumbnails}>
                        <p>4</p>
                    </section>
                </div>
            </div>
        </div>
    );
}

export default Events;