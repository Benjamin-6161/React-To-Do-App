import React, {useState, useEffect} from 'react';

function Todo(){
  
  const [tasks, setTasks] = useState(() => {
    const saved = localStorage.getItem("tasks");
    return saved ? JSON.parse(saved): []
  });
  
  useEffect(() => {localStorage.setItem("tasks", JSON.stringify(tasks));
    }, [tasks]);
  
  const [task, setTask] = useState("");
  
  function handleChange(event){
    setTask(event.target.value)
  }
  
  function handleAddTask(){

    if (task.trim() === ""){
      return;
    }
    setTasks(t => [...t, task]);
    setTask("");
  }
  
  function handleRemoveTask(index){
    let tasksList = tasks.filter((_, i) => i !== index);
    setTasks(tasksList);
  }
  
  function handleMoveUp(index){
    if (index > 0){
      const tasksList = [...tasks];
      [tasksList[index], tasksList[index -1]] = [tasksList[index-1], tasksList[index]];
      setTasks(tasksList);
    }
  }
  
  function handleMoveDown(index){
    if (index < [...tasks].length - 1){
      const tasksList = [...tasks];
      [tasksList[index], tasksList[index + 1]] = [tasksList[index + 1], tasksList[index]];
      setTasks(tasksList);
    }
    
  }
  
  return(
    <div >
      <h2>To - Do - List</h2>
      <input type="text" placeholder="Enter a task..." value={task} onChange={handleChange}></input>
      <button className="addBtn" onClick={handleAddTask}>Add</button>
      
      <ul>
        {tasks.map((task, index) => 
        <li key={index}>
          <span className="text">
            {task}
          </span>
          <button className="deleteBtn" onClick={() => handleRemoveTask(index)}>Delete</button>
          <button className="moveBtn" onClick={() => handleMoveUp(index)}>Up</button>
          <button className="moveBtn" onClick={() => handleMoveDown(index)}>Down</button>
        </li>)}
      </ul>
    </div>
    );
  
}

export default Todo;