class Libro{

    constructor(titulo,autor){
        this.titulo=titulo;
        this.autor=autor;
        this.prestado=false;
    }
}

class usuario{
    constructor(nombre){
        this.nombre=nombre;
        this.librosPrestadosUsuario=[];
    }

}

    class RegistroUsuario{
        constructor(){
            this.usuarios=[];
        }

        agregarUsuario(nombre){

            const usuarioNuevo = new usuario(nombre);
            this.usuarios.push(usuarioNuevo);
        }
        agregarLibroUsuario(usuario,libro){
            this.usuarios.forEach(usuario1 =>{
                if(usuario1.nombre===usuario){
                    usuario1.librosPrestadosUsuario.push(libro);
                    console.log("Libro añadido a "+usuario1.nombre);
                }
            
        });
    
    
    }

    devolucionLibro(nombreLibro,usuario){
        this.usuarios.forEach(usuario1=>{
            if(usuario1.nombre===usuario.value){
                usuario1.librosPrestadosUsuario = usuario1.librosPrestadosUsuario.filter(libro => libro !== nombreLibro);
                console.log(`El libro "${nombreLibro}" ha sido devuelto por ${usuario.value}.`);

            }

        });
    }

        usuarioEncontrado(usuario){
            let encontrado = false;
            this.usuarios.forEach(usuario1 =>{
                if(usuario1.nombre===usuario){
                    encontrado=true;
                    
                }
            
        });
        return encontrado;

        }

        actualizarSelectorLibrosDevolver(usuario){
            const selector = document.getElementById("selectorLibrosDevolver"); // Obtiene el elemento select del DOM.
            selector.innerHTML = "<option value=''>Seleccione un libro a devolver</option>"; // Reinicia el contenido del selector.
            // Itera sobre cada estudiante y añade una opción al selector para cada uno.
            this.usuarios.forEach(usuario1=>{
                if(usuario1.nombre===usuario){
                    const librosPrestados = usuario1.librosPrestadosUsuario;
                   

                    librosPrestados.forEach(libro => {
                        const opcion = document.createElement("option"); // Crea un nuevo elemento option para el select.
                        opcion.textContent = "Titulo:"+libro // Establece el texto visible de la opción al nombre del estudiante.
                        selector.appendChild(opcion); // Añade la opción al selector.
                    });
                    
                    
                    
                }

            });
            
            
            
           
        }

}


class RegistroLibros{


    constructor(){
        this.libros=[]; //array de libros
    }

    agregarLibro(titulo,autor){
        
        const libro = new Libro(titulo,autor);
        this.libros.push(libro);
        this.actualizarSelectorLibros();
       
       
    }

    muestraLibrosConsola(){
        console.log("Registro de la biblioteca:")
        this.libros.forEach(libro=>{
            console.log("Titulo:"+libro.titulo+" | Autor:"+libro.autor+" | Disponibilidad:"+(libro.prestado? "Prestado":"Disponible"))
        

        });

        
    }

    selectorLibrosDisponibles(){
        const selector = document.getElementById("selectorLibrosDisponibles"); // Obtiene el elemento select del DOM.
        selector.innerHTML = "<option value=''>Seleccione un libro</option>"; // Reinicia el contenido del selector.
        // Itera sobre cada estudiante y añade una opción al selector para cada uno.
        this.libros.forEach(libro => {
            if(libro.prestado===false){

            
            const opcion = document.createElement("option"); // Crea un nuevo elemento option para el select.
            opcion.textContent = "Titulo:"+libro.titulo+" | Autor:"+libro.autor+" | Disponibilidad:"+(libro.prestado? "Prestado":"Disponible"); // Establece el texto visible de la opción al nombre del estudiante.
            selector.appendChild(opcion); // Añade la opción al selector.
        }
        });
    }

   

   devolucionLibro(nombre){
    this.libros.forEach(libro =>{
        if(libro.titulo===nombre){
            libro.prestado=false;
            console.log("Devuelto con exito");
        }

    })
   }

    actualizarSelectorLibros(){
        const selector = document.getElementById("selectorLibros"); // Obtiene el elemento select del DOM.
        selector.innerHTML = "<option value=''>Seleccione un libro</option>"; // Reinicia el contenido del selector.
        // Itera sobre cada estudiante y añade una opción al selector para cada uno.
        this.libros.forEach(libro => {
            const opcion = document.createElement("option"); // Crea un nuevo elemento option para el select.
            opcion.textContent = "Titulo:"+libro.titulo+" | Autor:"+libro.autor+" | Disponibilidad:"+(libro.prestado? "Prestado":"Disponible"); // Establece el texto visible de la opción al nombre del estudiante.
            selector.appendChild(opcion); // Añade la opción al selector.
        });
    }

    pedirPrestadoLibro(nombre) {
        var libroEncontrado=false;
        this.libros.forEach(libro => {
            if(libro.titulo===nombre&&libro.prestado===false){
                alert("Se le acaba de entregar el libro")
                libroEncontrado=true;
                libro.prestado=true;
                
            }
            
            if(libro.titulo===nombre&&libro.prestado===true&&libroEncontrado===false){
                    alert("El libro ya esta prestado")
                    libroEncontrado=true;
            }
            
            
        });

        

        this.actualizarSelectorLibros();

     

        if(libroEncontrado===false){
            alert("No ha sido posible encontrar el libro")
        }
    }

    

}



const registro1 = new RegistroLibros();
const usuario1= new RegistroUsuario();

document.getElementById("agregarLibro").addEventListener("click",() =>{
    var tituloInput = document.getElementById('titulo');
    var autorInput = document.getElementById('autor');
    
    if(tituloInput.value.trim()!=="" && autorInput.value.trim()!==""){

        registro1.agregarLibro(tituloInput.value,autorInput.value);

        tituloInput.value = '';
        autorInput.value = '';
        alert("Libro introducido")
    }else{
        alert("Por favor,introduzca todos los datos");
    }
    registro1.selectorLibrosDisponibles();


});


document.getElementById("agregarUsuario").addEventListener("click",() =>{
    const usuario=document.getElementById("usuario");
    if(usuario.value.trim()===""){
        alert("Por favor,introduzca un nombre de usuario")
    }else{
        usuario1.agregarUsuario(usuario.value);
        console.log("Usuario introducido");
        usuario.value="";
        alert("Usuario introducido")

    }




});

let botones = document.getElementById("botonesLibros");
let devolver = document.getElementById("DevolverLibro");
let prestar = document.getElementById("PrestarLibro");
let usuarioIntroducido = document.getElementById("usuarioPrestarLibro");

//Boton para devolver libros
document.getElementById("Devolver").addEventListener("click",() =>{

botones.style.display='none';
devolver.style.display='block';

});

document.getElementById("Pedir").addEventListener("click",() =>{
    botones.style.display='none';
    prestar.style.display='block'; 
    registro1.selectorLibrosDisponibles();
 

});


let nombreUsuario = document.getElementById("usuarioDevolverLibro");

document.getElementById("botonDevolverLibro").addEventListener("click",() =>{

    let encontrado = usuario1.usuarioEncontrado(nombreUsuario.value);



    if(encontrado){
        let boton = document.getElementById("boton1") ;
        boton.style.display="none"
        usuario1.actualizarSelectorLibrosDevolver(nombreUsuario.value);
        let mostrarDevolucion= document.getElementById("mostrarDevolucion");
        mostrarDevolucion.style.display="block"
        alert(`Esta entrando en la biblioteca de ${nombreUsuario.value}`);
    }else{
        alert("No se ha encontrado el usuario")
        nombreUsuario.value="";
    }


});



document.getElementById("pedirDevolverLibro").addEventListener("click",() =>{
    let mostrarDevolucion = document.getElementById("mostrarDevolucion");
    let selector = document.getElementById("selectorLibrosDevolver");
    
    if (selector !=="Seleccione un libro a devolver") { // Verificar si el selector no es undefined y si tiene opciones

        let opcionSeleccionada = selector.options[selector.selectedIndex].textContent.trim().split(":");
        if (opcionSeleccionada.length > 1) { // Verificar si hay al menos dos partes separadas por ":"
            registro1.devolucionLibro(opcionSeleccionada[1].trim());
            usuario1.devolucionLibro(opcionSeleccionada[1].trim(),nombreUsuario);
            registro1.actualizarSelectorLibros();
            registro1.selectorLibrosDisponibles();
            usuario1.actualizarSelectorLibrosDevolver(nombreUsuario);
            let botones = document.getElementById("botonesLibros");
            botones.style.display="block";
            let devolverLibro = document.getElementById("DevolverLibro");
            devolverLibro.style.display="none";
            mostrarDevolucion.style.display="none";
            alert("Libro devuelto con exito")
        } else {
            alert("Debe escoger un libro válido");
            mostrarDevolucion.style.display="block"
        }
    } else {
        alert("Debe escoger un libro");
        mostrarDevolucion.style.display="block"
    }
});

document.getElementById("pedirPrestadoLibro").addEventListener("click",() =>{
       
    let encontrado=usuario1.usuarioEncontrado(usuarioIntroducido.value);
    let selector = document.getElementById("selectorLibrosDisponibles");
    let opcionSeleccionada = selector.options[selector.selectedIndex];
    if(opcionSeleccionada.textContent.trim()!=="Seleccione un libro"){
        if(encontrado){
             //Consigo la opcion seleccionada
            let partes = opcionSeleccionada.textContent.split("|"); 
            let tituloMostrar=partes[0].split(":"); //Consigo solo la palabra en la que se encuentra el titulo del libro
            let nombreLibro=tituloMostrar[1].trim();
            registro1.pedirPrestadoLibro(nombreLibro);
            usuario1.agregarLibroUsuario(usuarioIntroducido.value,nombreLibro);
        }else{
            alert("No se ha podido encontrar el usuario");
        }
        let usuarioPrestar1 = document.getElementById("usuarioPrestarLibro");
        usuarioPrestar1.value="";
        botones.style.display="block";
        prestar.style.display="none";
    }else{
        alert("Seleccione un libro")
    }
   
    
    


});

document.getElementById("Inicio").addEventListener("click",() =>{
    let devolver = document.getElementById("DevolverLibro");
    devolver.style.display="none";

    let prestar = document.getElementById("PrestarLibro");
    prestar.style.display="none";

    let botones = document.getElementById("botonesLibros");
    botones.style.display="block";

    let usuario = document.getElementById("usuarioDevolverLibro")
    usuario.value=""

    let boton1=document.getElementById("mostrarDevolucion");
    boton1.style.display="none";

});

document.getElementById("Devolver").addEventListener("click",()=>{

    let boton = document.getElementById("boton1") ;
    boton.style.display="block"

});

document.getElementById("selectorLibros").addEventListener("click",()=>{

registro1.muestraLibrosConsola();


});
