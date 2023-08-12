import React, { useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import Home from "./Home";
import Link from "next/link";
import Profile from "./Profile";

import * as yup from "yup";

export default function Login() {
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
      const userData = {
        email,
        password,
      };
      localStorage.setItem("userData", JSON.stringify(userData));

      router.push("/Home"); // Utiliza `router.push` para redirigir al usuario a la página de inicio
    } catch (error) {
      // Maneja el error en caso de que la solicitud falle
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
      <button onClick={handleLogin}>Iniciar sesión</button>
      <button>
        <Link href="/Registration">Registro</Link>
      </button>
    </>
  );
}
