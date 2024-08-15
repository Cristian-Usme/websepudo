import React from "react";
import { useForm } from "react-hook-form";
import styles from "../../public/styles/JoinUs.module.css";
import { ageValidator } from "../js/validators";
import Swal from "sweetalert2";

function JoinUs() {
    const backend = "http://localhost:4040";

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm();

    const sendData = async (data) => {
        try {
            const fileInput = document.querySelector('input[type="file"]');
            const file = fileInput.files[0];

            // Validación adicional del tipo de archivo
            if (file.type !== "application/pdf") {
                Swal.fire("Error", "Solo se permiten archivos PDF", "error");
                return;
            }

            const formData = new FormData();
            formData.append("cv", file); // El archivo ya fue validado

            for (const key in data) {
                if (key !== "cv") {
                    formData.append(key, data[key]);
                }
            }

            const response = await fetch(backend + "/join", {
                method: "POST",
                body: formData,
            });

            if (response.status === 200) {
                // const result = await response.json();
                Swal.fire("Datos enviados exitosamente", "", "success");
            } else {
                Swal.fire("Error al procesar los datos", "", "error");
            }

            reset();
        } catch (error) {
            console.error("Error al enviar datos al backend:", error);
            Swal.fire("Error", "Hubo un problema al enviar los datos", "error");
        }
    };


    return (
        <div id={styles.body}>
            <section className={styles.container}>
                <h1 className={styles.title}>UNETE</h1>
                <p className={styles.text}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Et
                    sequi excepturi tempore delectus autem voluptatibus, vel
                    suscipit recusandae exercitationem aliquam reiciendis atque
                    voluptates itaque? Aut optio sit quo esse magni?
                </p>
            </section>
            <section className={styles.main}>
                <img
                    className={styles.imagen}
                    src="https://cdnwordpresstest-f0ekdgevcngegudb.z01.azurefd.net/es/wp-content/uploads/2023/11/concierto-karol-g.jpg"
                    alt="Imagen de prueba"
                />
                <section className={styles.form}>
                    <h3 className={styles.subTitle}>Haz parte de nosotros</h3>
                    <form onSubmit={handleSubmit(sendData)}>
                        <section className={styles.inputsName}>
                            <section
                                className={`${styles.inputs}  ${styles.labelFN}`}
                            >
                                <label className={styles.label}>Nombre</label>
                                <input
                                    {...register("name", {
                                        required: "Nombre requerido",
                                        minLength: {
                                            value: 3,
                                            message:
                                                "El nombre debe tener al menos 3 caracteres",
                                        },
                                        maxLength: {
                                            value: 10,
                                            message:
                                                "El nombre debe tener como máximo 10 caracteres",
                                        },
                                    })}
                                    className={`${styles.inputN} ${styles.inputFN}`}
                                    type="text"
                                    autoComplete="off"
                                />
                                {errors.name && (
                                    <p className={styles.error}>
                                        {errors.name.message}
                                    </p>
                                )}
                            </section>
                            <section className={styles.inputs}>
                                <label className={styles.label}>Apellido</label>
                                <input
                                    {...register("lastname", {
                                        required: "Apellido requerido",
                                        minLength: {
                                            value: 3,
                                            message:
                                                "El apellido debe tener al menos 3 caracteres",
                                        },
                                        maxLength: {
                                            value: 10,
                                            message:
                                                "El apellido debe tener como máximo 10 caracteres",
                                        },
                                    })}
                                    className={`${styles.inputN} ${styles.inputLN}`}
                                    type="text"
                                    autoComplete="off"
                                />
                                {errors.lastname && (
                                    <p className={styles.error}>
                                        {errors.lastname.message}
                                    </p>
                                )}
                            </section>
                        </section>
                        <section className={styles.inputs}>
                            <label className={styles.label}>Edad</label>
                            <input
                                {...register("age", {
                                    required: "Edad requerida",
                                    validate: ageValidator,
                                })}
                                className={styles.input}
                                type="number"
                                autoComplete="off"
                            />
                            {errors.age && (
                                <p className={styles.error}>
                                    {errors.age.message}
                                </p>
                            )}
                        </section>
                        <section className={styles.inputs}>
                            <label className={styles.label}>Número</label>
                            <input
                                {...register("phone", {
                                    required: "Número de celular requerido",
                                })}
                                className={styles.input}
                                type="number"
                                autoComplete="off"
                            />
                            {errors.phone && (
                                <p className={styles.error}>
                                    {errors.phone.message}
                                </p>
                            )}
                        </section>
                        <section className={styles.inputs}>
                            <label className={styles.label}>Email</label>
                            <input
                                {...register("email", {
                                    required: "Email requerido",
                                    pattern: {
                                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                        message: "Email inválido",
                                    },
                                })}
                                className={styles.input}
                                type="email"
                                autoComplete="off"
                            />
                            {errors.email && (
                                <p className={styles.error}>
                                    {errors.email.message}
                                </p>
                            )}
                        </section>
                        <section className={styles.inputs}>
                            <label className={styles.label}>Mensaje</label>
                            <input
                                {...register("message")}
                                className={`${styles.input} ${styles.inputM}`}
                                type="text"
                                autoComplete="off"
                            />
                        </section>
                        <section className={styles.inputs}>
                            <label className={styles.label}>Hoja de Vida</label>
                            <input
                                {...register("cv", {
                                    required: "Hoja de vida requerida",
                                    validate: {
                                        fileType: (files) => files[0]?.type === "application/pdf" || "Solo se permiten archivos PDF",
                                    }
                                })}
                                className={`${styles.input} ${styles.inputCV}`}
                                type="file"
                                accept=".pdf"
                            />

                            {errors.cv && (
                                <p className={styles.error}>
                                    {errors.cv.message}
                                </p>
                            )}
                        </section>
                        <section className={styles.inputs}>
                            <button className={styles.button} type="submit">
                                Enviar
                            </button>
                        </section>
                    </form>
                </section>
            </section>
        </div>
    );
}

export default JoinUs;
