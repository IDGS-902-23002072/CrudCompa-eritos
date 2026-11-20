
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
    increment,
    reset,
    incrementByAmount
} from "./counterSlice";

import TablaCompaneritos from "./components/TablaCompaneritos";

function App() {

    const alumnos = useSelector((state) => state.counter.alumnos);
    const dispatch = useDispatch();

    const [nombre, setNombre] = useState("");
    const [edad, setEdad] = useState("");
    const [idEditar, setIdEditar] = useState(null);

    // Agregar o actualizar alumno
    const guardarAlumno = (e) => {
        e.preventDefault();

        if (!nombre.trim() || edad === "" || Number(edad) <= 0) {
            alert("Completa los campos correctamente");
            return;
        }

        if (idEditar !== null) {
            // Actualizar alumno
            dispatch(incrementByAmount({
                id: idEditar,
                nombre: nombre.trim(),
                edad: Number(edad)
            }));

            setIdEditar(null);

        } else {
            // Agregar alumno
            dispatch(increment({
                id: Date.now(),
                nombre: nombre.trim(),
                edad: Number(edad)
            }));
        }

        // Limpiar inputs
        setNombre("");
        setEdad("");
    };

    // Cargar datos del alumno en los inputs
    const editarAlumno = (alumno) => {
        setIdEditar(alumno.id);
        setNombre(alumno.nombre);
        setEdad(String(alumno.edad));
    };

    // Cancelar edición
    const cancelarEdicion = () => {
        setIdEditar(null);
        setNombre("");
        setEdad("");
    };

    return (
        <div>
            <h2>Lista de alumnos</h2>

            <form onSubmit={guardarAlumno}>

                <input
                    type="text"
                    placeholder="Nombre"
                    value={nombre}
                    onChange={(e) => setNombre(e.target.value)}
                />

                <input
                    type="number"
                    placeholder="Edad"
                    value={edad}
                    onChange={(e) => setEdad(e.target.value)}
                />

                <button type="submit">
                    {idEditar !== null ? "Actualizar alumno" : "Agregar alumno"}
                </button>

                {idEditar !== null && (
                    <button type="button" onClick={cancelarEdicion}>
                        Cancelar
                    </button>
                )}

            </form>

            <button onClick={() => dispatch(reset())}>
                Eliminar todos
            </button>

            <TablaCompaneritos
                people={alumnos}
                editarAlumno={editarAlumno}
            />
        </div>
    );
}

export default App;
