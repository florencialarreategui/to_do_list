var inputTarea = document.getElementByid("tarea");
//var prioridad =
var btn = document.getElementById("Agregar");
var lista= document.getElementById("lista");

btn.onclick = function(){
    elemento= inputTarea.value; //tomo valor
    li = document.createElement("li");
    li.textContent = elemento; //lo lleno
    lista.appendChild (li); //ultimo en la lista
}