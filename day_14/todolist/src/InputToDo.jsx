import React, { useState } from 'react'

const InputToDo = ({ inputHandler }) => {
    const [value, setValue] = useState("");
    const addTask = () => {
        if (value.trim() === "") return;
        inputHandler(value);
        setValue("");
    }
    return (
        <div className="input-todo">
            <input type="text" name="input-todo" id="input-todo"
                value={value}
                onChange={(e) => setValue(e.target.value)} />
            <button onClick={addTask}>ADD</button>
        </div>
    )
}

export default InputToDo