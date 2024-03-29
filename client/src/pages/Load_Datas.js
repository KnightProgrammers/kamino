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

  const firstYear = {
    firstSemester: [
      {
        key: 1,
        name: "Analisis Matemático I",

      },
      {
        key: 2,
        name: "Algebra y Geometría Analítica",
      },
      {
        key: 3,
        name: "Lógica y Estructura de discreta ",
      },
    ],
    secondSemester: [
      {
        key: 4,
        name: "Inglés I",
      },
      {
        key: 5,
        name: "Física I",
      },
      {
        key: 6,
        name: "Algoritmo y Estructura de Datos",
      },
      {
        key: 7,
        name: "Arquitectura de computadorass",
      },
      {
        key: 8,
        name: "Sistema y procesos de negocio",
      },
    ],
  };
const secondYear = {
  firstSemester: [
    {
      key: 9,
      name: "Analisis Matemático II",
    },
    {
      key: 10,
      name: "Ingeniería y Sociedad",
    },
    {
      key: 11,
      name: "Sintaxis y Semántica de los Lenguajes ",
    },
    {
      key: 12,
      name: "Física I",
    },
  ],
  secondSemester: [
    {
      key: 13,
      name: "Inglés II",
    },

    {
      key: 14,
      name: "Física II",
    },
    {
      key: 15,
      name: "Paradigmas de Programación ",
    },
    {
      key: 16,
      name: "Sistemas Operativo",
    },
  ],
};

  for (let i = 0; i < firstYear.firstSemester.length; i++) {
    const subject = firstYear.firstSemester[i];
  }
  for (const firstYearKey in firstYear) {
    const semester = firstYear[firstYearKey];
    for (const subject of semester) {
    }
  }

  const SUBJECT_STATUS = [
    {
      key: "approved",
      label: "Aprobado",
    },
    {
      key: "regularized",
      label: "Regularizada",
    },
    {
      key: "inprogress",
      label: "Cursando",
    },
    {
      key: "notInprogress",
      label: "No cursada",
    },

    {
      key: "free",
      label: "Libre",
    },
  ];


  function getSubjectStatus(subject) {
    const options = [];
    for (const subjectStatus of SUBJECT_STATUS) {
      options.push(
        <option value={subjectStatus.key}>{subjectStatus.label}</option>
      );
    }
    return (
      <select id={`${subject.id}`} name={`${subject.id}`}>
        {options}
      </select>
    );
  }

  const Semester = ({ semester }) => {
    const result = [];
    for (const subject of semester) {
      const subjectStatus = getSubjectStatus(subject);

      const subjectHTML = (
        <fieldset>
          <h4> {subject.name} </h4>
          {subjectStatus}
        </fieldset>
      );

      result.push(subjectHTML);
    }
    return result;
  };

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
        <br />
        <button className={styles.text} onClick={() => setShow(!show)}>
          Primer Año
        </button>
        <button className={styles.text} onClick={() => setShow2(!show2)}>
          Segundo Año
        </button>
        <button className={styles.text} onClick={() => setShow3(!show3)}>
          Tercer Año
        </button>
        <button className={styles.text} onClick={() => setShow4(!show4)}>
          Cuarto Año
        </button>
        <button className={styles.text} onClick={() => setShow5(!show5)}>
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
              <div>
                <h3> Primer Cuatrimestre </h3>
                <br />
              </div>
              <Semester semester={firstYear.firstSemester} />
              <div>
                <br />
                <h3> Segundo Cuatrimestre </h3>
                <br />
              </div>
            </div>
            <Semester semester={firstYear.secondSemester} />
            <br />
            <button className={styles.text} type="sumit">
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
              <div>
                <h3> Primer Cuatrimestre </h3>
                <br />
              </div>
              <br />
              <Semester semester={secondYear.firstSemester} />

              <div>
                <br />
                <h3> Segundo Cuatrimestre </h3>
                <br />
              </div>
              <div>
                <br />
                <h3> Anual </h3>
                <br />
              </div>
              <div>
                {/*--------Information System Analysis---------- */}
                <fieldset>
                  <h4> Análisis de Sistema de Información </h4>
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
