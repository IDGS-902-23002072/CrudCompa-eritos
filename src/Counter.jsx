import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, incrementByAmount, reset } from "./counterSlice";

export default function Counter() {
    const value = useSelector((state) => state.counter.value);
    const dispatch = useDispatch();
    const [amount, setAmount] = useState(10);

    return(
        <div className="card">
            <h1>Contador de redux con mi profe</h1>
            <h2>Valor: {value}</h2>

            <div className="rows">
            <button onClick={() => dispatch(increment())}>Incrementar +1</button>
            <button onClick={() => dispatch(decrement())}>Decrementar -1</button>
            <button onClick={() => dispatch(reset())}>Resetar</button>
            </div>

            <div className="rows">
                <input type="number" value={amount} onChange={(e) => setAmount(Number(e.target.value))}/>

                <button onClick={() => dispatch(incrementByAmount(amount))}>
                    Sumar al contador la cantidad
                </button>
            </div>
        </div>
    );
}

