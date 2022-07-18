//================ SWEET ALERT ================

const btnMostrarAlert = document.getElementById("btn-mostrar-alert");
btnMostrarAlert.onclick = mostrarAlert;

// function mostrarAlert() {
//   Swal.fire({
//     icon: "error",
//     title: "Oops...",
//     text: "Something went wrong!",
//     footer: '<a href="">Why do I have this issue?</a>',
//   });

// Swal.fire({
//     title: 'Do you want to save the changes?',
//     showDenyButton: true,
//     showCancelButton: true,
//     confirmButtonText: 'Save',
//     denyButtonText: `Don't save`,
//   }).then((result) => {
//     /* Read more about isConfirmed, isDenied below */
//     if (result.isConfirmed) {
//       Swal.fire('Saved!', '', 'success')
//     } else if (result.isDenied) {
//       Swal.fire('Changes are not saved', '', 'info')
//     }
//   })
// }

function mostrarAlert() {
  Toastify({
    text: "This is a toast",
    className: "info",
    style: {
      background: "linear-gradient(to right, #00b09b, #96c93d)",
    },
  }).showToast();
}

const DateTime = luxon.DateTime;
const Duration = luxon.Duration;

const dateTime = DateTime.local(2022, 1, 25, 12, 10);

console.log("Fecha y hora:" + dateTime.toString());

const dateTimeFromObject = DateTime.fromObject(
  { day: 22, hour: 12, month: 2 },
  { zone: "America/Buenos_Aires" }
  //{ zone: "America/Los_Angeles" }
  //{ zone: "America/Mexico_City" }
);

console.log("Fecha y hora con timezone: " + dateTimeFromObject.toString());

const hoy = DateTime.now();
const duration = Duration.fromObject({ hours: 3, minutes: 15 });

console.log("Duration horas: " + duration.hours);
console.log("Duration minutos: " + duration.minutes);
console.log("Duration segundos: " + duration.seconds);

console.log(hoy.toLocaleString(DateTime.DATETIME_SHORT));

const suma = hoy.plus(duration);
console.log(
  "Fecha de hoy más duration " + suma.toLocaleString(DateTime.DATETIME_SHORT)
);

const resta = hoy.minus(duration);
console.log(
  "Fecha de hoy menos duration " + resta.toLocaleString(DateTime.DATETIME_SHORT)
);

//CALCULAR EDAD

const btnMostrarEdad = document.getElementById("btn-mostrar-edad");
const inputFechaNacimiento = document.getElementById("input-fecha");
btnMostrarEdad.onclick = calcularEdad;

function calcularEdad() {
  const hoy = DateTime.now();
  const valorFechaNacimiento = inputFechaNacimiento.value;
  let cumpleanios = DateTime.fromISO(valorFechaNacimiento);

  const diferencia = hoy.diff(cumpleanios, [
    "years",
    "months",
    "days",
    "hours",
  ]);
  console.log(diferencia.toObject());

  Swal.fire({
    icon: "info",
    title: "Edad",
    text: `Tu edad es: ${diferencia.years} años ${diferencia.months} meses ${
      diferencia.days
    } días ${diferencia.hours.toFixed(2)} horas`,
  });
}
