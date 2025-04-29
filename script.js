var inputTarea = document.getElementById("tarea");
//var prioridad =
var btn = document.getElementById("agregar");
var lista= document.getElementById("lista");

btn.onclick = function(){
    elemento= inputTarea.value; //tomo valor
    li = document.createElement("li");
    li.textContent = elemento; //lo lleno
    lista.appendChild (li); //ultimo en la lista
//modificar
    var btnEliminar = document.createElement("span");//span misma linea
    btnEliminar.innerHTML = `<button type="reset" id="reset">Eliminar<button/>`;
    li.appendChild(btnEliminar);

    //funcion a eliminar
    btnEliminar.onclick= function(){
        li.remove();
    }
}