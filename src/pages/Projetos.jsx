import React from 'react'
import ProjetoCard from './ProjetoCard'
import imgIcone1 from './assets/weatherApp.png'
import imgIcone2 from './assets/recipe.png'
import imgIcone3 from './assets/parking.png'
import imgIcone4 from './assets/contato.png'

function Projetos() {
  return (
    <div className='fundoProjetos'>
        <h1>Projetos</h1>
        <div className='projetos'>
        
            <ProjetoCard 
                urlImg={imgIcone1}
                titulo="Weather App"
                linguagem="JavaScript"
                descricao="Aplicação Web desenvolvida utilizando JavaScript para checar a temperatura e 
                o clima de cidades. A aplicação utiliza API OpenWeather e foi desenvolvida seguindo o 
                tutorial do AsmrProg."
                link="https://github.com/GabrielaABLima/weatherApp"
            />
            <ProjetoCard 
                urlImg={imgIcone2}
                titulo="Yummyy"
                linguagem="React"
                descricao="Aplicação Web desenvolvida utilizando JavaScript para checar a temperatura e 
                o clima de cidades. A aplicação utiliza API OpenWeather e foi desenvolvida seguindo o 
                tutorial do AsmrProg."
                link="https://github.com/GabrielaABLima/recipeApp"
            />
            <ProjetoCard 
                urlImg={imgIcone3}
                titulo="Reserva Estacionamento"
                linguagem="Java para Web"
                descricao="Aplicação Web desenvolvida em Java com utilização de um banco de dados para armazenar 
                o login, as vagas disponíveis e os automóveis. O banco de dados 
                é integrado à aplicação por meio de uma interface CRUD."
                link="https://github.com/GabrielaABLima/ProjetoEstacionamento"
            />
            <ProjetoCard 
                urlImg={imgIcone4}
                titulo="App Agenda Celular"
                linguagem="Android Studio"
                descricao="Aplicação móvel de uma agenda de contatos desenvolvida no Android Studio
                com banco de dados para armazenar foto de perfil, nome e telefone. 
                A aplicação conta com CRUD para alterar, excluir e adicionar novos contatos."
                link="https://github.com/GabrielaABLima/AndroidAgendaContatos"
            />
        </div>
    </div>
  )
}

export default Projetos