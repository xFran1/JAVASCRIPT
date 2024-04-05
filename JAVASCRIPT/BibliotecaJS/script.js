class Libro{

    constructor(titulo,autor){
        this.titulo=titulo;
        this.autor=autor;
        this.prestado=false;
    }
}

class RegistroLibros{

    constructor(){
        this.libros=[];
    }

    agregarLibro(titulo,autor){
        const libro = new Libro(titulo,autor);
        this.libros.push(libro);
        this.actualizarSelectorLibros();
    }

    actualizarSelectorLibros(){
        const selector = document.getElementById("selectorLibros"); // Obtiene el elemento select del DOM.
        selector.innerHTML = "<option value=''>Seleccione un libro</option>"; // Reinicia el contenido del selector.
        // Itera sobre cada estudiante y añade una opción al selector para cada uno.
        this.libros.forEach(libro => {
            const opcion = document.createElement("option"); // Crea un nuevo elemento option para el select.
            opcion.value = libro.titulo; // Establece el valor de la opción al nombre del estudiante.
            opcion.textContent = libro.titulo; // Establece el texto visible de la opción al nombre del estudiante.
            selector.appendChild(opcion); // Añade la opción al selector.
        });
    }


}

const registro = new RegistroLibros();
