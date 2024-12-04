📚 Introducción a JavaScript
📌 Variables y Tipos de Datos
// Declare variables 📋
// Declara variables 📋
let age = 25; // 🟢 Mutable variable (Variable mutable)
const name = "Marcos"; // 🔵 Immutable variable (Variable inmutable)

console.log(age); // Logs: 25
console.log(name); // Logs: Marcos
📌 Tipos de Datos Primitivos
// Primitive Data Types 🧱
// Tipos de datos primitivos 🧱
const number = 42; // 🔢 Number (Número)
const text = "Hello, world!"; // 📝 String (Cadena de texto)
const isLearning = true; // ✅ Boolean (Lógico)
let undefinedVariable; // 🔄 Undefined (No definida)
const emptyValue = null; // ❌ Null (Vacío intencionado)

console.log(typeof number); // Logs: "number"
console.log(typeof text); // Logs: "string"
console.log(typeof isLearning); // Logs: "boolean"
console.log(typeof undefinedVariable); // Logs: "undefined"
console.log(typeof emptyValue); // Logs: "object" (Error histórico)
📌 Operadores
// Arithmetic Operators ➕➖
// Operadores aritméticos ➕➖
const a = 10;
const b = 3;

console.log(a + b); // Suma ➕ (Logs: 13)
console.log(a - b); // Resta ➖ (Logs: 7)
console.log(a * b); // Multiplicación ✖️ (Logs: 30)
console.log(a / b); // División ➗ (Logs: 3.333...)
console.log(a % b); // Módulo 🔢 (Logs: 1)

// Comparison Operators 🧐
// Operadores de comparación 🧐
console.log(a > b); // Mayor que (Logs: true)
console.log(a < b); // Menor que (Logs: false)
console.log(a === b); // Estrictamente igual (Logs: false)
console.log(a !== b); // Estrictamente diferente (Logs: true)
📌 Directivas de Control
if, else if, else
// Control Flow 🌐
// Flujo de control 🌐
const age = 18;

if (age < 13) {
  console.log("You are a child."); // Eres un niño/a.
} else if (age >= 13 && age <= 17) {
  console.log("You are a teenager."); // Eres un adolescente.
} else {
  console.log("You are an adult."); // Eres un adulto.
}
switch
// Switch Statement 🔄
// Declaración switch 🔄
const day = "Monday";

switch (day) {
  case "Monday":
    console.log("Start of the week!"); // Inicio de la semana
    break;
  case "Friday":
    console.log("End of the work week!"); // Fin de la semana laboral
    break;
  case "Saturday":
  case "Sunday":
    console.log("Weekend!"); // Fin de semana
    break;
  default:
    console.log("Just another day."); // Solo otro día
}
📌 Operador Ternario
// Ternary Operator 🤔
// Operador ternario 🤔
const age = 20;
const message = age >= 18 ? "You are an adult." : "You are a minor.";
console.log(message); // Logs: "You are an adult."
📌 Funciones Básicas
// Functions 🛠️
// Funciones 🛠️
function greet(name) {
  // 📢 Greet a person (Saludar a una persona)
  console.log(`Hello, ${name}!`); // Logs: Hello, Marcos!
}

greet("Marcos");
📌 Ejemplo Integrador
// Age Calculator 📅
// Calculadora de Edad 📅

// User Info 👤
const name = "Marcos";
const birthYear = 1990;

// Calculate Age 🧮
const currentYear = new Date().getFullYear(); // Año actual
const age = currentYear - birthYear;

// Display Message 📝
const message =
  age < 13
    ? `Hello ${name}, you are a child.`
    : age >= 13 && age <= 17
    ? `Hello ${name}, you are a teenager.`
    : `Hello ${name}, you are an adult.`;

console.log(message);
📌 Tips Rápidos
Usa === en lugar de == para comparar valores y tipos.
Utiliza template literals (`) para crear cadenas dinámicas.
Usa typeof para comprobar tipos de datos.