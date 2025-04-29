var inputTarea = document.getElementById("tarea");
var btn = document.getElementById("agregar");
var lista= document.getElementById("lista");
var selectPrioridad = document.getElementById("prioridad");

btn.onclick = function(){
    let elemento= inputTarea.value; //tomo valor
    let li = document.createElement("li");
    li.textContent = elemento; //lo lleno
    lista.appendChild (li); //ultimo en la lista

    //modificar
   let valorSeleccionado = selectPrioridad.value;

//para eliminar
    var btnEliminar = document.createElement("span");//span misma linea
    btnEliminar.textContent= "Eliminar";
    li.appendChild(btnEliminar);

    btnEliminar.onclick= function(){
        li.remove();
    }
}