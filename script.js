var inputTarea = document.getElementById("tarea");
var btn = document.getElementById("agregar");
var lista = document.getElementById("lista");
var selectPrioridad = document.getElementById("prioridad");


let tareas = []; // para almacenar objetos de tarea

btn.onclick = function() {
    let textoTarea = inputTarea.value.trim();
    if (textoTarea === '') return;

    // Crear objeto de tarea
    const nuevaTarea = {
        id: Date.now(), // ID único
        texto: textoTarea,
        prioridad: parseInt(selectPrioridad.value),
        fechaCreacion: new Date(), // Fecha actual al crear
        fechaModificacion: new Date() // Inicialmente igual a creación
    };
    
    tareas.push(nuevaTarea);
    mostrarTareas(); // Actualizar la lista
    inputTarea.value = '';
    selectPrioridad.value = '1';
};

// Función para mostrar tareas (ordenadas)
function mostrarTareas() {
    lista.innerHTML = ''; // Limpiar lista antes de renderizar

    tareas.forEach(tarea => {
        let li = document.createElement("li");
        li.innerHTML = `
            ${tarea.texto} - 
            Prioridad: ${tarea.prioridad} - Creada: ${formatearFecha(tarea.fechaCreacion)} - Modificada: ${formatearFecha(tarea.fechaModificacion)}
            <div id=botones><button class="editar">Editar</button>
            <button class="eliminar">Eliminar</button></div>
        `;

       
        li.querySelector('.eliminar').addEventListener('click', () => {
            tareas = tareas.filter(t => t.id !== tarea.id);
            mostrarTareas();
        });

        
        li.querySelector('.editar').addEventListener('click', () => {
            const nuevoTexto = prompt("Editar tarea:", tarea.texto);
            if (nuevoTexto) {
                tarea.texto = nuevoTexto;
                tarea.fechaModificacion = new Date(); // Actualiza fecha
                mostrarTareas();
            }
        });

        lista.appendChild(li);
    });
}

// Formatear fechas a texto legible
function formatearFecha(fecha) {
    return fecha.toLocaleString('es-ES', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    });
}

// Ordenar tareas
document.getElementById('ordenar').addEventListener('change', (e) => {
    const criterio = e.target.value;
    
    tareas.sort((a, b) => {
        switch(criterio) {
            case 'prioridad-asc': return a.prioridad - b.prioridad;
            case 'prioridad-desc': return b.prioridad - a.prioridad;
            case 'fecha-asc': return b.fechaModificacion - a.fechaModificacion;
            case 'fecha-desc': return a.fechaModificacion - b.fechaModificacion;
            default: return 0;
        }
    });
    
    mostrarTareas();
});
/*
btn.onclick = function() {
    let textoTarea = inputTarea.value.trim();
    if (textoTarea === '') return; // No permitir agregar tarea vacía

    let prioridad = selectPrioridad.value;
    let fecha = selectFecha.value;

    let li = document.createElement("li");
    li.textContent = `Tarea: ${textoTarea} - Prioridad: ${prioridad} - Fecha: ${fecha}`; 

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
*/