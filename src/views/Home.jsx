import styles from '../../public/styles/Home.module.css';

function Home() {
    return (
        <div id={styles.body}> 
        <div className={styles.container}>
            <h1 className='texto'>Tú eres como marica pero en Home</h1>
        </div>
        </div>
    );
}

export default Home;