let total = 0;

function agregarAlCarrito(precio) {
    total += precio;
    console.log(`Se agregó un artículo al carrito por $${precio}`);
}

function calcularIVA(total) {
    const iva = total * 0.19;
    console.log(`El IVA a pagar es de $${iva}`);
    return iva;
}

agregarAlCarrito(50000);
agregarAlCarrito(80000);
agregarAlCarrito(30000);
agregarAlCarrito(70500);

console.log(`El total en el carrito es de $${total}`);

let totalAPagar = calcularIVA(total);

console.log(`El total a pagar con IVA incluido es de $${total + totalAPagar}`);
