import { useEffect, useRef, useState } from "react";


import Email from "../components/EmailInput";
import PhoneInput from "./Phoneinput";
import { DiErlang } from "react-icons/di";



export default function Signup({update}){
    const setUpdate = update.setUpdate
    const [mounted, setMounted] = useState(false);
    const [localData, setLocalData]= useState([])
    const [formData, setFormData] = useState("")
    const [updateData, setupdateData] = useState("")
    let getData = []
    useEffect(()=>{
        getData =  JSON.parse(localStorage.getItem("person"))
        console.log("herer er ")
        if(getData == null){
           
            console.log(getData)
        }
        console.log(getData)
       
        
    }, [updateData])
    useEffect(()=>{
        if (!mounted) {
            setMounted(true);
            return;
          }
          getData =  JSON.parse(localStorage.getItem("person"))
       
          console.log(getData) 
          if(getData == null){
            const newThing = [formData]
            localStorage.setItem("person", JSON.stringify(newThing))
            console.log(getData)
        }else{
        console.log(getData)
        getData.push(formData)

        console.log(getData)
         const intoStorage = JSON.stringify(getData)
         localStorage.setItem("person", intoStorage)
        }
        setUpdate(getData)
        setupdateData(updateData + 1)
        
    
    }, [formData])
    const formelement = useRef(null);
    
    function submitHandler(evt){
        evt.preventDefault();
        const data = new FormData(formelement.current);
        console.log(formData)
        setFormData(Object.fromEntries(data.entries()))

    }
    return(
        <>
        <h1>Sign up</h1>
        <form onSubmit={submitHandler } ref={formelement} className="signupForm">
            <div className="signupForm__div">
            <label htmlFor="name">Your Name</label>
            <input className="signupForm__input" name="name" type="text" placeholder="first name" />
            </div>
            <div className="signupForm__div">
            <label htmlFor="emial">Email:</label>
            <Email className="signupForm__input" name="email" placeholder="Skriv din email"></Email>
            </div>
            <div className="signupForm__div">
            <label htmlFor="phone">Phone:</label>
            <PhoneInput className="signupForm__input" name="phone" placeholder="Skriv dit telefonnummer"></PhoneInput>
            </div>
            <div className="signupForm__div">
            <label htmlFor="birthday">Your birthdate</label>
            <input className="signupForm__input" name="birthday" placeholder="Skriv fødselsdag"></input>
            </div>
          
            {/* <Password  placeholder="password" name="password" minLength="3" ></Password> */}
            <input  className="signupForm__button" type="submit" value={"Add participant    +"}/>


        </form>
        </>
    )
}