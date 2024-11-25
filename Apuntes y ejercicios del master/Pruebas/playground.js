/*// Step 1: Using setTimeout

console.log("Start timer...");

setTimeout(() => {
        console.log("2 seconds later...");
},2000); // Waits 2 seconds

setTimeout(() => {
        console.log("5 seconds later...");
}, 5000); // Waits 5 seconds

console.log("End timer setup.");*/

/*const myPromise = new Promise((resolve, reject) => {
  const success = false; 

  if (success) {
    resolve("The operation was successful! 🎉Yupi🎉!");
  } else {
    reject("The operation failed ❌");
  }
});

myPromise
  .then((message) => {
    console.log("Success:", message);
  })
  .catch((error) => {
    console.log("Error:", error);
  })*/

/*function multiplyAll(multiplier, ...numbers) {
  return numbers.map((num) => num * multiplier);
}

console.log(multiplyAll(2, 1, 2, 3, 4));

const fruits = ["apple", "banana"];
const moreFruits = ["orange", ...fruits, "grape"];
console.log(moreFruits);

const person = {name: "Marcos", city: "Madrid"};
const updatePerson = { ...person, age: 39 };
console.log(updatePerson);*/

/*async function fetchUser() {
  try {
    const user = await new Promise((resolve) => {
      setTimeout(() => {
        resolve({ name: "Marcos", profession: "Front-end Developer"});
      }, 1500);
    });

    console.log("User fetched:", user);
  } catch (error) {
    console.log("Error:", error);
  }
}

console.log("Fetching user...");
fetchUser();
console.log("This runs before user data is fetched.");*/

/*async function fetchDataWithError() {
  try {
    const data = await new Promise((resolve, reject) => {
      setTimeout(() => {
        const success = Math.random() > 0.1;
        if (success) {
          resolve("Data fetched successfully: 🎉");
        } else {
          reject("Failed to fecth data. ❌");
        }
      },2000);
    });

    console.log("Success:", data);
  } catch (error) {
    console.log("Error:", error);
  }
}

console.log("Starting fetch...");
fetchDataWithError();
console.log("This message runs immediately.");*/

/*// Simulador de API para obtener usuarios
function fetchUsers() {
  return new Promise((resolve, reject) => {
      setTimeout(() => {
          console.log("Fetching users...");
          resolve([{ id: 1, name: "Marcos" }, { id: 2, name: "Ana" }]);
      }, 1000);
  });
}

// Simulador de API para obtener la ciudad de un usuario
function fetchUserCity(userId) {
  return new Promise((resolve, reject) => {
      setTimeout(() => {
          console.log(`Fetching city for user ${userId}...`);
          resolve(userId === 1 ? "Madrid" : "Barcelona");
      }, 1000);
  });
}

// Encadenamiento de Promesas
fetchUsers()
    .then(users => {
        console.log("Users fetched:", users);

        // Obtener la ciudad del primer usuario
        return fetchUserCity(users[0].id);
    })
    .then(city => {
        console.log("City fetched:", city);
    })
    .catch(error => {
        console.log("Error:", error); // Manejar cualquier error
    });*/

    // Simulador de API para obtener usuarios
function fetchUsers() {
  return new Promise((resolve, reject) => {
      setTimeout(() => {
          console.log("Fetching users...");
          resolve([{ id: 1, name: "Marcos" }, { id: 2, name: "Ana" }]);
      }, 1000);
  });
}

// Simulador de API para obtener la ciudad de un usuario
function fetchUserCity(userId) {
  return new Promise((resolve, reject) => {
      setTimeout(() => {
          console.log(`Fetching city for user ${userId}...`);
          resolve(userId === 1 ? "Madrid" : "Barcelona");
      }, 1000);
  });
}

// Usamos async/await en lugar de .then()
async function main() {
  try {
      console.log("Fetching users...");
      const users = await fetchUsers(); // Espera a que se obtengan los usuarios
      console.log("Users fetched:", users);

      const city = await fetchUserCity(users[0].id); // Obtiene la ciudad del primer usuario
      console.log("City fetched:", city);
  } catch (error) {
      console.log("Error:", error); // Captura errores en cualquier punto del flujo
  }
}

main(); // Ejecuta la función principal

  