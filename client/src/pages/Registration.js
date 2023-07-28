// Registro.js
import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";
import axios from "axios";

export default function Registration() {
  const handleRegister = async (values) => {
    try {
      const response = await axios.post("http://localhost:3000/register", {
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
      <Formik
        initialValues={{ email: "", password: "", confirmation: "" }}
        onSubmit={handleRegister}
        validationSchema={validationsRegister}
      >
        <Form>
          <div>
            <h1>Registro</h1>
            <Field type="text" name="email" placeholder="Email" />
            <ErrorMessage name="email" component="div" />
            <br />
            <Field type="password" name="password" placeholder="Contraseña" />
            <ErrorMessage name="password" component="div" />
            <br />
            <Field
              type="password"
              name="confirmation"
              placeholder="Confirmación de Contraseña"
            />
            <ErrorMessage name="confirmation" component="div" />
            <br />
            <button type="submit">Registrar</button>
            <br />
          </div>
        </Form>
      </Formik>
    </>
  );
}
