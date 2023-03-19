import React from 'react'
import {AiFillLinkedin} from 'react-icons/ai';
import {AiFillGithub} from 'react-icons/ai';
import {FaEnvelope} from 'react-icons/fa';
import {FaChevronDown} from 'react-icons/fa';
import ImgPerfil from './perfil.png'
import curriculo from './assets/curriculo.pdf'
import '../index.css';
import DownloadButton from './DownloadButton';

function Main() {
  const fileUrl = curriculo;
  const fileName = 'curriculo.pdf';
  return (
    <div className='divImg'>

        
        <div className='conteudo'>
            <img className="imgPerfil" src={ImgPerfil} alt='perfil'/>
            <p>Sou estudante.</p>
            <DownloadButton fileUrl={fileUrl} fileName={fileName} />
            <div className='icones'>
              <a href='https://www.linkedin.com/in/gabriela-lima-69a3a2b1/' target="_blank"> 
                <AiFillLinkedin style={{ color: "white"}} size={'8vh'}/>
              </a>
            
              <a href='https://github.com/GabrielaABLima' target="_blank">
                <AiFillGithub style={{ color: "white"}} size={'8vh'}/>
              </a>
              <a href='mailto:gabi02.lima@gmail.com'>
                <FaEnvelope style={{ color: "white"}} size={'7vh'}/>
              </a>
            </div>
            
        </div>
        <div className='seta'>
            <FaChevronDown style={{ color: "white", marginTop: '8vh', marginBottom: '2vh'}} size={'10vh'}/>
        </div>
    </div>
  )
}

export default Main
