
import { useState } from 'react';

function Counter(props) {

    let [value, setValue] = useState(0);


    let count = 0;
    function increment() {
        // count++;
        // setValue(value++);
        setValue((prev) => prev + 1)

    }
    function deecrement() {
        // count--;
        // setValue(value--);
        setValue((prev) => prev - 1)


    }
    return (

        <div>
            <h1>Counter</h1>
            <button onClick={increment}>+</button>
            <p>{value}</p>
            <button onClick={deecrement}>-</button>
        </div>
    );
}

export default Counter;