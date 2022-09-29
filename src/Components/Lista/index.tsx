import React from "react"
import "./style.scss";

function Lista() {
    const tarefas = [
        {tarefa: 'React', tempo:'02:00:00'},
        {tarefa:'Javascript',tempo:'01:00:00'},
        {tarefa:'TypeScript', tempo: '03:00:00'}
]
return(
   
    <aside className="listaTarefas">
        <h2 className="h2"> Estudos do Dia </h2>
        <ul className="ul">
            {tarefas.map((item,index) => (
                <li key={index} className="item">
                    <h3 className="h3"> {item.tarefa}  </h3>
                    <span className="span"> {item.tempo}  </span>
                </li>
            ))}
            </ul>
    </aside>
)
}
export default Lista;


