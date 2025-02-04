import Header from "./Header.jsx"
import React, { useEffect, useState } from 'react'
import {useLocation, useNavigate, useParams} from 'react-router-dom'
import {useForm} from 'react-hook-form'

    export default function tripUpdate(){

    const navigate = useNavigate();
    const { id } = useParams();
    const [trip, setTrip] = useState({
        id: "",
        name: "",
        destination: "",
        budget: 0,
    })

    useEffect(()=>{

        const fetchTrip = async ()=>{
            try{
               const response = await fetch("http://localhost:8080/trips/ID/" + id,{

                                                                                                  headers:{"Content-Type":"application/json",
                                                                                                  Authorization: 'Bearer ' + localStorage.getItem('token')}
                                                                                              }).then(res=>res.json()).then((result)=>{setTrip(result);})
            }
            catch(error){
                console.log(error);
            }
        }
            fetchTrip();
            console.log(trip);
    }, []);

    const updateTrip = (e)=>{
        e.preventDefault();
        fetch("http://localhost:8080/trips/update/" + id, {
            method: "PUT",
            headers:{"Content-Type":"application/json",
            Authorization: 'Bearer ' + localStorage.getItem('token')},
            body:JSON.stringify(trip)
        }).then((response)=>{
            navigate('/trips');
        }).catch((error)=>{
            console.log(error);
        })
    }

    const handleChange = (e)=>{
        const value = e.target.value;
        setTrip({...trip, [e.target.name]: value});
    }

    return(
    <>

        <h2>Update Trip {id}</h2>

        <form method="PUT">

            <label for="name">Trip Name</label><br />
            <input type="text" name="name" value={trip.name} id="name" onChange = {(e)=>handleChange(e)}/><br />

            <label for="destination">Destination</label><br />
            <input type="text" name="destination" value={trip.destination} id="destination" onChange = {(e)=>handleChange(e)}/><br />

            <label for="budget">Budget</label><br />
            <input type="text" name="budget" value={trip.budget} id="budget" onChange = {(e)=>handleChange(e)}/><br />

            <br /><input type="submit" value="Update Trip!" onClick={updateTrip}/>

        </form>
    </>)
    }