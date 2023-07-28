import React, { useState } from "react";
import Link from "next/link";
import Footer from "@/components/Footer";
import Nav from "@/components/Nav";
import styles from "@/styles/Home.module.css";
 import Head from "next/head";

function Load_Dates() {
  const [show, setShow] = useState();
  const [show2, setShow2] = useState(false);
  const [show3, setShow3] = useState(false);
  const [show4, setShow4] = useState(false);
  const [show5, setShow5] = useState(false);
  return (
    <>
      {/*--------HEAD----------- */}
      <Head>
        <title>Project-1</title>
      </Head>
      {/*--------HEAD----------- */}
      <div>{/*--------NAV----------- */}</div>
      <Nav />
      <div>{/*--------NAV----------- */}</div>
      <div>{/*--------BUTOONS YEARS----------- */}</div>
      <div className={styles.years}>
        <br />
        <br />
        <br />

        <button className={styles.text2} onClick={() => setShow(!show)}>
          Primer Año
        </button>
        <button className={styles.text2} onClick={() => setShow2(!show2)}>
          Segundo Año
        </button>
        <button className={styles.text2} onClick={() => setShow3(!show3)}>
          Tercer Año
        </button>
        <button className={styles.text2} onClick={() => setShow4(!show4)}>
          Cuarto Año
        </button>
        <button className={styles.text2} onClick={() => setShow5(!show5)}>
          Quinto Año
        </button>
      </div>
      <div>{/*--------BUTOONS YEARS----------- */}</div>
      <div>{/*--------YEARS----------- */}</div>
      <div>
        <div>{/*--------FIRST YEAR---------- */}</div>
        {show ? (
          <form>
            <div>
              <div>
                <br />
                <h3 align="center"> PRIMER AÑO</h3>
              </div>
              {/*-------- FIRTS TERN ---------- */}
              <div>
                <h3> Primer Cuatrimestre </h3>
                <br />
              </div>
              <div>
                <div>{/*--------MATHEMATICAL ANALYSIS---------- */}</div>
                <fieldset>
                  <h4> Análisis Matemático I </h4>
                  <input
                    type="radio"
                    id="approved"
                    name="mathematical_analysis1 "
                    value="approved"
                  />
                  <label for="approved">Aprobada </label>

                  <input
                    type="radio"
                    id="regularized "
                    name="mathematical_analysis1 "
                    value="regularized"
                  />
                  <label for="regularized"> Regularizada </label>

                  <input
                    type="radio"
                    id="disapproved "
                    name="mathematical_analysis1 "
                    value="disapproved"
                  />
                  <label for="disapproved"> Desaporbada </label>

                  <input
                    type="radio"
                    id="currently "
                    name="mathematical_analysis1 "
                    value="currently"
                  />
                  <label for="currently"> Cursando </label>

                  <input
                    type="radio"
                    id="not_currently "
                    name="mathematical_analysis1 "
                    value="not_currently"
                    defaultChecked
                  />
                  <label for="not_currently"> No cursada </label>
                </fieldset>
                <br />
                <div>{/*--------MATHEMATICAL ANALYSIS---------- */}</div>
                {/*--------Algebra and Analytical Geometry---------- */}
                <div>
                  <fieldset>
                    <h4>Algebra y Geometria Analitica </h4>
                    <input
                      type="radio"
                      id="approved"
                      name="Algebra "
                      value="approved"
                    />
                    <label for="approved">Aprobada </label>

                    <input
                      type="radio"
                      id="regularized "
                      name="Algebra "
                      value="regularized"
                    />
                    <label for="regularized"> Regularizada </label>

                    <input
                      type="radio"
                      id="disapproved "
                      name=" Algebra"
                      value="disapproved"
                    />
                    <label for="disapproved"> Desaporbada </label>

                    <input
                      type="radio"
                      id="currently "
                      name="Algebra "
                      value="currently"
                    />
                    <label for="currently"> Cursando </label>

                    <input
                      type="radio"
                      id="not_currently "
                      name=" Algebra"
                      value="not_currently"
                      defaultChecked
                    />
                    <label for="not_currently"> No cursada </label>
                  </fieldset>
                  <br />
                </div>
                {/*--------Algebra and Analytical Geometry---------- */}
                {/*--------Lógica y Estructura de discreta t---------- */}
                <div>
                  <fieldset>
                    <h4> Lógica y estructura de discreta</h4>
                    <input
                      type="radio"
                      id="approved"
                      name="Discrete"
                      value="approved"
                    />
                    <label for="approved">Aprobada </label>

                    <input
                      type="radio"
                      id="regularized "
                      name="Discrete"
                      value="regularized"
                    />
                    <label for="regularized"> Regularizada </label>

                    <input
                      type="radio"
                      id="disapproved "
                      name="Discrete"
                      value="disapproved"
                    />
                    <label for="disapproved"> Desaporbada </label>

                    <input
                      type="radio"
                      id="currently "
                      name="Discrete"
                      value="currently"
                    />
                    <label for="currently"> Cursando </label>

                    <input
                      type="radio"
                      id="not_currently "
                      name="Discrete"
                      value="not_currently"
                      defaultChecked
                    />
                    <label for="not_currently"> No cursada </label>
                  </fieldset>
                  <br />
                </div>
                <div>{/*--------Logic and Discrete Structure---------- */}</div>
              </div>
              {/*-------- SECOND TERN ---------- */}
              <div>
                <br />
                <h3> Segundo Cuatrimestre </h3>
                <br />
              </div>
              <div>
                {/*-------- English 1---------- */}
                <fieldset>
                  <h4>Inglés I </h4>
                  <input
                    type="radio"
                    id="approved"
                    name="English1"
                    value="approved"
                  />
                  <label for="approved">Aprobada </label>

                  <input
                    type="radio"
                    id="regularized "
                    name="English1"
                    value="regularized"
                  />
                  <label for="regularized"> Regularizada </label>

                  <input
                    type="radio"
                    id="disapproved "
                    name="English1"
                    value="disapproved"
                  />
                  <label for="disapproved"> Desaporbada </label>

                  <input
                    type="radio"
                    id="currently "
                    name="English1"
                    value="currently"
                  />
                  <label for="currently"> Cursando </label>

                  <input
                    type="radio"
                    id="not_currently "
                    name="English1"
                    value="not_currently"
                    defaultChecked
                  />
                  <label for="not_currently"> No cursada </label>
                </fieldset>
                <br />
                {/*-------- English 1---------- */}
                {/*-------- Physics I---------- */}
                <fieldset>
                  <h4>Física I </h4>
                  <input
                    type="radio"
                    id="approved"
                    name="Physics1 "
                    value="approved"
                  />
                  <label for="approved">Aprobada </label>

                  <input
                    type="radio"
                    id="regularized "
                    name="Physics1 "
                    value="regularized"
                  />
                  <label for="regularized"> Regularizada </label>

                  <input
                    type="radio"
                    id="disapproved "
                    name="Physics1 "
                    value="disapproved"
                  />
                  <label for="disapproved"> Desaporbada </label>

                  <input
                    type="radio"
                    id="currently "
                    name="Physics1 "
                    value="currently"
                  />
                  <label for="currently"> Cursando </label>

                  <input
                    type="radio"
                    id="not_currently "
                    name="Physics1 "
                    value="not_currently"
                    defaultChecked
                  />
                  <label for="not_currently"> No cursada </label>
                </fieldset>
                <br />
                {/*-------- Physics I---------- */}
                {/*-------- Algorithm and Data Structure---------- */}
                <div>
                  {/*-------- Algorithm and Data Structure---------- */}
                </div>
                <fieldset>
                  <h4>Algoritmo y Estructura de Datos </h4>
                  <input
                    type="radio"
                    id="approved"
                    name="Algorithm "
                    value="approved"
                  />
                  <label for="approved">Aprobada </label>

                  <input
                    type="radio"
                    id="regularized "
                    name="Algorithm"
                    value="regularized"
                  />
                  <label for="regularized"> Regularizada </label>

                  <input
                    type="radio"
                    id="disapproved "
                    name="Algorithm "
                    value="disapproved"
                  />
                  <label for="disapproved"> Desaporbada </label>

                  <input
                    type="radio"
                    id="currently "
                    name="Algorithm"
                    value="currently"
                  />
                  <label for="currently"> Cursando </label>

                  <input
                    type="radio"
                    id="not_currently "
                    name="Algorithm "
                    value="not_currently"
                    defaultChecked
                  />
                  <label for="not_currently"> No cursada </label>
                </fieldset>
                <br />
                {/*-------- Algorithm and Data Structure---------- */}
                {/*-------- computer architecture---------- */}
                <fieldset>
                  <h4>Arquitectura de computadoras </h4>
                  <input
                    type="radio"
                    id="approved"
                    name=" architecture "
                    value="approved"
                  />
                  <label for="approved">Aprobada </label>

                  <input
                    type="radio"
                    id="regularized "
                    name=" architecture "
                    value="regularized"
                  />
                  <label for="regularized"> Regularizada </label>

                  <input
                    type="radio"
                    id="disapproved "
                    name=" architecture "
                    value="disapproved"
                  />
                  <label for="disapproved"> Desaporbada </label>

                  <input
                    type="radio"
                    id="currently "
                    name=" architecture "
                    value="currently"
                  />
                  <label for="currently"> Cursando </label>

                  <input
                    type="radio"
                    id="not_currently "
                    name=" architecture "
                    value="not_currently"
                    defaultChecked
                  />
                  <label for="not_currently"> No cursada </label>
                </fieldset>
                <br />
                {/*-------- computer architecture---------- */}
                <div>
                  <br />
                  <h3> Anual </h3>
                  <br />
                </div>
                {/*-------- System and business processes---------- */}
                <fieldset>
                  <h4>Sistema y procesos de negocio </h4>
                  <input
                    type="radio"
                    id="approved"
                    name="System_business "
                    value="approved"
                  />
                  <label for="approved">Aprobada </label>

                  <input
                    type="radio"
                    id="regularized "
                    name="System_business "
                    value="regularized"
                  />
                  <label for="regularized"> Regularizada </label>

                  <input
                    type="radio"
                    id="disapproved "
                    name="System_business "
                    value="disapproved"
                  />
                  <label for="disapproved"> Desaporbada </label>

                  <input
                    type="radio"
                    id="currently "
                    name="System_business "
                    value="currently"
                  />
                  <label for="currently"> Cursando </label>

                  <input
                    type="radio"
                    id="not_currently "
                    name="System_business "
                    value="not_currently"
                    defaultChecked
                  />
                  <label for="not_currently"> No cursada </label>
                </fieldset>
                <br />
                <div>
                  {/*-------- System and business processes---------- */}
                </div>
              </div>
            </div>
            <button className={styles.text2} type="sumit">
              ENVIAR
            </button>
          </form>
        ) : null}
        <div>{/*--------FIRST YEAR---------- */}</div>
        <div>{/*--------SECOND YEAR---------- */}</div>
        {show2 ? (
          <form>
            <div>
              <br />
              <h3 align="center"> SEGUNDO AÑO</h3>
              <br />
              <h3> Primer Cuatrimestre </h3>
              <br />
              <div>{/*--------MATHEMATICAL ANALYSIS II---------- */}</div>
              <fieldset>
                <h4>Analisis Matemático II </h4>
                <input
                  type="radio"
                  id="approved"
                  name="mathematical_analysis2"
                  value="approved"
                />
                <label for="approved">Aprobada </label>

                <input
                  type="radio"
                  id="regularized "
                  name="mathematical_analysis2"
                  value="regularized"
                />
                <label for="regularized"> Regularizada </label>

                <input
                  type="radio"
                  id="disapproved "
                  name="mathematical_analysis2"
                  value="disapproved"
                />
                <label for="disapproved"> Desaporbada </label>

                <input
                  type="radio"
                  id="currently "
                  name="mathematical_analysis2"
                  value="currently"
                />
                <label for="currently"> Cursando </label>

                <input
                  type="radio"
                  id="not_currently "
                  name="mathematical_analysis2"
                  value="not_currently"
                  defaultChecked
                />
                <label for="not_currently"> No cursada </label>
              </fieldset>
              <br />
              <div>{/*--------MATHEMATICAL ANALYSIS II---------- */}</div>
              <div>{/*--------Engineering and Society---------- */}</div>
              <fieldset>
                <h4>Ingeniería y Sociedad </h4>
                <input
                  type="radio"
                  id="approved"
                  name="Engineering_Society"
                  value="approved"
                />
                <label for="approved">Aprobada </label>

                <input
                  type="radio"
                  id="regularized "
                  name="Engineering_Society"
                  value="regularized"
                />
                <label for="regularized"> Regularizada </label>

                <input
                  type="radio"
                  id="disapproved "
                  name="Engineering_Society"
                  value="disapproved"
                />
                <label for="disapproved"> Desaporbada </label>

                <input
                  type="radio"
                  id="currently "
                  name="Engineering_Society"
                  value="currently"
                />
                <label for="currently"> Cursando </label>

                <input
                  type="radio"
                  id="not_currently "
                  name="Engineering_Society"
                  value="not_currently"
                  defaultChecked
                />
                <label for="not_currently"> No cursada </label>
              </fieldset>
              <br />
              <div>{/*--------Engineering and Society---------- */}</div>
              <div>
                {/*--------Syntax and Semantics of Languages---------- */}
              </div>
              <fieldset>
                <h4> Sintaxis y Semántica de los Lenguajes </h4>
                <input
                  type="radio"
                  id="approved"
                  name="Syntax_Semantics"
                  value="approved"
                />
                <label for="approved">Aprobada </label>

                <input
                  type="radio"
                  id="regularized "
                  name="Syntax_Semantics"
                  value="regularized"
                />
                <label for="regularized"> Regularizada </label>

                <input
                  type="radio"
                  id="disapproved "
                  name="Syntax_Semantics"
                  value="disapproved"
                />
                <label for="disapproved"> Desaporbada </label>

                <input
                  type="radio"
                  id="currently "
                  name="Syntax_Semantics"
                  value="currently"
                />
                <label for="currently"> Cursando </label>

                <input
                  type="radio"
                  id="not_currently "
                  name="Syntax_Semantics"
                  value="not_currently"
                  defaultChecked
                />
                <label for="not_currently"> No cursada </label>
              </fieldset>
              <br />
              <div>
                {/*--------Syntax and Semantics of Languages---------- */}
              </div>
              <h3> Segundo Cuatrimestre </h3>
              <br />
              <div>{/*--------English II---------- */}</div>
              <fieldset>
                <h4>Inglés II </h4>
                <input
                  type="radio"
                  id="approved"
                  name="English2"
                  value="approved"
                />
                <label for="approved">Aprobada </label>

                <input
                  type="radio"
                  id="regularized "
                  name="English2"
                  value="regularized"
                />
                <label for="regularized"> Regularizada </label>

                <input
                  type="radio"
                  id="disapproved "
                  name="English2"
                  value="disapproved"
                />
                <label for="disapproved"> Desaporbada </label>

                <input
                  type="radio"
                  id="currently "
                  name="English2"
                  value="currently"
                />
                <label for="currently"> Cursando </label>

                <input
                  type="radio"
                  id="not_currently "
                  name="English2"
                  value="not_currently"
                  defaultChecked
                />
                <label for="not_currently"> No cursada </label>
              </fieldset>
              <br />
              <div>{/*--------English II---------- */}</div>
              <div>{/*-------- Physics II---------- */}</div>
              <fieldset>
                <h4>Física II </h4>
                <input
                  type="radio"
                  id="approved"
                  name="Física2"
                  value="approved"
                />
                <label for="approved">Aprobada </label>

                <input
                  type="radio"
                  id="regularized "
                  name="Física2"
                  value="regularized"
                />
                <label for="regularized"> Regularizada </label>

                <input
                  type="radio"
                  id="disapproved "
                  name="Física2"
                  value="disapproved"
                />
                <label for="disapproved"> Desaporbada </label>

                <input
                  type="radio"
                  id="currently "
                  name="Física2"
                  value="currently"
                />
                <label for="currently"> Cursando </label>

                <input
                  type="radio"
                  id="not_currently "
                  name="Física2"
                  value="not_currently"
                  defaultChecked
                />
                <label for="not_currently"> No cursada </label>
              </fieldset>
              <br />
              <div>{/*-------- Physics II---------- */}</div>
              <div>{/*-------- Physics II---------- */}</div>

              <div>{/*--------Programming Paradigms---------- */}</div>
              <fieldset>
                <h4> Paradigmas de Programación </h4>
                <input
                  type="radio"
                  id="approved"
                  name="Paradigms"
                  value="approved"
                />
                <label for="approved">Aprobada </label>

                <input
                  type="radio"
                  id="regularized "
                  name="Paradigms"
                  value="regularized"
                />
                <label for="regularized"> Regularizada </label>

                <input
                  type="radio"
                  id="disapproved "
                  name="Paradigms"
                  value="disapproved"
                />
                <label for="disapproved"> Desaporbada </label>

                <input
                  type="radio"
                  id="currently "
                  name="Paradigms"
                  value="currently"
                />
                <label for="currently"> Cursando </label>

                <input
                  type="radio"
                  id="not_currently "
                  name="Paradigms"
                  value="not_currently"
                  defaultChecked
                />
                <label for="not_currently"> No cursada </label>
              </fieldset>
              <div>{/*--------Programming Paradigms---------- */}</div>
              <br />
              <div>{/*--------Operative Sistems---------- */}</div>
              <fieldset>
                <h4>Sistemas Operativos </h4>
                <input
                  type="radio"
                  id="approved"
                  name="Operative_Sistems"
                  value="approved"
                />
                <label for="approved">Aprobada </label>

                <input
                  type="radio"
                  id="regularized "
                  name="Operative_Sistems"
                  value="regularized"
                />
                <label for="regularized"> Regularizada </label>

                <input
                  type="radio"
                  id="disapproved "
                  name="Operative_Sistems"
                  value="disapproved"
                />
                <label for="disapproved"> Desaporbada </label>

                <input
                  type="radio"
                  id="currently "
                  name="Operative_Sistems"
                  value="currently"
                />
                <label for="currently"> Cursando </label>

                <input
                  type="radio"
                  id="not_currently "
                  name="Operative_Sistems"
                  value="not_currently"
                  defaultChecked
                />
                <label for="not_currently"> No cursada </label>
              </fieldset>
              <br />
              {/*--------Operative Sistems---------- */}
              <div>
                <br />
                <h3> Anual </h3>
                <br />
              </div>
              <div>
                {/*--------Information System Analysis---------- */}
                <fieldset>
                  <h4> Análisis de Sistema de Información </h4>
                  <input type="radio" id="approved" name=" " value="approved" />
                  <label for="approved">Aprobada </label>

                  <input
                    type="radio"
                    id="regularized "
                    name=" "
                    value="regularized"
                  />
                  <label for="regularized"> Regularizada </label>

                  <input
                    type="radio"
                    id="disapproved "
                    name=" "
                    value="disapproved"
                  />
                  <label for="disapproved"> Desaporbada </label>

                  <input
                    type="radio"
                    id="currently "
                    name=" "
                    value="currently"
                  />
                  <label for="currently"> Cursando </label>

                  <input
                    type="radio"
                    id="not_currently "
                    name=" "
                    value="not_currently"
                    defaultChecked
                  />

                  <label for="not_currently"> No cursada </label>
                </fieldset>
                {/*--------Information System Analysis---------- */}
              </div>
            </div>
            <br />
            <button className={styles.text2} type="sumit">
              ENVIAR
            </button>
          </form>
        ) : null}
        <div>{/*--------SECOND YEAR---------- */}</div>
        <div>{/*--------TRID YEAR---------- */}</div>
        {show3 ? (
          <form>
            <div>
              <br />
              <h3 align="center"> TERCER AÑO </h3>
              <br />
              <h3> Primer Cuatrimestre </h3>
              <br />
              <div>{/*--------Probability and statistics---------- */}</div>
              <fieldset>
                <h4>Probabilidad y Estadistica </h4>
                <input
                  type="radio"
                  id="approved"
                  name="statistics"
                  value="approved"
                />
                <label for="approved">Aprobada </label>

                <input
                  type="radio"
                  id="regularized "
                  name="statistics"
                  value="regularized"
                />
                <label for="regularized"> Regularizada </label>

                <input
                  type="radio"
                  id="disapproved "
                  name="statistics"
                  value="disapproved"
                />
                <label for="disapproved"> Desaporbada </label>

                <input
                  type="radio"
                  id="currently "
                  name="statistics"
                  value="currently"
                />
                <label for="currently"> Cursando </label>

                <input
                  type="radio"
                  id="not_currently "
                  name="statistics"
                  value="not_currently"
                  defaultChecked
                />
                <label for="not_currently"> No cursada </label>
              </fieldset>
              <br />
              <div>{/*--------Probability and statistics---------- */}</div>
              <div>{/*--------Economy---------- */}</div>
              <fieldset>
                <h4>Economía </h4>
                <input
                  type="radio"
                  id="approved"
                  name="Economy "
                  value="approved"
                />
                <label for="approved">Aprobada </label>

                <input
                  type="radio"
                  id="regularized "
                  name="Economy "
                  value="regularized"
                />
                <label for="regularized"> Regularizada </label>

                <input
                  type="radio"
                  id="disapproved "
                  name="Engineering_Society "
                  value="disapproved"
                />
                <label for="disapproved"> Desaporbada </label>

                <input
                  type="radio"
                  id="currently "
                  name="Economy "
                  value="currently"
                />
                <label for="currently"> Cursando </label>

                <input
                  type="radio"
                  id="not_currently "
                  name="Economy "
                  value="not_currently"
                  defaultChecked
                />
                <label for="not_currently"> No cursada </label>
              </fieldset>
              <br />
              <div>{/*--------Economy---------- */}</div>
              <div>{/*--------Databases---------- */}</div>
              <fieldset>
                <h4> Bases de Datos </h4>
                <input
                  type="radio"
                  id="approved"
                  name="Databases"
                  value="approved"
                />
                <label for="approved">Aprobada </label>

                <input
                  type="radio"
                  id="regularized "
                  name="Databases"
                  value="regularized"
                />
                <label for="regularized"> Regularizada </label>

                <input
                  type="radio"
                  id="disapproved "
                  name="Databases"
                  value="disapproved"
                />
                <label for="disapproved"> Desaporbada </label>

                <input
                  type="radio"
                  id="currently "
                  name="Databases"
                  value="currently"
                />
                <label for="currently"> Cursando </label>

                <input
                  type="radio"
                  id="not_currently "
                  name="Databases"
                  value="not_currently"
                  defaultChecked
                />
                <label for="not_currently"> No cursada </label>
              </fieldset>
              <br />
              <div>
                <div>{/*--------Databases---------- */}</div>
              </div>
              <div>{/*--------Data Communication---------- */}</div>
              <fieldset>
                <h4>Comunicación de Datos</h4>
                <input
                  type="radio"
                  id="approved"
                  name="Communication-"
                  value="approved"
                />
                <label for="approved">Aprobada </label>

                <input
                  type="radio"
                  id="regularized "
                  name="Communication-"
                  value="regularized"
                />
                <label for="regularized"> Regularizada </label>

                <input
                  type="radio"
                  id="disapproved "
                  name="Communication-"
                  value="disapproved"
                />
                <label for="disapproved"> Desaporbada </label>

                <input
                  type="radio"
                  id="currently "
                  name="Communication-"
                  value="currently"
                />
                <label for="currently"> Cursando </label>

                <input
                  type="radio"
                  id="not_currently "
                  name="Communication-"
                  value="not_currently"
                  defaultChecked
                />
                <label for="not_currently"> No cursada </label>
              </fieldset>
              <br />
              <div>{/*--------Data Communication---------- */}</div>
              <h3> Segundo Cuatrimestre </h3>
              <br />
              <div>{/*--------Software development---------- */}</div>
              <fieldset>
                <h4>Desarrollo de Software </h4>
                <input
                  type="radio"
                  id="approved"
                  name="Software_development"
                  value="approved"
                />
                <label for="approved">Aprobada </label>

                <input
                  type="radio"
                  id="regularized "
                  name="Software_development"
                  value="regularized"
                />
                <label for="regularized"> Regularizada </label>

                <input
                  type="radio"
                  id="disapproved "
                  name="Física2"
                  value="disapproved"
                />
                <label for="disapproved"> Desaporbada </label>

                <input
                  type="radio"
                  id="currently "
                  name="Software_development"
                  value="currently"
                />
                <label for="currently"> Cursando </label>

                <input
                  type="radio"
                  id="not_currently "
                  name="Software_development"
                  value="not_currently"
                  defaultChecked
                />
                <label for="not_currently"> No cursada </label>
              </fieldset>
              <br />
              <div>{/*--------Software development---------- */}</div>
              <div>{/*-------- Physics II---------- */}</div>

              <div>{/*--------Numerical analysis---------- */}</div>
              <fieldset>
                <h4>Análisis Numérico </h4>
                <input
                  type="radio"
                  id="approved"
                  name="-Numerical_analysis "
                  value="approved"
                />
                <label for="approved">Aprobada </label>

                <input
                  type="radio"
                  id="regularized "
                  name="-Numerical_analysis "
                  value="regularized"
                />
                <label for="regularized"> Regularizada </label>

                <input
                  type="radio"
                  id="disapproved "
                  name="-Numerical_analysis "
                  value="disapproved"
                />
                <label for="disapproved"> Desaporbada </label>

                <input
                  type="radio"
                  id="currently "
                  name="-Numerical_analysis "
                  value="currently"
                />
                <label for="currently"> Cursando </label>

                <input
                  type="radio"
                  id="not_currently "
                  name="-Numerical_analysis "
                  value="not_currently"
                  defaultChecked
                />
                <label for="not_currently"> No cursada </label>
              </fieldset>
              <div>{/*--------Numerical analysis---------- */}</div>
              <br />
              <h3> Anual </h3>
              <br />
              <div>{/*--------Design of information systems---------- */}</div>
              <fieldset>
                <h4>Diseño de Sistemas de Información </h4>
                <br />
                <input
                  type="radio"
                  id="approved"
                  name="Design_systems"
                  value="approved"
                />
                <label for="approved">Aprobada </label>

                <input
                  type="radio"
                  id="regularized "
                  name="Design_systems"
                  value="regularized"
                />
                <label for="regularized"> Regularizada </label>

                <input
                  type="radio"
                  id="disapproved "
                  name="Design_systems"
                  value="disapproved"
                />
                <label for="disapproved"> Desaporbada </label>

                <input
                  type="radio"
                  id="currently "
                  name="Design_systems"
                  value="currently"
                />
                <label for="currently"> Cursando </label>

                <input
                  type="radio"
                  id="not_currently "
                  name="Design_systems"
                  value="not_currently"
                  defaultChecked
                />
                <label for="not_currently"> No cursada </label>
              </fieldset>
              <br />
              <div>{/*--------Design of information systems---------- */}</div>
            </div>
            <button className={styles.text2} type="sumit">
              ENVIAR
            </button>
          </form>
        ) : null}
        <div>{/*--------TRID YEAR---------- */}</div>
        <div>{/*--------FOURTH YEAR---------- */}</div>
        {show4 ? (
          <form>
            <div>
              <br />
              <h3 align="center"> CUARTO AÑO</h3>
              <br />
              <div>
                <br />
                <h3> Primer Cuatrimestre </h3>
                <br />
              </div>
              <div>{/*--------Legislation---------- */}</div>
              <fieldset>
                <h4>Legislación</h4>
                <input
                  type="radio"
                  id="approved"
                  name="Legislation"
                  value="approved"
                />
                <label for="approved">Aprobada </label>

                <input
                  type="radio"
                  id="regularized "
                  name="Legislation"
                  value="regularized"
                />
                <label for="regularized"> Regularizada </label>

                <input
                  type="radio"
                  id="disapproved "
                  name="Legislation"
                  value="disapproved"
                />
                <label for="disapproved"> Desaporbada </label>

                <input
                  type="radio"
                  id="currently "
                  name="Legislation"
                  value="currently"
                />
                <label for="currently"> Cursando </label>

                <input
                  type="radio"
                  id="not_currently "
                  name="Legislation"
                  value="not_currently"
                  defaultChecked
                />
                <label for="not_currently"> No cursada </label>
              </fieldset>
              <br />
              <div>{/*--------Legislation---------- */}</div>
              <div>{/*--------Operative investigation---------- */}</div>
              <fieldset>
                <h4>Investigación Operativa </h4>
                <input
                  type="radio"
                  id="approved"
                  name="Operative_investigation"
                  value="approved"
                />
                <label for="approved">Aprobada </label>

                <input
                  type="radio"
                  id="regularized "
                  name="Operative_investigation"
                  value="regularized"
                />
                <label for="regularized"> Regularizada </label>

                <input
                  type="radio"
                  id="disapproved "
                  name="Operative_investigation"
                  value="disapproved"
                />
                <label for="disapproved"> Desaporbada </label>

                <input
                  type="radio"
                  id="currently "
                  name="Operative_investigation"
                  value="currently"
                />
                <label for="currently"> Cursando </label>

                <input
                  type="radio"
                  id="not_currently "
                  name="Operative_investigation"
                  value="not_currently"
                  defaultChecked
                />
                <label for="not_currently"> No cursada </label>
              </fieldset>
              <br />
              <div>{/*--------Operative investigation---------- */}</div>
              <div>{/*--------Simulation---------- */}</div>
              <fieldset>
                <h4> Simulación </h4>
                <input
                  type="radio"
                  id="approved"
                  name="Simulation"
                  value="approved"
                />
                <label for="approved">Aprobada </label>

                <input
                  type="radio"
                  id="regularized "
                  name="Simulation"
                  value="regularized"
                />
                <label for="regularized"> Regularizada </label>

                <input
                  type="radio"
                  id="disapproved "
                  name="Simulation"
                  value="disapproved"
                />
                <label for="disapproved"> Desaporbada </label>

                <input
                  type="radio"
                  id="currently "
                  name="Simulation"
                  value="currently"
                />
                <label for="currently"> Cursando </label>

                <input
                  type="radio"
                  id="not_currently "
                  name="Simulation"
                  value="not_currently"
                  defaultChecked
                />
                <label for="not_currently"> No cursada </label>
              </fieldset>
              <br />
              <div>{/*--------Simulation---------- */}</div>
              <div>
                <br />
                <h3> Segundo Cuatrimestre </h3>
                <br />
              </div>
              <div>{/*-------- Data network---------- */}</div>
              <fieldset>
                <h4>Redes de Datos </h4>
                <input
                  type="radio"
                  id="approved"
                  name="Data_network"
                  value="approved"
                />
                <label for="approved">Aprobada </label>

                <input
                  type="radio"
                  id="regularized "
                  name="Data_network"
                  value="regularized"
                />
                <label for="regularized"> Regularizada </label>

                <input
                  type="radio"
                  id="disapproved "
                  name="Data_network"
                  value="disapproved"
                />
                <label for="disapproved"> Desaporbada </label>

                <input
                  type="radio"
                  id="currently "
                  name="Data_network"
                  value="currently"
                />
                <label for="currently"> Cursando </label>

                <input
                  type="radio"
                  id="not_currently "
                  name="Data_network"
                  value="not_currently"
                  defaultChecked
                />
                <label for="not_currently"> No cursada </label>
              </fieldset>
              <br />
              {/*-------- Data network---------- */}
              {/*--------Technologies for authentication---------- */}
              <fieldset>
                <h4> Tecnologías para la Autenticación </h4>
                <input
                  type="radio"
                  id="approved"
                  name="Technologies_ authentication"
                  value="approved"
                />
                <label for="approved">Aprobada </label>

                <input
                  type="radio"
                  id="regularized "
                  name="Technologies_ authentication"
                  value="regularized"
                />
                <label for="regularized"> Regularizada </label>

                <input
                  type="radio"
                  id="disapproved "
                  name="Technologies_ authentication"
                  value="disapproved"
                />
                <label for="disapproved"> Desaporbada </label>

                <input
                  type="radio"
                  id="currently "
                  name="Technologies_ authentication"
                  value="currently"
                />
                <label for="currently"> Cursando </label>

                <input
                  type="radio"
                  id="not_currently "
                  name="Technologies_ authentication"
                  value="not_currently"
                  defaultChecked
                />
                <label for="not_currently"> No cursada </label>
              </fieldset>
              <br />
              {/*--------Technologies for authentication---------- */}
              <div>
                <div>
                  <br />
                  <h3> Anual </h3>
                  <br />
                </div>
                <div>
                  {/*--------Engineering and Software Quality---------- */}
                  <fieldset>
                    <h4>Ingeniería y Calidad de Software</h4>
                    <input
                      type="radio"
                      id="approved"
                      name="Software_Quality"
                      value="approved"
                    />
                    <label for="approved">Aprobada </label>

                    <input
                      type="radio"
                      id="regularized "
                      name="Software_Quality"
                      value="regularized"
                    />
                    <label for="regularized"> Regularizada </label>

                    <input
                      type="radio"
                      id="disapproved "
                      name="Software_Quality"
                      value="disapproved"
                    />
                    <label for="disapproved"> Desaporbada </label>

                    <input
                      type="radio"
                      id="currently "
                      name="Software_Quality"
                      value="currently"
                    />
                    <label for="currently"> Cursando </label>

                    <input
                      type="radio"
                      id="not_currently "
                      name="Software_Quality"
                      value="not_currently"
                      defaultChecked
                    />
                    <label for="not_currently"> No cursada </label>
                  </fieldset>
                  <br />
                  {/*--------Engineering and Software Quality---------- */}
                  {/*--------Information Systems Administration--------- */}
                  <fieldset>
                    <h4> Administración de Sistemas de Información </h4>
                    <input
                      type="radio"
                      id="approved"
                      name="Systems_Administratio"
                      value="approved"
                    />
                    <label for="approved">Aprobada </label>

                    <input
                      type="radio"
                      id="regularized "
                      name="Systems_Administratio"
                      value="regularized"
                    />
                    <label for="regularized"> Regularizada </label>

                    <input
                      type="radio"
                      id="disapproved "
                      name="Systems_Administratio"
                      value="disapproved"
                    />
                    <label for="disapproved"> Desaporbada </label>

                    <input
                      type="radio"
                      id="currently "
                      name="Systems_Administratio"
                      value="currently"
                    />
                    <label for="currently"> Cursando </label>

                    <input
                      type="radio"
                      id="not_currently "
                      name="Systems_Administratio"
                      value="not_currently"
                      defaultChecked
                    />
                    <label for="not_currently"> No cursada </label>
                  </fieldset>
                  {/*--------Information Systems Administration--------- */}
                </div>
              </div>
            </div>
            <button className={styles.text2} type="sumit">
              <br />
              ENVIAR
            </button>
          </form>
        ) : null}
        <div>{/*--------FOURTH YEAR---------- */}</div>
        <div>{/*--------FIFTH YEAR---------- */}</div>
        {show5 ? (
          <form>
            <div>
              <br />
              <h3 align="center"> QUINTO AÑO</h3>
              <br />
              <div>
                <br />
                <h3> Primer Cuatrimestre </h3>
                <br />
              </div>
              <div>
                {/*--------Artificial_intelligence---------- */}
                <fieldset>
                  <h4>Inteligencia Artificial</h4>
                  <input
                    type="radio"
                    id="approved"
                    name="Artificial_intelligence"
                    value="approved"
                  />
                  <label for="approved">Aprobada </label>

                  <input
                    type="radio"
                    id="regularized "
                    name="Artificial_intelligence"
                    value="regularized"
                  />
                  <label for="regularized"> Regularizada </label>

                  <input
                    type="radio"
                    id="disapproved "
                    name="Artificial_intelligence"
                    value="disapproved"
                  />
                  <label for="disapproved"> Desaporbada </label>

                  <input
                    type="radio"
                    id="currently "
                    name="Artificial_intelligence"
                    value="currently"
                  />
                  <label for="currently"> Cursando </label>

                  <input
                    type="radio"
                    id="not_currently "
                    name="Artificial_intelligence"
                    value="not_currently"
                    defaultChecked
                  />
                  <label for="not_currently"> No cursada </label>
                </fieldset>
                <br />
                {/*--------Artificial_intelligence---------- */}
                {/*--------Management Management---------- */}
                <fieldset>
                  <h4>Gestión Gerencia </h4>
                  <input
                    type="radio"
                    id="approved"
                    name="Management"
                    value="approved"
                  />
                  <label for="approved">Aprobada </label>

                  <input
                    type="radio"
                    id="regularized "
                    name="Management"
                    value="regularized"
                  />
                  <label for="regularized"> Regularizada </label>

                  <input
                    type="radio"
                    id="disapproved "
                    name="Management"
                    value="disapproved"
                  />
                  <label for="disapproved"> Desaporbada </label>

                  <input
                    type="radio"
                    id="currently "
                    name="Management"
                    value="currently"
                  />
                  <label for="currently"> Cursando </label>

                  <input
                    type="radio"
                    id="not_currently "
                    name="Management"
                    value="not_currently"
                    defaultChecked
                  />
                  <label for="not_currently"> No cursada </label>
                </fieldset>
                <br />
                {/*--------Management Management---------- */}
                {/*--------Management systems---------- */}
                <fieldset>
                  <h4> Sistemas de Gestión </h4>
                  <input
                    type="radio"
                    id="approved"
                    name="Management_systems"
                    value="approved"
                  />
                  <label for="approved">Aprobada </label>

                  <input
                    type="radio"
                    id="regularized "
                    name="Management_systems"
                    value="regularized"
                  />
                  <label for="regularized"> Regularizada </label>

                  <input
                    type="radio"
                    id="disapproved "
                    name="Management_systems"
                    value="disapproved"
                  />
                  <label for="disapproved"> Desaporbada </label>

                  <input
                    type="radio"
                    id="currently "
                    name="Management_systems"
                    value="currently"
                  />
                  <label for="currently"> Cursando </label>

                  <input
                    type="radio"
                    id="not_currently "
                    name="Management_systems"
                    value="not_currently"
                    defaultChecked
                  />
                  <label for="not_currently"> No cursada </label>
                </fieldset>
                <br />
                {/*--------Management systems---------- */}
              </div>
              <div>
                <div>
                  <br />
                  <h3> Segundo Cuatrimestre </h3>
                  <br />
                </div>
                {/*--------Data Science---------- */}
                <fieldset>
                  <h4>Ciencias de Datos </h4>
                  <input
                    type="radio"
                    id="approved"
                    name="Data_Science"
                    value="approved"
                  />
                  <label for="approved">Aprobada </label>

                  <input
                    type="radio"
                    id="regularized "
                    name="Data_Science"
                    value="regularized"
                  />
                  <label for="regularized"> Regularizada </label>

                  <input
                    type="radio"
                    id="disapproved "
                    name="Data_Science"
                    value="disapproved"
                  />
                  <label for="disapproved"> Desaporbada </label>

                  <input
                    type="radio"
                    id="currently "
                    name="Data_Science"
                    value="currently"
                  />
                  <label for="currently"> Cursando </label>

                  <input
                    type="radio"
                    id="not_currently "
                    name="Data_Science"
                    value="not_currently"
                    defaultChecked
                  />
                  <label for="not_currently"> No cursada </label>
                </fieldset>
                <br />
                {/*--------Engineering and Software Quality---------- */}
                {/*--------Security in Information Systems---------- */}
                <fieldset>
                  <h4>Seguridad en los Sistemas de Información </h4>
                  <input
                    type="radio"
                    id="approved"
                    name="Security"
                    value="approved"
                  />
                  <label for="approved">Aprobada </label>

                  <input
                    type="radio"
                    id="regularized "
                    name="Security"
                    value="regularized"
                  />
                  <label for="regularized"> Regularizada </label>

                  <input
                    type="radio"
                    id="disapproved "
                    name="Security"
                    value="disapproved"
                  />
                  <label for="disapproved"> Desaporbada </label>

                  <input
                    type="radio"
                    id="currently "
                    name="Security"
                    value="currently"
                  />
                  <label for="currently"> Cursando </label>

                  <input
                    type="radio"
                    id="not_currently "
                    name="Security"
                    value="not_currently"
                    defaultChecked
                  />
                  <label for="not_currently"> No cursada </label>
                </fieldset>
                <br />
                {/*--------Security in Information Systems---------- */}
              </div>
              <div>
                <div>
                  <br />
                  <h3> Anual </h3>
                  <br />
                </div>
                {/*--------Final project--------- */}
                <fieldset>
                  <h4> Proyecto Final </h4>
                  <input
                    type="radio"
                    id="approved"
                    name="Final project"
                    value="approved"
                  />
                  <label for="approved">Aprobada </label>

                  <input
                    type="radio"
                    id="regularized "
                    name="Final project"
                    value="regularized"
                  />
                  <label for="regularized"> Regularizada </label>

                  <input
                    type="radio"
                    id="disapproved "
                    name="Final project"
                    value="disapproved"
                  />
                  <label for="disapproved"> Desaporbada </label>

                  <input
                    type="radio"
                    id="currently "
                    name="Final project"
                    value="currently"
                  />
                  <label for="currently"> Cursando </label>

                  <input
                    type="radio"
                    id="not_currently "
                    name="Final project"
                    value="not_currently"
                    defaultChecked
                  />
                  <label for="not_currently"> No cursada </label>
                </fieldset>
                {/*--------Final project--------- */}
              </div>
            </div>
            <br />
            <button className={styles.text2} type="sumit">
              ENVIAR
            </button>
          </form>
        ) : null}
        <div>{/*--------FIFRTH YEAR---------- */}</div>
      </div>
      <div>{/*--------YEARS----------- */}</div>

      <div className={styles.style5}>
        {/*--------FOOTER---------- */}
        <Footer />
        {/*--------FOOTER----------- */}
      </div>
    </>
  );
}

export default Load_Dates;
