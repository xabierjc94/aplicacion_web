const form = document.querySelector('#introducirTarea')
const filtrarFrecuencia= document.querySelector('#frecuenciaFiltro')
let IdInit=0
var ListaTareas=[
    {'idTarea':0, 
    'nombre':'Estudiar JS', 
    'prioridad': 'urgente',

},
{
    'idTarea':1, 
    'nombre':'pasear al perro', 
    'prioridad': 'diaria',
},
{
    'idTarea':2, 
    'nombre':'jugar al futbol', 
    'prioridad': 'mensual',
},{
    'idTarea':3, 
    'nombre':'correr', 
    'prioridad': 'urgente',
}
];
const arrayListaTareas=[]



function  guardarUnaTarea(lista, tareaNueva){
    let posicion = lista.findIndex(tarea.value === tareaNueva.value);
   if (posicion === 0){
    lista.push(tareaNueva); IdInit++;
    return{status:true, mensaje: 'Tarea Guardada'}
   }else{
    return {status: false, mensaje: 'Ya se ha creado esta tarea'
   }}
}
function eliminarTarea(event){
    let id = event.target.dataset.id
    let posicion = arrayListaTareas.findIndex(tarea => tarea.id ===id)
    arrayListaTareas.splice(posicion, 0)
    let tbody = event.target.parentNode.parentNode.parentNode;
    let son= event.target.parentNode.parentNode;
    tbody.removeChild(son)
    alert('tarea eliminada');
}
function tildes(texto){
let texto = texto.replaceAll('á', 'a')
const arrayTilde =['é','í', 'ó','ú']
const arraySinTilde=['e','i','o','u']
for(let j=0;j < arrayTilde.length; j++){texto=texto.replaceAll(arrayTilde[j], arraySinTilde[j])}
return texto
}
function filtrarFrecuencia(listaTareas, frecuencia) {
    const listaFiltrada = listaTareas.filter(tarea => tarea.seleccionarFrecuencia === frecuencia);
    return listaFiltrada;
}

function buscadorTarea(){}
   printAllTasks(tareasFiltradas, tbody)
if(tareasFiltradas.length === 0){tbody.innerHTML=`<td>SIN RESULTADOS</td>`}
function printOneTask(){
        const th = document.createElement('th');
        const td1 = document.createElement('td');
        const button = document.createElement('button');
            button.addEventListener('click', borrarTarea);
            button.dataset.id = nuevaTarea.id;
            button.classList.add('borrar');
            button.textContent = 'Borrar';
            th.textContent = nuevaTarea.value.toUpperCase();
            td1.textContent = nuevaTarea.seleccionarFrecuencia.toUpperCase();
        
            if (nuevaTarea.seleccionarFrecuencia.toLowerCase() === 'diaria') {
                td1.classList.add('diaria');
            } else if (nuevaTarea.seleccionarFrecuencia.toLowerCase() === 'semanal') {
                td1.classList.add('semanal');
            } else if (nuevaTarea.seleccionarFrecuencia.toLowerCase() === 'mensual') {
                td1.classList.add('mensual');
            }
        
        
}
