import React, { useState } from "react";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import styles from "@/styles/general.module.css";
import Head from "next/head";
import axios from "axios";
import { useRouter } from "next/router";


export default function Home() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleLogin = async () => {
    try {
      const response = await axios.post("http://localhost:3001/login", {
        email,
        password,
      });
      // Maneja la respuesta del servidor
      console.log(response.data);
      router.push("/Home"); // Utiliza `router.push` para redirigir al usuario a la página de inicio
    } catch (error) {
      // Maneja el error en caso de que la solicitud falle
      console.log(error);
    }
  };

  return (
    <>
      {/*--------HEAD----------- */}
      <Head>
        <title>Project-1</title>
      </Head>
      {/*--------HEAD----------- */}

      {/*--------NAV----------- */}
      <Nav />
      {/*--------NAV----------- */}
      {/*--------BODY----------- */}
      <div className={styles.text_title_home}>
        <h1> Bienvenido </h1>
      </div>
      {/*--------BODY----------- */}
      {/*--------FOOTER---------- */}
      <Footer />
      {/*--------FOOTER----------- */}
    </>
  );
}
