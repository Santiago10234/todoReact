const Tareas = ({titulo,completadas,eliminar})=>{
    return(
        <>
        <h2>{titulo}</h2>
        <input type="checkbox"/>
        <button onClick={eliminar} type="button">Eliminar</button>
        </>
    )
}
export default Tareas