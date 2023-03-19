import React from 'react'


export default class FormacaoCard extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div className='card'>
                <h2>{this.props.instituicao}</h2>
                <h3>{this.props.titulo}</h3>
                <p>{this.props.descricao}</p>
            </div>

        )
    }
}