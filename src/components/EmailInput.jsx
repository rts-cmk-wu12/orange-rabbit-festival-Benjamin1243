import { useRef } from "react"

export default function Email(props){
    const emailInput = useRef("")
    
    console.log(props)
    return(
        <input ref={emailInput}  type="email" {...props} />
    )
}