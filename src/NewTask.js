import { useEffect, useState } from "react";

export default function NTask({ TasksList, setTaskList, setNewTask, NT,setCompleted }) {

    const [Task, setTask] = useState({ Titulo: "", Tarea: "" });

    useEffect(() => {

        if (TasksList.length !== 0) {

            let idValues = TasksList.map((u) => u.id);
            setTask({ id: Math.max(...idValues) + 1, Completed: false, Titulo: "", Tarea: "" });

        } else { setTask({ id: 1, Completed: false, Titulo: "", Tarea: "" }); }

    }, [TasksList, NT])

    const NewTask = ({ target: { name, value } }) => {
        setTask({ ...Task, [name]: value })
    }

    const Submit = (e) => {
        e.preventDefault();
        setTaskList([...TasksList, Task]);
        setNewTask(false);
        setCompleted(false);
    }

    return (
        <div>
            <form onSubmit={Submit} className='NTask' style={{ top: NT ? "5vh" : "-240px" }}>

                <input type={"text"}
                    value={Task.Titulo}
                    name="Titulo"
                    onChange={(e) => NewTask(e)}
                    required
                    placeholder="TITULO..."
                    className="ITask" />

                <textarea
                    value={Task.Tarea}
                    name="Tarea"
                    onChange={(e) => NewTask(e)}
                    required
                    className="ITask"
                    placeholder="TAREA...">
                </textarea>

                <input type={"submit"} value="GUARDAR" />

            </form>
        </div>
    );
}