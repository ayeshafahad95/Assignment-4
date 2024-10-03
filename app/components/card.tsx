import React from "react";

interface Invite{
    name:string,
    rollno:number,
    day:string | number,
    teachers:string

}

const Card=(props:Invite)=>{
    return (
        <div>
            <h1><strong>NAME   :</strong> {props.name}</h1>
            <h1><strong>ROLLNO :</strong> {props.rollno}</h1>
            <h1><strong>DAY-TIME:</strong> {props.day}</h1>
            <h1><strong>TEACHER : </strong>{props.teachers}</h1>
        </div>
    )
}


export default Card
