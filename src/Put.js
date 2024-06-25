import cargarTareas from "./Get"

async function upCheckBox(id,estado) {
     const nuevoEstado = {
        estado:!estado
     }
    try {
    const respuesta = await fetch(`http://localhost:3000/api/task/${id}`,{
        method:"PUT",
        headers:{
            "Content-type": "application/json"
        },
        body:JSON.stringify(nuevoEstado)
    })
    let data = await respuesta.json()
    await cargarTareas()
    console.log(data)
    } catch (error) {
        console.log(error);
    }
}
export {upCheckBox}