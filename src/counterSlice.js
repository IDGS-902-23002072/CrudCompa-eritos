
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    alumnos: [
        {
            id: 1,
            nombre: "Omar",
            edad: 21
        }
    ]
};

export const counterReducer = createSlice({
    name: "counter",
    initialState,
    reducers: {

        // Agregar alumno
        increment: (state, action) => {
            state.alumnos.push(action.payload);
        },

        // Eliminar alumno
        decrement: (state, action) => {
            state.alumnos = state.alumnos.filter(
                alumno => alumno.id !== action.payload
            );
        },

        // Eliminar todos los alumnos
        reset: (state) => {
            state.alumnos = [];
        },

        incrementByAmount: (state, action) => {
            const alumno = state.alumnos.find(
                alumno => alumno.id === action.payload.id
            );

            if (alumno) {
                alumno.nombre = action.payload.nombre;
                alumno.edad = action.payload.edad;
            }
        }
    }
});

export const {
    increment,
    decrement,
    reset,
    incrementByAmount
} = counterReducer.actions;

export default counterReducer.reducer;
