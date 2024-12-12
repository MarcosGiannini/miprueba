# Sesión 2: Conceptos Básicos del Lenguaje

## 1. Conceptos Básicos
### 1.1 Variables
- Uso de `const` y `let` para declarar variables.
- **`const`**: Para valores que no cambian.
- **`let`**: Para valores que pueden cambiar.

### 1.2 Tipos de Datos
- **Primitivos**: `string`, `number`, `boolean`, `null`, `undefined`.
- **Estructurados**: Objetos, Arrays.

---

## 2. Bucles
### 2.1 For Loop
- Itera sobre un rango específico de números o índices:
```javascript
for (let i = 0; i < 10; i++) {
    console.log(i); // Outputs numbers 0 to 9
}

2.2 While Loop
Repite una acción mientras se cumpla una condición:

let i = 0;
while (i < 5) {
    console.log(i); // Outputs numbers 0 to 4
    i++;
}

2.3 For...of Loop
Itera sobre elementos de un iterable como un array:

const items = ['apple', 'banana', 'cherry'];
for (const item of items) {
    console.log(item); // Outputs each fruit
}

2.4 For...in Loop
Itera sobre las claves de un objeto:

const person = { name: 'Alice', age: 25 };
for (const key in person) {
    console.log(`${key}: ${person[key]}`); // Outputs "name: Alice" and "age: 25"
}

3. Operador Comma
Permite ejecutar múltiples expresiones en una sola declaración:

let x = (1, 2, 3);
console.log(x); // Outputs 3

4. Objetos
4.1 Creación de Objetos
Usando llaves {}:

const person = {
    name: 'John',
    age: 30
};
4.2 Acceso a Propiedades
Dot notation:
console.log(person.name); // Outputs 'John'
Bracket notation:
console.log(person['age']); // Outputs 30

4.3 Métodos en Objetos
Agregar funciones como métodos:

const car = {
    brand: 'Toyota',
    start: function() {
        console.log('Car started');
    }
};
car.start(); // Outputs 'Car started'

5. Arrays
5.1 Declaración
Crear un array con corchetes []:

const fruits = ['apple', 'banana', 'cherry'];

5.2 Métodos Comunes
push: Añadir un elemento al final.
pop: Eliminar el último elemento.
shift: Eliminar el primer elemento.
unshift: Añadir un elemento al principio.

fruits.push('orange'); // Adds 'orange'
fruits.pop(); // Removes 'orange'

5.3 Iteración sobre Arrays
Usando forEach:

fruits.forEach(fruit => {
    console.log(fruit); // Outputs each fruit
});

6. Funciones
6.1 Declaración
Declarar una función con function:

function greet(name) {
    return `Hello, ${name}!`;
}
console.log(greet('Alice')); // Outputs 'Hello, Alice!'

6.2 Funciones Flecha
Sintaxis más concisa:

const greet = (name) => `Hello, ${name}!`;
console.log(greet('Bob')); // Outputs 'Hello, Bob!'

6.3 Funciones como Parámetros
Pasar funciones como argumentos:
function execute(callback) {
    callback();
}
execute(() => console.log('Callback executed')); // Outputs 'Callback executed'
