import React, { useState } from 'react'
const Count = () => {
    const [val, setValue] = useState(0);
    const decrement = () => setValue(val - 1);
    const increment = () => setValue(val + 1);
    const resetVal = () => setValue(0);
    return (
        <div id="counter">
            <button onClick={()=>setValue(val-1)}>-</button>
            <h4>{val}</h4>
            <button onClick={()=>setValue(val+1)} >+</button>
            <button onClick={()=>setValue(0)}>reset</button>
        </div>
    )
}
export default Count