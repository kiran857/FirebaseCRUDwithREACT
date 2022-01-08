import React, { useState,useEffect } from "react";
import { toast } from "react-toastify";
import { useNavigate, useParams } from "react-router-dom";
import fireDb from "./Firebase"
import "./AddEdit.css"




const AddEdit = () => {

    //Initial no contact in the DB
    const initialState = {
        name: "",
        email: "",
        contact: "",
    }

    const [state, setState] = useState(initialState);

    //use data and setdata when update contact
    const [data, setData] = useState({});

    //Assign Initail  value to state
    const { name, email, contact } = state;

    //navigate the Path
    const navigate = useNavigate();

//when you get id at that time you can update the conatct
    const {id} =useParams();

    //copy the data from db
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
     }, [id]);

        //edit the page
        useEffect(() => {
            if(id){
                setState({...data[id]})
            }else{
                setState({...initialState})
            }
            return () => {
                setState({...initialState})
            
            }
        }, [id,data])

    const handleChange = (e) => {
        let { name, value } = e.target;
        setState({
            ...state,
            [name]: value,
        });

    };
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!name || !email || !contact) {
            toast.error("please provide value for each input");

        } else {
            if(!id){
                fireDb.child("contacts").push(state, (err) => {
                    if (err) {
                        toast.error(err);
                    } else {
                        console.log("add successfully contact")
                        toast.success("conatact added successfully");
                    }
                });
               
            }else{
                fireDb.child(`contacts/${id}`).set(state, (err) => {
                    if (err) {
                        toast.error(err);
                    } else {
                       
                        toast.success("conatact Update successfully");
                    }
                });
               
            }
            setTimeout(() => navigate("/"), 500);
        }
    };

  

    return (
        <div className="container">
            <form onSubmit={handleSubmit}>

                <label htmlFor="name">Name</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="your Name"
                    value={name || ""}
                    onChange={handleChange}
                />
                <label htmlFor="email">Email</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="your Email"
                    value={email || ""}
                    onChange={handleChange}
                />

                <label htmlFor="contact">Contact</label>
                <input
                    type="number"
                    id="contact"
                    name="contact"
                    placeholder="your Contact"
                    value={contact || ""}
                    onChange={handleChange}
                />
                <input type="submit" value={id?"Update":"Save"}></input>
            </form>
        </div>
    )
}
export default AddEdit