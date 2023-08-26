import React, { useState } from "react";
import Link from "next/link";
import Footer from "@/components/Footer";
import Nav from "@/components/Nav";
import styles from "@/styles/general.module.css";
import Head from "next/head";


function Load_Dates() {
  const [color_1year_buttom, setcolor_1year_buttom] = useState("#1f77cc");
  const [color_1year_text, setcolor_1year_text] = useState("white");
  const [color_2year_buttom, setcolor_2year_buttom] = useState("#1f77cc");
  const [color_2ear_text, setcolor_2year_text] = useState("white");
  const [color_3year_buttom, setcolor_3year_buttom] = useState("#1f77cc");
  const [color_3year_text, setcolor_3year_text] = useState("white");
  const [color_4year_buttom, setcolor_4year_buttom] = useState("#1f77cc");
  const [color_4year_text, setcolor_4year_text] = useState("white");
  const [color_5year_buttom, setcolor_5year_buttom] = useState("#1f77cc");
  const [color_5ear_text, setcolor_5year_text] = useState("white");
  const [show, setShow] = useState(false);
  const [show2, setShow2] = useState(false);
  const [show3, setShow3] = useState(false);
  const [show4, setShow4] = useState(false);
  const [show5, setShow5] = useState(false);


  
   const handleButtonClick = () => {
     setShow(!show)

     if (!show) {

       setcolor_1year_buttom("white"); // Cambiar el color a blanco
       setcolor_1year_text("#1f77cc"); // Cambiar el color a celeste
         setShow(true);
         setShow2(false);
         setShow3(false);
         setShow4(false);
         setShow5(false);
     } 
   };



  
    const handleButton2Click = () => {
      setShow2(!show2);
          if (!show2) {
       setcolor_2year_buttom("white"); // Cambiar el color a blanco
            setcolor_2year_text("#1f77cc"); // Cambiar el color a celeste
              setShow(false);
              setShow3(false);
              setShow4(false);
              setShow5(false);
     }
   };
  
    const handleButton3Click = () => {
      setShow3(!show3);
      if (!show3) {
        setcolor_3year_buttom("white"); // Cambiar el color a blanco
        setcolor_3year_text("#1f77cc"); // Cambiar el color a celeste
          setShow(false);
          setShow2(false);
          setShow3(true);
          setShow4(false);
          setShow5(false);
      } 
    };
  
    
    const handleButton4Click = () => {
      setShow4(!show4);
      if (!show4) {
        setcolor_4year_buttom("white"); // Cambiar el color a blanco
        setcolor_4year_text("#1f77cc"); // Cambiar el color a celeste
          setShow(false);
         setShow2(false);
         setShow3(false);
         setShow4(true);
         setShow5(false);
      } 
    };
  
      const handleButton5Click = () => {
        setShow5(!show5);
        if (!show5) {
          setcolor_5year_buttom("white"); // Cambiar el color a blanco
          setcolor_5year_text("#1f77cc"); // Cambiar el color a celeste
            setShow(false);
            setShow2(false);
            setShow3(false);
            setShow4(false);
            setShow5(true);
        } 
      };
  


 
  
     const buttonStyles = {
       padding: "15px",
       color:  show ? color_1year_text : "white", // Cambia el color del texto según show
       borderRadius: "100px",
       backgroundColor:  show ? color_1year_buttom : "#1f77cc", // Cambia el valor según show
       bottom: "20px",
       marginRight: "50px",
       marginLeft: "50px",
       cursor: "pointer",
       transition: "color 0.7s, background-color 0.7s",
     };
     const buttonStyles2 = {
       padding: "15px",
       color: show2 ? color_2ear_text : "white", // Cambia el color del texto según show2
       borderRadius: "100px",
       backgroundColor: show2 ? color_2year_buttom : "#1f77cc", // Cambia el valor según show2
       bottom: "20px",
       marginRight: "50px",
       marginLeft: "50px",
       cursor: "pointer",
       transition: "color 0.7s, background-color 0.7s",
     };
   const buttonStyles3 = {
     padding: "15px",
     color: show3 ? color_3year_text : "white", // Cambia el color del texto según show3
     borderRadius: "100px",
     backgroundColor: show3 ? color_3year_buttom : "#1f77cc", // Cambia el valor según show3
     bottom: "20px",
     marginRight: "50px",
     marginLeft: "50px",
     cursor: "pointer",
     transition: "color 0.7s, background-color 0.7s",
   };
   const buttonStyles4 = {
     padding: "15px",
     color:  show4 ? color_4year_text : "white", // Cambia el color del texto según show4
     borderRadius: "100px",
     backgroundColor: show4 || show4 ? color_4year_buttom : "#1f77cc", // Cambia el valor según show4
     bottom: "20px",
     marginRight: "50px",
     marginLeft: "50px",
     cursor: "pointer",
     transition: "color 0.7s, background-color 0.7s",
   };

     const buttonStyles5 = {
       padding: "15px",
       color: show5 ? color_5ear_text : "white", // Cambia el color del texto según show5
       borderRadius: "100px",
       backgroundColor: show5 || show5 ? color_5year_buttom : "#1f77cc", // Cambia el valor según show5
       bottom: "20px",
       marginRight: "50px",
       marginLeft: "50px",
       cursor: "pointer",
       transition: "color 0.7s, background-color 0.7s",
     };

  
  
  
  
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
      key: 11,
      name: "Ingeniería y Sociedad",
    },
    {
      key: 13,
      name: "Sintaxis y Semántica de los Lenguajes ",
    },
    {
      key: 12,
      name: "Inglés II",
    },
  ],
  secondSemester: [
    {
      key: 10,
      name: "Física II",
    },
    {
      key: 14,
      name: "Paradigmas de Programación ",
    },
    {
      key: 15,
      name: "Sistemas Operativo",
    },
  ],
anual: [
    {
      key: 10,
      name: "Física II",
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

const thirdYear = {
  firstSemester: [
    {
      key: 17,
      name: "Probabilidad y Estadistica",
    },
    {
      key: 18,
      name: "Economía",
    },
    {
      key: 19,
      name: "Bases de Datos ",
    },
    {
      key: 21,
      name: "Comunicación de Datos",
    },
  ],
  secondSemester: [
    {
      key: 20,
      name: "Desarrollo de Software",
    },

    {
      key: 22,
      name: "Análisis Numérico",
    },
   
  ],
  
};
  
  const fourthYear = {
    firstSemester: [
      {
        key: 24,
        name: "Legislación",
      },
      {
        key: 27,
        name: "Investigación Operativa ",
      },
      {
        key: 28,
        name: "Simulación ",
      },
      {
        key: 37,
        name: "Seminario Integrador ",
      },
    ],
    secondSemester: [
      {
        key: 26,
        name: "Redes de datos",
      },

      {
        key: 29,
        name: "Tecnología para la Automatización",
      },
    ],
  };
    const fifthYear = {
      firstSemester: [
        {
          key: 31,
          name: "Inteligencia Artificial",
        },
        {
          key: 32,
          name: "Gestión Gerencia ",
        },
      ],
      secondSemester: [
        {
          key: 33,
          name: "Sistemas de Gestión  ",
        },
        {
          key: 34,
          name: "Ciencias de Datos ",
        },

        {
          key: 35,
          name: "Seguridad en los Sistemas de Información ",
        },
      ],
      annual: [
        {
          key: 36,
          name: " ",
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
      key: "notInprogress",
      label: "No cursada",
    },
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
          <h4 className={styles.text_subject_load_dates}> {subject.name} </h4>
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
        <button onClick={handleButtonClick} style={buttonStyles}>
          Primer año
        </button>
        <button onClick={handleButton2Click} style={buttonStyles2}>
          Segundo Año
        </button>
        <button onClick={handleButton3Click} style={buttonStyles3}>
          Tercer Año
        </button>
        <button onClick={handleButton4Click} style={buttonStyles4}>
          Cuarto Año
        </button>
        <button onClick={handleButton5Click} style={buttonStyles5}>
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
              <div className={styles.text_title_load_datas}>
                <h3 align="center"> PRIMER AÑO</h3>
              </div>
              <div className={styles.text_sub_title_load_datas}>
                <h3> Primer Cuatrimestre </h3>
                <br />
              </div>
              <Semester semester={firstYear.firstSemester} />
              <div>
                <br />
                <h3 className={styles.text_sub_title_load_datas}>
                  Segundo Cuatrimestre
                </h3>
                <br />
              </div>
            </div>
            <Semester semester={firstYear.secondSemester} />
          </form>
        ) : null}
        <div>{/*--------FIRST YEAR---------- */}</div>
        <div>{/*--------SECOND YEAR---------- */}</div>
        {show2 ? (
          <form>
            <div>
              <br />
              <h3 align="center" className={styles.text_title_load_datas}>
                {" "}
                SEGUNDO AÑO
              </h3>
              <br />
              <div>
                <h3 className={styles.text_sub_title_load_datas}>
                  {" "}
                  Primer Cuatrimestre{" "}
                </h3>
                <br />
              </div>
              <br />
              <Semester semester={secondYear.firstSemester} />

              <div>
                <br />
                <h3 className={styles.text_sub_title_load_datas}>
                  {" "}
                  Segundo Cuatrimestre{" "}
                </h3>
                <Semester semester={secondYear.secondSemester} />
                <br />
              </div>
              <div>
                <br />
                <h3 className={styles.text_sub_title_load_datas}> Anual </h3>
                <br />
              </div>
              <div></div>
            </div>
          </form>
        ) : null}
        <div>{/*--------SECOND YEAR---------- */}</div>
        <div>{/*--------TRID YEAR---------- */}</div>
        {show3 ? (
          <form>
            <div>
              <br />
              <h3 align="center" className={styles.text_title_load_datas}>
                TERCER AÑO
              </h3>
              <br />
              <h3 className={styles.text_sub_title_load_datas}>
                Primer Cuatrimestre
              </h3>
              <br />
            </div>
            <Semester semester={thirdYear.firstSemester} />
            <div>
              <br />
              <h3 className={styles.text_sub_title_load_datas}>
                Segundo Cuatrimestre
              </h3>
              <br />
            </div>
            <Semester semester={thirdYear.secondSemester} />
            <div>
              <br />
              <h3 className={styles.text_sub_title_load_datas}> Anual </h3>
              <br />
            </div>
          </form>
        ) : null}
        <div>{/*--------TRID YEAR---------- */}</div>
        <div>{/*--------FOURTH YEAR---------- */}</div>
        {show4 ? (
          <form>
            <div>
              <br />
              <h3 align="center" className={styles.text_title_load_datas}>
                {" "}
                CUARTO AÑO
              </h3>
              <br />
              <div>
                <br />
                <h3 className={styles.text_sub_title_load_datas}>
                  {" "}
                  Primer Cuatrimestre{" "}
                </h3>
                <br />
              </div>
              <Semester semester={fourthYear.firstSemester} />
              <div>
                <br />
                <h3 className={styles.text_sub_title_load_datas}>
                  {" "}
                  Segundo Cuatrimestre{" "}
                </h3>
              </div>
              <Semester semester={fourthYear.secondSemester} />
              <div>
                <br />
              </div>
              <div>
                <div>
                  <br />
                  <h3 className={styles.text_sub_title_load_datas}> Anual </h3>
                  <br />
                </div>
         
              </div>
            </div>
            <br />
          </form>
        ) : null}
        <div>{/*--------FOURTH YEAR---------- */}</div>
        <div>{/*--------FIFTH YEAR---------- */}</div>
        {show5 ? (
          <form>
            <div>
              <br />
              <h3 align="center" className={styles.text_title_load_datas}>
                {" "}
                QUINTO AÑO
              </h3>
              <br />
              <div>
                <br />
                <h3 className={styles.text_sub_title_load_datas}>
                  {" "}
                  Primer Cuatrimestre{" "}
                </h3>
              </div>
              <Semester semester={fifthYear.firstSemester} />
              <div>
                <br />
              </div>
              <div></div>
              <div>
                <div>
                  <br />
                  <h3 className={styles.text_sub_title_load_datas}>
                    {" "}
                    Segundo Cuatrimestre{" "}
                  </h3>
                </div>
                <Semester semester={fifthYear.secondSemester} />
                <div>
                  <br />
                </div>
              </div>
              <div>
                <div>
                  <br />
                  <h3 className={styles.text_sub_title_load_datas}> Anual </h3>
                  <br />
                </div>
              </div>
            </div>
            <br />
          </form>
        ) : null}
        <div>{/*--------FIFRTH YEAR---------- */}</div>
      </div>
      <br />
      <br />
      <br />
      <br />
      <div>{/*--------YEARS----------- */}</div>

      <div>
        {/*--------FOOTER---------- */}
        <br />
        <br />

        <Footer />
        {/*--------FOOTER----------- */}
      </div>
    </>
  );
}

export default Load_Dates;
