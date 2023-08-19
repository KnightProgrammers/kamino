// Registro.js
import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";
import styles from "@/styles/general.module.css";
import axios from "axios";
import { Staatliches } from "next/font/google";
import Link from "next/link";
import Head from "next/head";

export default function Registration() {
  const handleRegister = async (values) => {
    try {
      const response = await axios.post("http://localhost:3001/register", {
        email: values.email,
        password: values.password,
      });
      alert(response.data.msg);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  // Validacion de datos
  const validationsRegister = yup.object().shape({
    email: yup
      .string()
      .email("Email inválido")
      .required("Email es obligatorio"),
    password: yup
      .string()
      .min(8, "La contraseña debe tener al menos 8 caracteres")
      .required("La contraseña es obligatoria"),
    confirmation: yup
      .string()
      .oneOf([yup.ref("password"), null], "Las contraseñas no coinciden")
      .required("La confirmación de la contraseña es obligatoria"),
  });

  return (
    <>
      <Head>
        <title>Project-1</title>
      </Head>
      <Formik
        initialValues={{ email: "", password: "", confirmation: "" }}
        onSubmit={handleRegister}
        validationSchema={validationsRegister}
      >
        <div className={styles.container_register}>
          <div className={styles.form_register}>
            <div className={styles.form_title_register}>
              <h1>REGISTRO </h1>
            </div>
            <div>
              <Field type="text" name="email" placeholder="Email" />
              <ErrorMessage name="email" component="div" />
            </div>

            <div>
              <Field type="password" name="password" placeholder="Contraseña" />
              <ErrorMessage name="password" component="div" />
            </div>
            <div>
              <Field
                type="password"
                name="confirmation"
                placeholder="Confirmación de Contraseña"
              />
              <ErrorMessage name="confirmation" component="div" />
            </div>

            <button> Registrarse</button>
            <br />
            <Link href="/Login" className={styles.form_buttom_register}>
              Volver al inicio
            </Link>
          </div>
        </div>
      </Formik>
    </>
  );
}

