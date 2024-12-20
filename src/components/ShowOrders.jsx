import { useEffect, useRef, useState } from "react"
import { FaRegTrashCan } from "react-icons/fa6";
import "../styles/components/showOrders.scss"
import { Link } from "react-router";

export default function ShowOrders({update}){
   
  const [person, setPerson] = useState(update.update)
  const thisElement = useRef("")
  
    const [data, setData] = useState(update.update)
   

    useEffect(()=>{
        
       
        
        
    }, [])
    useEffect(()=>{
         setPerson(update.update)
         setPerson(JSON.parse(localStorage.getItem("person")))
       
        
        
    }, [update])


    function removeItem(name){
        const storage = JSON.parse(localStorage.getItem("person"))
       let newArray = storage.filter(element => {
            console.log(element.name)
            if(element.name == name){
                const index = storage
                return
            }else{
                return element
            }
        });
        console.log(newArray)
        localStorage.setItem("person", JSON.stringify(newArray))
        setPerson(JSON.parse(localStorage.getItem("person")))
    
    }
    
    return(
        <section className="allPersons">
            <p>Your participants</p>
            <h2> participant</h2>
            {console.log("her er data " + data)}
            
            {person?.map(element => {
                return(
                    <section ref={thisElement} key={element.name} className="person">   
                   {}
                        <div className="person__div">
                    <h3 className="person__heading">{element?.name}</h3>
                    <FaRegTrashCan onClick={()=>{
                        console.log(thisElement.current)
                        removeItem(element.name)
                    }} className="person__text" />


                    </div>
                    <div className="person__div">
                        <p className="person__text">Birthdate</p><p className="person__text">{element.birthday}</p>
                    </div>
                    <div className="person__div">
                        <p className="person__text">Email</p><p className="person__text">{element.email}</p>
                        
                    </div>
                    <div className="person__div">
                        <p className="person__text">Phonel</p><p className="person__text">{element.phone}</p>
                        
                    </div>
                    </section>
                )
                
            })}
            <Link className="person__submit" to="">Submit</Link>
        </section>
    )
}