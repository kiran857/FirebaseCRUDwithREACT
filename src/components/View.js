import React,{useState,useEffect} from "react";
import { useParams} from "react-router-dom";
import FireDb from "./Firebase";
import "./View.css"

const View=()=>{
    const [user,setUser]=useState({});
    const {id}=useParams();

    useEffect(()=>{
        FireDb.child("contacts").on("value",(snapshot)=>{
            if(snapshot.val() !==null){
                setUser({...snapshot.val()})
            }else{
                snapshot({})
            }
        });
    },[id]);

  return(
    <div className="container">

    {Object.keys(user).map((userId)=>{
        if(userId===id){
            return(
                <div className="card">
                    <div className="card-header">User Details</div><br/><br/>
                    <div className="card-body">
                        <p className="card-text">Name:{user[id].name}</p>
                        <p className="card-text">Email:{user[id].email}</p>
                        <p className="card-text">Contact:{user[id].contact}</p><br/>
                    
                    </div>
                </div>
            )
        }
    })}

    </div>
  )

}
export default View;