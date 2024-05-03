import { useForm } from 'react-hook-form';
import styles from '../../public/styles/JoinUs.module.css';
import { ageValidator } from '../js/validators';

function JoinUs() {

    const { register, handleSubmit, formState: { errors } } = useForm();

    return (
        <div id={styles.body}>
            <section className={styles.container}>
                <h1 className={styles.title}>UNETE</h1>
                <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et sequi excepturi tempore delectus autem voluptatibus, vel suscipit recusandae exercitationem aliquam reiciendis atque voluptates itaque? Aut optio sit quo esse magni?</p>
            </section>
            <section className={styles.main}>
                <img className={styles.imagen} src="https://cdnwordpresstest-f0ekdgevcngegudb.z01.azurefd.net/es/wp-content/uploads/2023/11/concierto-karol-g.jpg" alt="Imagen de prueba" />
                <section className={styles.form}>
                    <h3 className={styles.subTitle}>Haz parte de nosotros</h3>
                    <form onSubmit={handleSubmit((data) => console.log(data))}>
                        <section className={styles.inputsName}>
                            <section className={`${styles.inputs}  ${styles.labelFN}`}>
                                <label className={styles.label}>Nombre</label>
                                <input {...register("name", { required: true, minLength: 3, maxLength: 10 })} className={`${styles.inputN} ${styles.inputFN}`} type="text" autoComplete='off'/>
                                {errors.name?.type === "required" && <p className={styles.error}>Nombre requerido</p>}
                                {errors.name?.type === "minLength" && <p className={styles.error}>El nombre debe tener al menos 3 caracteres</p>}
                                {errors.name?.type === "maxLength" && <p className={styles.error}>El nombre debe tener como maximo 10 caracteres</p>}
                            </section>
                            <section className={styles.inputs}>
                                <label className={styles.label}>Apellido</label>
                                <input {...register("lastname", { required: true, minLength: 3, maxLength: 10 })} className={`${styles.inputN} ${styles.inputLN}`} type="text" autoComplete='off'/>
                                {errors.lastname?.type === "required" && <p className={styles.error}>Apellido requerido</p>}
                                {errors.lastname?.type === "minLength" && <p className={styles.error}>El apellido debe tener al menos 3 caracteres</p>}
                                {errors.lastname?.type === "maxLength" && <p className={styles.error}>El apellido debe tener como maximo 10 caracteres</p>}
                            </section>
                        </section>
                        <section className={styles.inputs}>
                            <label className={styles.label}>Edad</label>
                            <input {...register("age", { required: true, validate: ageValidator })} className={styles.input} type="number" autoComplete='off'/>
                            {errors.age?.type === "required" && <p className={styles.error}>Edad requerida</p>}
                            {errors.age?.type === "validate" && <p className={styles.error}>Edad invalida</p>}
                        </section>
                        <section className={styles.inputs}>
                            <label className={styles.label}>Numero</label>
                            <input {...register("phone", { required: true })} className={styles.input} type="number" autoComplete='off'/>
                            {errors.phone?.type === "required" && <p className={styles.error}>Numero de Celular requerido</p>}
                        </section>
                        <section className={styles.inputs}>
                            <label className={styles.label}>Email</label>
                            <input {...register("email", { required: true, pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i })} className={styles.input} type="email" autoComplete='off'/>
                            {errors.email?.type === "required" && <p className={styles.error}>Email requerido</p>}
                            {errors.email?.type === "pattern" && <p className={styles.error}>Email invalido</p>}
                        </section>
                        <section className={styles.inputs}>
                            <label className={styles.label}>Mensaje</label>
                            <input {...register("mensaje", { required: false })} className={`${styles.input} ${styles.inputM}`} type="text" autoComplete='off'/>
                        </section>
                        <section className={styles.inputs}>
                            <label className={styles.label}>Hoja de Vida</label>
                            <input {...register("file", { required: true })} className={`${styles.input} ${styles.inputCV}`} type="file"/>
                        </section>
                        <section className={styles.inputs}>
                            <button className={styles.button}>Enviar</button>
                        </section>
                    </form>
                </section>
            </section>
        </div>
    );
}

export default JoinUs;