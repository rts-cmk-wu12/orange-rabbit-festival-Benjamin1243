import { SlCalender } from "react-icons/sl";
import { CiMap } from "react-icons/ci";
import Signup from "../components/Form";
import ShowOrders from "../components/ShowOrders";
import { useState } from "react";


export default function Index(){
    const [update, setUpdate] = useState([])
    return(
        <div className="events">
        <section className="event">
            <div className="event__imageDiv">
            <img  className="event__image" src="src/images/danny-howe-bn-D2bCvpik-unsplash1.png" alt="" />
            </div>
            <div className="event__orderDiv"><p className="event__">SIGN UP FOR THE EVENT</p>
            <h2 className="event__heading">Orange Rabbit Festival 2023</h2> 
            <p className="event__text">< SlCalender className="event__logo" />24 June 2025 – 1 July 2025 </p>
            <p  className="event__text"><CiMap className="event__logo"/>Bunny Avenue 22, 2300, Rabbitkilde</p>
            <Signup update={{update, setUpdate}}></Signup>
            </div>
        </section>
        <section className="participant">
           
            <ShowOrders update={{update, setUpdate}}></ShowOrders>
        </section>
        </div>
    )
}