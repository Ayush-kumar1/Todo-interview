import React from 'react'
import "./Task.css";


function Task({title,des,img,date}) {


    return (
        <div>
            
        <div className="task-container">
        <button  className="delete-btn">Delete</button>
            <img className="task-img" src={img} alt="" />

            <div className="task-holder" >
                 <h2>{title}</h2>
                 <h4>{des}</h4>
            </div>

            <h3 className="task-date">Date-{date}</h3>
        </div>
        </div>
    )
}

export default Task
