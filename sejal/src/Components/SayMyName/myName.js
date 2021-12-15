import React, {useState} from 'react'
import "./myName.css"
function MyName() {
    const [whoBeautiful,setWhoBeautiful] = useState("");
    const [color,setColor] = useState("");
    return (
        <>
        <button onClick = { () => setWhoBeautiful("Sejal is the most beautiful girl you'll ever meet❤")}>Who's Beautiful?</button>
        <h1 className={color}>{ whoBeautiful}</h1>
        <button onClick = {() => setColor("heading")}>Change color</button>
        </>

    )
}

export default MyName
