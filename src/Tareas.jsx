const Tareas = ({titulo,completadas,eliminar})=>{
    return(
        <div className="tareas">
            <input type="checkbox"/>
            <p className="nombreTarea">{titulo}</p>
            <button onClick={eliminar} type="button">Eliminar</button>
        </div>
    )
}
export default Tareas