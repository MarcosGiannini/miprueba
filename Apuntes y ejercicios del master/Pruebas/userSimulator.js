// Simulador de API ficticia para obtener usuarios

async function fetchUser() {
    try {
        // Simulamos una llamada a la API que tarda 2 segundos
        const users = await new Promise((resolve) => {
            setTimeout(() => {
                resolve([
                    { id: 1, name: "Marcos", profession: "Front-End Developer"},
                    { id: 2, name: "Ana", profession: "UX Designer"},
                ]);
            }, 2000);
        });

        return users; // Devolvemos los usuarios
    } catch (error) {
        console.log("Error fetching users", error);
    }
}

// Función principal para ejecutar el proyecto
async function main () {
    console.log("Fetching users...");
    const users = await fetchUser();

    console.log("Uses fetched:", users);

    // Añadimos un nuevo ususario al array usando Spread
    const newUser = { id: 3, name: "Luis", profession: "Backend Developer"};
    const updatedUsers = [...users, newUser];
    console.log("Updated Users:", updatedUsers);

    // Filtramos usuarios por profesión
    const frontEnders = updatedUsers.filter(user => user.profession.includes("Front-End"));
    console.log("Front-End Developers:", frontEnders);
}

main();