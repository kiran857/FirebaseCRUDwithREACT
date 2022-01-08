import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import fireDb from "./Firebase";
import "./Home.css"

const Home = () => {
    const [data, setData] = useState({});

    useEffect(() => {
        fireDb.child("contacts").on("value", (snapshot) => {
            if (snapshot.val() !== null) {
                setData({...snapshot.val()});
            } else {
                setData({})
            }
          })
        return () => {
            setData({})
        }
     }, [])

const onDelete=(id)=>{
    if(window.confirm("are you sure that you want to delete that contact?"));
    {
        fireDb.child(`contacts/${id}`).remove((err)=>{
            if(err){
                toast.error(err);
            }else{
                toast.success("contact deleted successfully")
            }
        })
    }
    
       
    

    
}

    return (
        <div>
            <table>
            <thead>
            <tr>
                <th>No</th>
                <th>Name</th>
                <th>Email</th>
                <th>Contact</th>
                <th>Action</th>
                </tr>

            </thead>
            <tbody>
                {Object.keys(data).map((id,index)=>{
                    return(
                        <tr key={id}>
                            <th scope="row">{index+1}</th>
                            <td>{data[id].name}</td>
                            <td>{data[id].email}</td>
                            <td>{data[id].contact}</td>
                            <td>
                                <Link to={`/update/${id}`}>
                                <button>Edit</button>
                                </Link>
                                <Link to={`/view/${id}`}>
                                <button className="button2">View</button>

                                </Link>
                                <button 
                                className="button3"
                                onClick={()=>onDelete(id)}
                                >Delete</button>

                            </td>
                        
                        </tr>
                    )
                })}
            </tbody>
                

            </table>
        </div>
    )
}
export default Home;