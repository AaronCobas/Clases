class Usuario{
    constructor(nombre,apellido){
        this.nombre = nombre;
        this.apellido = apellido;
        this.libros = [];
        this.mascotas = [];
    }
    getFullName = () =>{
        console.log(`El nombre completo de este usuario es ${this.nombre} ${this.apellido}`)
    }
    addMascota = (mascota) =>{
        this.mascotas.push(mascota)
    }
    countMascotas = () =>{
        console.log(`Este usuario tiene ${this.mascotas.length} mascotas`)
    }
    addBook = (nombre, autor) => {
        this.libros.push({nombre, autor})
    }
    getBooknames = () =>{
        console.log(this.libros.map(libro => libro.nombre))
    }
}
const usuario1 = new Usuario("Pedro", "Fernandez");
usuario1.getFullName()
usuario1.addMascota("Firulais")
usuario1.addMascota("Michifus")
usuario1.countMascotas()
usuario1.addBook("Cien años de soledad", "Gabriel García Márquez")
usuario1.addBook("1984", "George Orwell")
usuario1.getBooknames()