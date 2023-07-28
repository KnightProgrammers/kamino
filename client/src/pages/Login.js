import React, { useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import Home from "./Home";
import Profile from "./Profile";

import * as yup from "yup";


export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleLogin = async () => {
    try {
      const response = await axios.post("http://localhost:3000", {
        email,
        password,
      });
      // Maneja la respuesta del servidor
      console.log(response.data);
      const userData = {
        email,
        password,
      };
      localStorage.setItem("userData", JSON.stringify(userData));

      router.push("/Home"); 

    } catch (error) {

      console.log(error);
    }
    
  };



  return (
    <>
      <h1>Iniciar sesión</h1>
      <input
        type="text"
        placeholder="Correo electrónico"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <br />
      <input
        type="password"
        placeholder="Contraseña"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <br />
      <button type="submit" onClick={handleLogin}>
        Iniciar sesión
      </button>

      

    </>
  );
}
