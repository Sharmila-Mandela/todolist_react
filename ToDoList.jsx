import React,{useState} from 'react'
function ToDoList(){

    const [newTask,setNewTask]=useState("");
    const[tasks,setTasks]=useState([]);
    
    function handleInputChange(event){
setNewTask(event.target.value);
    }
    function addTask(){
        if(newTask.trim()!==""){
            setTasks(t =>[...t,newTask]);
            setNewTask("");
        }

    }
    function deleteTask(index){
        const updatedTasks=tasks.filter((_,i) => i !== index);
        setTasks(updatedTasks);

    }
    function  moveTaskUp(index){
        if(index >0){
            const updatedTasks=[...tasks];
            [updatedTasks[index],updatedTasks[index-1]]=[updatedTasks[index-1],updatedTasks[index]];
            setTasks(updatedTasks);
        }

    }
    function moveTaskDown(index){
        if(index < tasks.length-1){
            const updatedTasks=[...tasks];
            [updatedTasks[index],updatedTasks[index+1]]=[updatedTasks[index+1],updatedTasks[index]];
            setTasks(updatedTasks);
        }


    }
    return(<div className='to-do-list'>
        <h1>ToDo-List  App </h1>
        <div >
            <label for="enter"></label>
            <input  id="enter" type="text"
            placeholder='enter a  Task..'
            value={newTask}
            onChange={handleInputChange}/>
            <button className='add-button'
            onClick={addTask}>Add</button>
        </div>
        <ol>
            {tasks.map((task,index) => 
            <li key={index}>
                <span className='text'> {task} </span>
                <button className='delete-button'
                onClick={() => deleteTask(index)}>Delete </button>
                <button className='move-button'
                onClick={() => moveTaskUp(index)}>Up </button>
                 <button className='move-button'
                onClick={() => moveTaskDown(index)}>Down </button>
              </li>
)}
        </ol> 
    </div>);

}
export default ToDoList