var inputTarea = document.getElementById("tarea");
var btn = document.getElementById("agregar");
var lista = document.getElementById("lista");
var selectPrioridad = document.getElementById("prioridad");

let tareas = []; 

btn.onclick = function() {
    let textoTarea = inputTarea.value.trim();
    if (textoTarea === '') return;

    const nuevaTarea = {
        id: Date.now(),
        texto: textoTarea,
        prioridad: parseInt(selectPrioridad.value),
        fechaCreacion: new Date(), 
        fechaModificacion: new Date() // Inicialmente igual a creación
    };
    
    tareas.push(nuevaTarea);
    mostrarTareas(); // Actualizar la lista
    inputTarea.value = '';
    selectPrioridad.value = '1';
};

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

       
        li.querySelector('.eliminar').onclick = function() {
        tareas = tareas.filter(function(t) {
        return t.id !== tarea.id;
        });
        mostrarTareas();
        };


        
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


function formatearFecha(fecha) {
    return fecha.toLocaleString()
}


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
