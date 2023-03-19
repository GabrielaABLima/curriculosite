import React from 'react'
import FormacaoCard from './FormacaoCard.jsx'

function FormacaoAcademica() {
  return (
    <div className='fundoForm'>
        <h1>Formação Acadêmica</h1>
        <div className='formacoesTempo'>

        
          <div className='formDireita'>
            <FormacaoCard 
            instituicao="IFSP - Instituto Federal de São Paulo"
            titulo="BACHARELADO EM CIÊNCIA DA COMPUTAÇÃO"
            descricao="Média notas: 9,33 - Foco do estudo em Desenvolvimento Web e de Aplicações"
            />
            <FormacaoCard/>
            <FormacaoCard 
            instituicao="Siele"
            titulo="Certificado de Califación Siele"
            descricao="Certificado de proficiência em Espanhol"
            />
            <FormacaoCard/>
            <FormacaoCard 
            instituicao="IPB - Instituto Politécnico de Bragança"
            titulo="GRADUAÇÃO SANDUÍCHE"
            descricao="Mobilidade internacional com duração de um semestre realizado durante a graduação"
            />
          </div>
          
          <div className='linhaMeio'></div>

          <div className='formEsquerda'>
          <FormacaoCard/>
            <FormacaoCard 
            instituicao="Cambridge"
            titulo="FCE - First Certificate in English"
            descricao="Certificado de proficiência em Inglês"
            />
            <FormacaoCard/>
            <FormacaoCard 
            instituicao="IFSP - Instituto Federal de São Paulo"
            titulo="CURSO DE EXTENSÃO"
            descricao="Introdução a Inteligência Artificial para tomada de decisões"
            />
            <FormacaoCard/>
            <FormacaoCard 
            instituicao="IPB - Instituto Politécnico de Bragança"
            titulo="Disciplina Extra"
            descricao="Internet das Coisas"
            />
          </div>
      </div>
    </div>
  )
}

export default FormacaoAcademica