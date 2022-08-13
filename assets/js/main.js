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

// Archivos JSON

const json_colores = `
{
    "arrayColores":[{
            "nombreColor":"rojo",
            "valorHexadec":"#f00"
        },
        {
            "nombreColor":"verde",
            "valorHexadec":"#0f0"
        },
        {
            "nombreColor":"azul",
            "valorHexadec":"#00f"
        },
        {
            "nombreColor":"cyan",
            "valorHexadec":"#0ff"
        },
        {
            "nombreColor":"magenta",
            "valorHexadec":"#f0f"
        },
        {
            "nombreColor":"amarillo",
            "valorHexadec":"#ff0"
        },
        {
            "nombreColor":"negro",
            "valorHexadec":"#000"
        }
    ]
}
`;
const objeto_de_js = JSON.parse(json_colores); // .parse es para transformar archivos JSON en objetos de Javascript

console.log(json_colores);
console.log(objeto_de_js);

objeto_de_js.arrayColores.forEach((element) => {
  console.log(element);
}); // Imprimir objetos dentro de arrayColores

objeto_de_js.arrayColores.forEach((element) => {
  console.log(element.nombreColor);
}); // Imprimir el valor de nombreColor dentro de los objetos de arrayColores
