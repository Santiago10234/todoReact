const Tareas = ({titulo,completadas,eliminar,estado})=>{
    
    return(
        <div className="tareas">
            <input className="checkbox" type="checkbox" checked={estado} onChange={completadas}/>
            <p className="nombreTarea">{titulo}</p>
            <button onClick={eliminar} type="button">Eliminar</button>
        </div>
    )
}
export default Tareas
