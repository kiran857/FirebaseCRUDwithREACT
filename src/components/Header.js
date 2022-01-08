import React,{useState} from 'react';
import {Link} from 'react-router-dom';
import "./header.css"

function Header() {
    const [activeTab, setActiveTab] = useState();
    return (
        <div className='header'>
        <p className='logo'> Contact App</p>
        <div className='header-right'>
            <Link to="/">
            <p className={`${ activeTab === "Home" ? "active" : ""}`}
              onClick={()=>setActiveTab("Home")}>
                Home
            </p>
            </Link>

            <Link to="/add">
                <p className={`${activeTab==="AddContact"? "active" : ""}`}
                 onClick={()=>setActiveTab("AddContact")}
                >
                        AddContact
                </p>

            </Link>
            <Link to="/about">
                <p className={`${activeTab==="about" ? "active" : ""}`} 
                onClick={()=>{setActiveTab("about")}}>About</p>
            </Link>
       
        </div>

            
        </div>
    )
}

export default Header;
