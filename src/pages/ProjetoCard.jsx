import React from 'react'
import {AiFillGithub} from 'react-icons/ai';


export default class ProjetoCard extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div className='projectCard'>
                <div className='divImagem'>
                    <img src={this.props.urlImg} alt="teste"/>
                </div>
                <h2>{this.props.titulo}</h2>
                <h3>{this.props.linguagem}</h3>
                <p>{this.props.descricao}</p>
                <a href={this.props.link} target="_blank">
                    <AiFillGithub style={{ color: "black"}} size={'3vw'}/>
                </a>
                
            </div>

        )
    }
}