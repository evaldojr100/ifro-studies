import React from 'react';
import './style.scss';
import Formulario from '../Formulario';

class Botao extends React.Component {
    render(){
        return(
            <button type="button" className='botao' onClick={() =>{console.log("clicou no Botão")}}>
                Cadastrar
            </button>
        )
    }  
}


 
export default Botao;