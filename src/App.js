import React, { useState } from 'react';
import './App.css';
import NTask from './NewTask';
import Showtask from './ShowTask';

function App() {

  const [NewTask, setNewTask] = useState(false);
  const [TasksList, setTaskList] = useState([]);
  const [Completed, setCompleted] = useState(false);

  const PressCompletedButton=()=>{
    setCompleted(!Completed)
    setNewTask(false)
  }

  return (
    <main>
      <section className='Main'>
        <div className='Menu-bts '>

          <button onClick={() => setNewTask(!NewTask)}
            style={{ backgroundColor: NewTask ? "red" : "lightgreen" }}>
            {NewTask ? "Cancelar" : "+ Nueva Tarea"}
          </button>

          <button
            onClick={PressCompletedButton }
            style={{ backgroundColor: Completed ? "lightskyblue" : "Highlight" }}>
            {Completed ? "Ver Tareas por completar" : "Ver Tareas completadas"}
          </button>

          <NTask setTaskList={setTaskList} TasksList={TasksList} setNewTask={setNewTask} NT={NewTask} SC={setCompleted}/>

        </div>
        <div>

          <Showtask TasksList={TasksList} Completed={Completed} setTaskList={setTaskList} />

        </div>
      </section>
    </main>
  );
}

export default App;