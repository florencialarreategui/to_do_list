var inputTarea = document.getElementById("tarea");
var btn = document.getElementById("agregar");
var lista = document.getElementById("lista");
var selectPrioridad = document.getElementById("prioridad");

btn.onclick = function() {
    let textoTarea = inputTarea.value.trim();
    if (textoTarea === '') return; // No permitir agregar tarea vacía

    let prioridad = selectPrioridad.value;

    let li = document.createElement("li");
    li.textContent = `Tarea: ${textoTarea} - Prioridad: ${prioridad}`; 

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Eliminar';
    deleteBtn.onclick = function() {
        li.remove();
    };

    li.appendChild(deleteBtn);
    lista.appendChild(li);

    inputTarea.value = ''; // Limpiar el input
    selectPrioridad.value = '1'; 
}
