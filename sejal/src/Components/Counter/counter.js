import React, {useState} from 'react'

const Counter = () => {
    const [count, setCount] = useState(0);
    return (
        <>
        <h1>{count >= 0 ? count : 0}</h1>
        <button onClick={() => setCount( count + 1)}>Increment</button>        
        <button onClick={() => setCount( count - 1)}>Decrement</button>        
        <button onClick={() => setCount( 0 )}>Reset</button>        
    
        </>
        
    )
}

export default Counter
