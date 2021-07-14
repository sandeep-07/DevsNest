import React,{useState} from 'react';
import Button from "./Button"
import "./Button.css"

function Buttons() {
    const [a, seta] = useState(0)
    const [b, setb] = useState(0)
    const [c, setc] = useState(0)
    const [d, setd] = useState(0)
    return (
        <div className="outer">
                
            <Button state={a} setstate={seta} />
            <Button state={b} setstate={setb} />
            <Button state={c} setstate={setc} />
            <Button state={d} setstate={setd} />
        </div>
    
    )
}
export default Buttons