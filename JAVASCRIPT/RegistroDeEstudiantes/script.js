let alumnos =[];



let modulosDe = document.getElementById("modulosDe");
let registro = document.getElementById("registro");
let modulos1 = document.getElementById("modulos");

    let alumno={

    };

function introducirNombre(){
    alumno={
        nombre: "",
        modulos: []
    };

    let nombre = document.getElementById("nombre");
    nombre=document.getElementById("nombre").value;
    alumno.nombre=nombre;
    document.getElementById("nombre").value="";
    modulosDe.innerHTML=`Introduce los módulos de ${nombre}`;
    modulos1.style.display='block';
    registro.style.display="none";

   
    
}

function introducirModulos(){
    let modulo = document.getElementById("modulo").value;
    alumno.modulos.push(modulo);
    document.getElementById("modulo").value='';
    
    }





function siguienteAlumno(){
alumnos.push(alumno);
registro.style.display="block";
modulos1.style.display="none";

}

function mostrarAlumnos(){
    let texto1="";

    for(var i = 0;i<alumnos.length;i++){
        texto1=texto1+"\nNombre:"+alumnos[i].nombre;
       // console.log("nombre:"+alumnos[i].nombre);
        // console.log("modulos")
         texto1=texto1+"\nModulos:";
        for(var j = 0; j<alumnos[i].modulos.length;j++){
            texto1=texto1+"\n-"+alumnos[i].modulos[j];
          //  console.log("-"+alumnos[i].modulos[j])
        } 
        texto1=texto1+"\n---------------\n"
    }
    
    let resultado = document.getElementById("resultado");
    resultado.innerText=texto1;
}