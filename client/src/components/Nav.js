import React from "react";
import { Inter, Staatliches } from "next/font/google";
import Link from "next/link";
import styles from "@/styles/Home.module.css";

function Browser() {
  return (
    <div className={styles.style3}>

      <button>
        <Link href="/Home" >
          Inicio
        </Link>
      </button>

      <button>
        <Link href="/Load_Dates" >
          Carga de Datos
        </Link>
      </button>

      <button>
        <Link href="/Correlatives">
          Correlatividades
        </Link>
      </button>

      <button>
        <Link href="/Profile">
          Perfil
        </Link>
      </button>
    </div>
  );
}

export default Browser;
