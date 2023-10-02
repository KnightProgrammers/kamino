import React from "react";
import { Inter, Staatliches } from "next/font/google";
import Link from "next/link";
import styles from "@/styles/general.module.css";


function NavWeb() {
  return (



    <div className={styles.nav}>

      <button>
        <Link href="/Home" >
          Inicio
        </Link>
      </button>

      <button>
        <Link href="/Load_Datas" >
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

export default NavWeb;
