import { useRef, useState } from "react"

export default function PhoneInput(props){
    const phoneInput = useRef()
    const [fail, setFail] = useState(false)
    const bogstavTjek = /[a-z +æ +ø +å +.+,]/;
    function inputHandler(){
       const inputData = phoneInput.current.value
      if(bogstavTjek.test(inputData)){
       
        const newInput = inputData.slice(0 ,-1)
        phoneInput.current.value = newInput
      }

       
    }
    return(
    
        <input style={ fail == true ?{color: "red"}: {color: "black"}} ref={phoneInput} type="tel" onChange={inputHandler} {...props} />
        
        
    )
}