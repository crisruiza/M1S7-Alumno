console.log("Entro al main.js");
let nombre_persona = "Juan";

let nombre = "Juan";
let apellido = "Perez";
console.log(`Mi nombre es ${nombre} y mi apellido ${apellido}`);

let perro = {
  nombre: "Willy",
  color: "Negro",
  raza: "Labrador",
  edad: 4,
  peso: 8,
};

console.log(perro); // Imprimir objeto
console.log(perro.nombre); // Imprimir el objeto por una llave

let keys = Object.keys(perro); // Enseña las llaves como array
console.log(keys);
keys.forEach((llave) => {
  console.log(typeof perro[llave], perro[llave]);
}); // Enseña las llaves como su valor (string, num, etc)

let values = Object.values(perro); // Enseña los valores como array
console.log(values);
