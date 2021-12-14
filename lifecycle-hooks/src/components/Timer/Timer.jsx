import { useState, useEffect } from "react";

function Timer() {

    const [count, setCount] = useState(0)

    useEffect(() => {

        setInterval(() => {
            console.log('INTERVALO VA!')
            setCount(prevCount => prevCount + 1)
        }, 1000)

    }, [])          // => array vacío: mounting phase

    return (
        <div className="Timer">
            <h2>Timer</h2>
            <h3>{count}</h3>
        </div>
    );
}

export default Timer;
