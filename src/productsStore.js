// coffee price_1Pbm1TFP9HFeBwpDuYc0NFUP
// sunglasses price_1Pbm1xFP9HFeBwpD6CsR8hg8
// camera price_1Pbm2IFP9HFeBwpDNeyplH0g
const coffee = "https://images.unsplash.com/photo-1495774856032-8b90bbb32b32?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGNvZmZlZXxlbnwwfHwwfHx8MA%3D%3D";
const sunglasses = "https://images.unsplash.com/photo-1470526446583-d0fe2363d8cb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c3VuZ2xhc3Nlc3xlbnwwfHwwfHx8MA%3D%3D"
const camera = "https://images.unsplash.com/photo-1536632087471-3cf3f2986328?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y2FtZXJhfGVufDB8fDB8fHww"

const productsArray = [
    {
        id: "price_1Pbm1TFP9HFeBwpDuYc0NFUP",
        title: "Coffee",
        price: 4.99,
        picture: coffee
    },
    {
        id: "price_1Pbm1xFP9HFeBwpD6CsR8hg8",
        title: "Sunglasses",
        price: 9.99,
        picture: sunglasses
    },
    {
        id: "price_1Pbm2IFP9HFeBwpDNeyplH0g",
        title: "Camera",
        price: 49.99,
        picture: camera
    }
]

function getProductData(id) {
    let productData = productsArray.find(product => product.id === id)

    if (productData == undefined) {
        console.log(`Product data does not exist for ID: ${id}`);
        return undefined;
    }

    return productData;
}

export { productsArray, getProductData };