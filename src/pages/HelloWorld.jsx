import React, {useState} from 'react';

const HelloWorld = () => {
    const [value, setValue] = useState('')
    const [visible, setVisible] = useState(false)

    const toggle = () => value === 'hello' && setVisible(prev => !prev)

    const change = e => setValue(e.target.value)

    return (
        <div>
            <input onChange={change} id={"search"} type="text"/>
            <button id={"toggle"} onClick={toggle}>HELLO WORLD</button>
            {visible && <h1 id="hello">HELLO WORLD</h1>}
        </div>
    );
};

export default HelloWorld;