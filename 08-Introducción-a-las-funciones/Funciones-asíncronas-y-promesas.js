///Fucniones mas avnzadas 
// Funciones asíncronas 

function miAsinc() {
    // Hace una llamada a una base de datos externa
    // Puede darnos algún error
}
// las promesas se definen como promise
const miPromesa = new Promise((resolve, reject) => {
    const i = Math.floor(Math.random() * 2)
    // Si está todo correcto
    if (i !== 0) {
        resolve()
    } else {
        reject()
    }
})

miPromesa
    .then(() => console.log("Se ha ejecutado de forma correcta"))
    .catch(() => console.log("ERROR"))
    .finally(() => console.log("Yo me ejecuto siempre"))

