import { useEffect, useState } from "react";

export default function Showtask({ TasksList, Completed, setTaskList }) {

    const [ListShow, setListShow] = useState([])
    useEffect(() => {

        let TL = [...TasksList];
        TL = TL.filter((u) => u.Completed === Completed);
        // console.log(TL)
        setListShow(TL);

    }, [TasksList, Completed])

    const Completedo = (e, u) => {

        u.Completed = e.target.checked;
        let Dt = [...TasksList];
        Dt = Dt.filter((v) => v.id !== u.id);
        Dt.push(u);
        // console.log(Dt)
        setTaskList(Dt);

    }

    const Delete = (e) => {
        let Dt = [...TasksList];
        setTaskList(Dt.filter((u) => u.id !== e));
    }

    return (
        <section>
            {ListShow.map((u) => <div key={u.id} className="Task D-Flex">
                <div className="D-Flex-C">
                    <h1>{u.Titulo}</h1>
                    <p>{u.Tarea}</p>
                </div>

                <div className="D-Flex-C">
                    {!Completed ? <label className="D-Flex-C">Completada
                        <input type={"checkbox"} onChange={(e) => Completedo(e, u)} />
                    </label> : null}
                    <button onClick={() => Delete(u.id)} className="Delete">BORAR</button>
                </div>

            </div>)}
        </section>
    );
}