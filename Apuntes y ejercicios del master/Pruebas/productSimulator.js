// Simulador de API para obtener productos
async function fetchProducts() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Fetching products...");
            const products = [
                { id: 1, name: "Laptop", price: 1200 },
                { id: 2, name: "Phone", price: 800 },
                { id: 3, name: "Tablet", price: 600 },
            ];
            resolve(products); // Devolvemos los productos
        }, 1500);
    });
}

// Simulador de API para realizar un pedido
async function placeOrder(productId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(`Processing order for product ID ${productId}...`);
            const success = Math.random() > 0.3; // 70% de probabilidad de éxito

            if (success) {
                resolve(`Order for product ID ${productId} has been placed successfully!`);
            } else {
                reject(`Failed to place order for product ID ${productId}.`);
            }
        }, 2000);
    });
}

// Función principal
async function main() {
    try {
        // Paso 1: Obtener productos
        const products = await fetchProducts();
        console.log("Products available:", products);

        // Paso 2: Elegir un producto para pedir
        const productId = 2; // Cambia este valor para probar otros productos
        const selectedProduct = products.find((product) => product.id === productId);

        if (!selectedProduct) {
            throw new Error(`Product with ID ${productId} not found.`);
        }

        console.log(`Selected product: ${selectedProduct.name}, Price: $${selectedProduct.price}`);

        // Paso 3: Realizar el pedido
        const orderConfirmation = await placeOrder(productId);
        console.log(orderConfirmation);
    } catch (error) {
        console.log("Error:", error.message || error);
    }
}

main();
