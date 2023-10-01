// Prototipos
function Student(name, age, cursosAprobados) {
    this.name = name;
    this.age = age;
    this.cursosAprobados = cursosAprobados;
  }
  Student.prototype.aprobarCurso = function (nuevoCursito) {
    this.cursosAprobados.push(nuevoCursito);
  }
  
  const juanita = new Student(
    "Juanita Alejandra",
    15,
    [
      "Curso de Introducción a la Producción de Videojuegos",
      "Curso de Creación de Personajes",
    ],
  );
  
  // Prototipos con la sintaxis de clases
  class Student2 {
    constructor({
      name,
      cursosAprobados = [],
      age,
      email,
    }) {
      this.name = name;
      this.email = email;
      this.age = age;
      this.cursosAprobados = cursosAprobados;
    }
  
    aprobarCurso(nuevoCursito) {
      this.cursosAprobados.push(nuevoCursito);
    }
  }
  
  const miguelito = new Student2({
    name: "Miguel",
    age: 28,
    email: "miguelito@platzi.com",
  });