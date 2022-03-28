import React from 'react';
import "../App.css";

function Form (){
    return (
        <form>
            <div class="container app-background d-flex justify-content-center">
            <div id="todos">
                <div className="heading">
                    <h1>Add to do list</h1>
                    <div id="icon" className="d-flex justify-content-center">
                </div>
            </div>
            <div className="todo-card">
                <input type="text" class="todo" placeholder="Add task..." />
                <button className="addTodo btn btn-success">Add</button>
                <button className="removeTodo btn btn-danger">Remove</button>  
            </div>
         
            </div>
            </div>
        </form>

    )
};

export default Form; 
