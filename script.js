console.log("Banco digital");
const cartelRespuesta = document.querySelector("h5");

const respuestaApi = new Promise((resolucion, rechazo) => {
  //simulemos información traida del servidor
  let usuario = {
    estadoCuenta: "inactiva",
    nombre: "Michael Scott",
    fondos: 50,
  };
  setTimeout(() => {
    if (usuario.estadoCuenta == "inactiva") {
      rechazo({ mensaje: "Su cuenta no esta activa", status: "215" });
    } else if (usuario.fondos < 100) {
      rechazo({ mensaje: "Fondos insuficientes", status: "240" });
    } else {
      resolucion({
        mensaje: "Pago realizado con exito",
        fondos: usuario.fondos,
        status: "200",
      });
    }
  }, 2000);
});

console.log(respuestaApi);

respuestaApi
  .then((data) => {
    //Hacemos algo con la respuesta
    console.log(data);
    cartelRespuesta.innerHTML = `${data.mensaje}`;
    cartelRespuesta.style.border = "3px solid green";
  })
  .catch((err) => {
    //Hacemos algo con el error
    console.error(err);
    cartelRespuesta.innerHTML = `${err.mensaje}`;
    cartelRespuesta.style.border = "3px solid red";
  });

console.log("Todas las operaciones realizadas");
