# **Sesión 3 del Módulo 2: Apuntes**

## **1. Operadores Rest y Spread**  
Los operadores `Rest` y `Spread` (`...`) son herramientas clave en JavaScript para trabajar con arrays, objetos y parámetros de funciones.

### **Rest Operator (`...`)**  
- **Definición:** Sirve para recolectar múltiples elementos en una sola variable.
- **Usos:**  
  - **Funciones con argumentos variables:**  
    ```javascript
    function sum(...numbers) {
        return numbers.reduce((acc, curr) => acc + curr, 0);
    }
    console.log(sum(1, 2, 3, 4)); // 10
    ```
  - **Desestructuración de arrays:**  
    ```javascript
    const [first, ...rest] = [1, 2, 3, 4];
    console.log(first); // 1
    console.log(rest);  // [2, 3, 4]
    ```

### **Spread Operator (`...`)**  
- **Definición:** Se utiliza para expandir elementos de arrays u objetos.
- **Usos:**  
  - **Concatenar arrays:**  
    ```javascript
    const array1 = [1, 2, 3];
    const array2 = [...array1, 4, 5];
    console.log(array2); // [1, 2, 3, 4, 5]
    ```
  - **Clonar objetos:**  
    ```javascript
    const obj1 = { name: "Marcos", age: 30 };
    const obj2 = { ...obj1, location: "Spain" };
    console.log(obj2);
    // { name: "Marcos", age: 30, location: "Spain" }
    ```

---

## **2. Default Parameters (Parámetros por Defecto)**  
- **Definición:** Permiten definir valores por defecto para los parámetros de una función.  
- **Ejemplo:**
  ```javascript
  function greet(name = "Guest") {
      console.log(`Hello, ${name}!`);
  }
  greet(); // Hello, Guest!
  greet("Marcos"); // Hello, Marcos!
