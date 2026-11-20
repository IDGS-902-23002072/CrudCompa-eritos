
import { useDispatch } from "react-redux";
import { decrement } from "../counterSlice";

export default function TablaCompaneritos({ people, editarAlumno }) {

    const dispatch = useDispatch();

    return (
        <table>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Nombre</th>
                    <th>Edad</th>
                    <th>Acción</th>
                </tr>
            </thead>

            <tbody>
                {people.map((alumno) => (
                    <tr key={alumno.id}>
                        <td>{alumno.id}</td>
                        <td>{alumno.nombre}</td>
                        <td>{alumno.edad}</td>

                        <td>
                            <button onClick={() => editarAlumno(alumno)}>
                                Editar
                            </button>

                            <button onClick={() => dispatch(decrement(alumno.id))}>
                                Eliminar
                            </button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}
