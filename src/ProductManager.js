//importamos FS
import fs from "fs"

//Creamos la clase con su constructor
class ProductManager{
    constructor(){
        this.products = [];
        this.path = "../Productos.json"
    }

    //Metodo para agregar productos 
    addProduct = (product) => {
        if (fs.existsSync(this.path)) {
            let Productos = fs.readFileSync(this.path, "utf-8")
            let producto = JSON.parse(Productos);
            if (producto.some(products => products.code == product.code)) {
                console.log("El producto ya existe")
            }
            else {
                product.id = producto.length + 1;
                producto.push(product)
                fs.writeFileSync(this.path, JSON.stringify(producto))
            }
        } else {
            //creamos por primera vez el archivo
            product.id = this.products.length + 1;
            this.products.push(product);
            fs.writeFileSync(this.path, JSON.stringify(this.products))
        }
        
    }

    //metodo para mostrar todos los productos
    getProducts = () =>{
        if(fs.existsSync(this.path)){
            let Productos = fs.readFileSync(this.path, "utf-8")
            let producto = JSON.parse(Productos);
            console.log(producto);
        }
    }

    //metodo para mostrar el producto filtrado por id
    getProductsByID = (id) =>{
        let Productos = fs.readFileSync(this.path, "utf-8")
        let producto = JSON.parse(Productos);
        if(producto.some(product => product.id == id)){
            let productFilter = producto.filter(product => product.id == id)
            console.log(productFilter);
        }
    }

    //Metodo para actualizar los campos del producto o agregarlos.
    updateProductByID = (id, campo, actualizacion) => {
        let Productos = fs.readFileSync(this.path, 'utf-8');
        let producto = JSON.parse(Productos);

        producto.find(product => {
            if (product.id === id) {
                product[campo] = actualizacion;
                fs.writeFileSync(this.path, JSON.stringify(producto));
            }
        });
    }

    //Metodo para eliminar el producto por ID
    deleteProductByID = (id) => {
        let Productos = fs.readFileSync(this.path, 'utf-8');
        let producto = JSON.parse(Productos);
        let productFilter = producto.filter(product => product.id != id)
        fs.writeFileSync(this.path, JSON.stringify(productFilter));
    }
}

let product = new ProductManager();

product.updateProductByID(2, "ultima prueba", "es otra prueba")


//export default ProductManager