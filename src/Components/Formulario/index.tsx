import React from "react";
import Botao from "../Botao"
import './style.scss';

class Formulario extends React.Component {
    render(){
        return(
            <form className="novaTarefa">
                    <div className="inputContainer">
                        <label htmlFor="tarefa">
                            Adicione um novo estudo:
                        </label>
                        <input
                            onClick={()=>{console.log("adicionar estudo")}}
                            type="text" 
                            name="tarefa"
                            id="tarefa"
                            placeholder="O que vc quer estudar"
                            required
                            
                        />
                    </div>
                    <div  className="inputContainer">
                    <label htmlFor="tempo">
                        Tempo: 
                    </label>
                    <input
                        onClick={()=>{console.log("Adicionar ")}}
                        type="time"
                        name="tempo"
                        id="tempo"
                        step="1"
                        min="00:00:00"
                        max="23:30:00"
                        required
                        
                    />
                </div>
                <Botao/>
                
            </form>           
        
        )
    }
}



export default Formulario;

