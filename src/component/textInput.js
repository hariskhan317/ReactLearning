import { useState , useEffect } from "react"
export const Textinput = () =>{
    const [text,setText]  = useState('');

    useEffect(()=>{
        console.log("MOunted")
        
        return ()=>{
            console.log("Unmounted")
        }
      })
    return(
        <>
            <input type="" onChange={((event) => { setText(event.target.value)})} />
            <p>{text}</p>
        </>
    )
}