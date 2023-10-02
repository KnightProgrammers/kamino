import React, { useEffect, useState } from "react";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import styles from "@/styles/general.module.css";
import Head from "next/head";
import { useRouter } from "next/router";

export default function Correlativitives() {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    // Obtiene los datos almacenados del estado local
    const storedData = localStorage.getItem("userData");
    if (storedData) {
      const parsedData = JSON.parse(storedData);
      setUserData(parsedData);
    }
  }, []);

  return (
    <div>
      {userData && (
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
          <h1>Perfil de usuario</h1>
          <p>Email: {userData.email}</p>
          <p>Contraseña: {userData.password}</p>
          {/*--------BODY----------- */}
          {/*--------FOOTER---------- */}
          <Footer />
          {/*--------FOOTER----------- */}
        </>
      )}
    </div>
  );
}
