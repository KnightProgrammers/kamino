
const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");
const bcrypt = require("bcrypt");
const saltRounds = 10;



const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "root",
  database: "banco",
  port: 8889,
});

app.use(express.json());
app.use(cors());

app.post("/login", (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  // Verificar las credenciales en la base de datos
  db.query(
    "SELECT * FROM usuarios WHERE email = ?",
    [email],
    (err, result) => {
      if (err) {
        res.status(500).send(err);
      } else {
        if (result.length > 0) {
          // Verificar la contraseña utilizando bcrypt
          bcrypt.compare(password, result[0].password, (err, bcryptResult) => {
            if (bcryptResult) {
              // Las credenciales son válidas, enviar respuesta de éxito
              res.send({ msg: "Inicio de sesión exitoso" });
              
            } else {
              // La contraseña es incorrecta, enviar respuesta de error
              res.status(401).send({ error: "Contraseña incorrecta" });
            }
          });
        } else {
          // El correo electrónico no está registrado, enviar respuesta de error
          res.status(401).send({ error: "Correo electrónico no registrado" });
        }
      }
    }
  );
});



app.post("/register", (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  db.query("SELECT * FROM usuarios WHERE email = ?", [email], (err, result) => {
    if (err) {
      res.send(err);
    } else {
      if (result.length === 0) {
        bcrypt.hash(password, saltRounds, (err, hash) => {
          if (err) {
            res.send(err);
          } else {
            db.query(
              "INSERT INTO usuarios (email, password) VALUES (?, ?)",
              [email, hash],
              (error, response) => {
                if (error) {
                  res.send(error);
                } else {
                  res.send({ msg: "Usuario registrado exitosamente" });
                }
              }
            );
          }
        });
      } else {
        res.send({ msg: "Email ya registrado" });
      }
    }
  });
});


app.get("/users", (req, res) => {
  db.query("SELECT * FROM usuarios", (err, result) => {
    if (err) {
      res.send(err);
    } else {
      res.send(result);
    }
  });
});


  
app.listen(3003, () => {
  console.log("Servidor en ejecución en el puerto 3003");
});
