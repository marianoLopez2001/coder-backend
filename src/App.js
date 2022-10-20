import './App.css';

function App() {
  class Usuario {
    constructor(nombre, apellido) {
      this.nombre = nombre;
      this.apellido = apellido;
      this.libros = []
      this.mascotas = []
    }

    getFullName() {
      return `${this.nombre} ${this.apellido}`;
    };

    addMascota(mascota) {
      this.mascotas.push(mascota)
    }

    countMascotas() {
      return `Número de mascotas: ${this.mascotas.length}`
    }

    addBook(nombre, autor) {
      this.libros.push({ nombre: nombre, autor: autor })
    }

    getBookNames() {
      const arrayNombresLibros = []

      this.libros.map(i => {
        return (arrayNombresLibros.push(i.autor))
      })
      return arrayNombresLibros
    }
  };

  const usuario1 = new Usuario("mariano", "lopez")

  usuario1.addBook("La Odisea", "Homero")
  usuario1.addBook("Hamlet", "Shakespeare")
  usuario1.addMascota("Perrito")

  console.log(usuario1)
  console.log(usuario1.getBookNames());
  console.log(usuario1.countMascotas());

  return (
    <>
      <p>coder-backend</p>
    </>
  )
}

export default App;
