// Define una clase para representar a un estudiante individual.
class Estudiante {
    // Constructor de la clase Estudiante.
    constructor(nombre) {
        this.nombre = nombre; // Almacena el nombre del estudiante.
        this.cursos = []; // Inicializa un arreglo vacío para los cursos en los que el estudiante se inscribirá.
    }

    // Método para añadir un curso al arreglo de cursos del estudiante.
    inscribirCurso(curso) {
        this.cursos.push(curso); // Añade el curso especificado al arreglo de cursos.
    }
}


// Define una clase para gestionar el registro completo de estudiantes.
class RegistroEstudiantes {
    constructor() {
        this.estudiantes = []; // Inicializa un arreglo vacío para almacenar los objetos Estudiante.
    }

    // Método para agregar un nuevo estudiante al registro.
    agregarEstudiante(nombre) {
        const estudiante = new Estudiante(nombre); // Crea un nuevo objeto Estudiante.
        this.estudiantes.push(estudiante); // Añade el objeto Estudiante al arreglo de estudiantes.
        this.actualizarSelectorEstudiantes(); // Actualiza el dropdown de estudiantes en la interfaz de usuario.
    }

    // Método para inscribir un estudiante existente en un curso.
    inscribirEstudianteCurso(nombreEstudiante, curso) {
        // Busca al estudiante por su nombre en el arreglo de estudiantes.
        const estudiante = this.estudiantes.find(est => est.nombre === nombreEstudiante);
        if(estudiante) {
            estudiante.inscribirCurso(curso); // Si el estudiante existe, lo inscribe en el curso.
        } else {
            alert("Estudiante no encontrado"); // Si no se encuentra, muestra una alerta.
        }
    }

    // Método para listar todos los estudiantes y sus cursos en la interfaz de usuario.
    listarEstudiantes() {
        const lista = document.getElementById("listaEstudiantes"); // Obtiene el elemento del DOM donde se mostrará la lista.
        lista.innerHTML = ""; // Limpia la lista actual antes de mostrar la nueva.
        // Itera sobre cada estudiante y crea un elemento DOM para mostrar su información.
        this.estudiantes.forEach(estudiante => {
            const item = document.createElement("div"); // Crea un nuevo div para cada estudiante.
            // Establece el contenido del div con el nombre del estudiante y los cursos en los que está inscrito.
            item.textContent = `Estudiante: ${estudiante.nombre}, Cursos: ${estudiante.cursos.join(", ")}`;
            lista.appendChild(item); // Añade el div a la lista en el DOM.
        });
    }

    // Método para actualizar el dropdown (selector) de estudiantes en la interfaz de usuario.
    actualizarSelectorEstudiantes() {
        const selector = document.getElementById("selectorEstudiantes"); // Obtiene el elemento select del DOM.
        selector.innerHTML = "<option value=''>Seleccione un estudiante</option>"; // Reinicia el contenido del selector.
        // Itera sobre cada estudiante y añade una opción al selector para cada uno.
        this.estudiantes.forEach(estudiante => {
            const opcion = document.createElement("option"); // Crea un nuevo elemento option para el select.
            opcion.value = estudiante.nombre; // Establece el valor de la opción al nombre del estudiante.
            opcion.textContent = estudiante.nombre; // Establece el texto visible de la opción al nombre del estudiante.
            selector.appendChild(opcion); // Añade la opción al selector.
        });
    }
}

// Crea una instancia de la clase RegistroEstudiantes.
const registro = new RegistroEstudiantes();

// Agrega un event listener al botón "Agregar Estudiante".
document.getElementById("agregarEstudiante").addEventListener("click", () => {
    const nombre = document.getElementById("nombreEstudiante").value.trim(); // Obtiene y limpia el nombre ingresado.
    if(nombre) {
        registro.agregarEstudiante(nombre); // Agrega el estudiante si se ingresó un nombre.
        document.getElementById("nombreEstudiante").value = ""; // Limpia el campo de entrada.
    } else {
        alert("Por favor, ingrese un nombre de estudiante válido."); // Muestra una alerta si el campo está vacío.
    }
});

// Agrega un event listener al botón "Inscribir Curso".
document.getElementById("inscribirCurso").addEventListener("click", () => {
    const nombreEstudiante = document.getElementById("selectorEstudiantes").value; // Obtiene el estudiante seleccionado.
    const curso = document.getElementById("nombreCurso").value.trim(); // Obtiene y limpia el nombre del curso ingresado.
    if(nombreEstudiante && curso) {
        registro.inscribirEstudianteCurso(nombreEstudiante, curso); // Inscribir el curso si se seleccionó un estudiante y se ingresó un curso.
        document.getElementById("nombreCurso").value = ""; // Limpia el campo de entrada del curso.
    } else {
        alert("Por favor, seleccione un estudiante y escriba un nombre de curso válido."); // Muestra una alerta si falta información.
    }
});

// Agrega un event listener al botón "Listar Estudiantes".
document.getElementById("listarEstudiantes").addEventListener("click", () => {
    registro.listarEstudiantes(); // Llama al método para listar todos los estudiantes y sus cursos.
});