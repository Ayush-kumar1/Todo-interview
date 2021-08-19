import React, { useState } from 'react';
import "./Todo.css";
import Task from '../../Components/Task/Task';

function Todo() {
    const[title,setTitle]=useState("")
    const[des,setDes]=useState("");
    const[img,setImg]=useState("");
    const[date,setDate]=useState("");
    const[task,setTask]=useState([])

    function handleSubmit(){
        setTask((task)=>[...task,{title:title,description:des,image:img,date:date}])
        setTitle("");
        setDes("");
        setDate("");
        setImg("")

        
    }

    console.log(task);

    function handleDelete(t){
      let newarr=task.filter((elem)=>{
          return elem.title!==t;
      } )

      setTask(newarr);
    }

    return (
        <div>
            <h1>Todo App</h1>
            <h1>Title</h1>
            <input onChange={(e)=>setTitle(e.target.value)} />

            <h1>Description</h1>
            <input onChange={(e)=>setDes(e.target.value)} />

            <h1>Image</h1>
            <input onChange={(e)=>setImg(e.target.value)}/>

            <h1>Date</h1>
            <input type="date" onChange={(e)=>setDate(e.target.value)}/>
            <br />
            <br />
            <button onClick={handleSubmit}>Submit</button>

            {/* {
                task.map((elem)=>
                 
                 <Task title={elem.title} des={elem.description} img={elem.image} date={elem.date} />
                )
            } */}

            {
                task.map(elem=>{
                    return(
                        <div className="task-container">
        <button onClick={()=>handleDelete(elem.title)}  className="delete-btn">Delete</button>
            <img className="task-img" src={elem.img} alt="" />

            <div className="task-holder" >
                 <h2>{elem.title}</h2>
                 <h4>{elem.des}</h4>
            </div>

            <h3 className="task-date">Date-{elem.date}</h3>
        </div>
                    )
                })
            }
             

        </div>
    )
}

export default Todo
