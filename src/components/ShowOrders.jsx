import { useEffect, useState } from "react"
import { FaRegTrashCan } from "react-icons/fa6";
import "../styles/components/showOrders.scss"

export default function ShowOrders({update}){
   let person = update.update
  const [updates, setUpdates] = useState(update.update)

  
    const [data, setData] = useState([])
   

    useEffect(()=>{
         person = JSON.parse(localStorage.getItem("person"))
        setData(person)
        
        
    }, [])

    
    return(
        <section>
            <p>Your participants</p>
            <h2> participant</h2>
            {console.log("her er data " + data)}
            <button>Submit</button>
            {data?.map(element => {
                return(
                    <section className="person">   
                   {console.log(element)}
                        <div className="person__div">
                    <h3 className="person__heading">{element?.name}</h3>
                    <FaRegTrashCan className="person__text" />


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
            
        </section>
    )
}