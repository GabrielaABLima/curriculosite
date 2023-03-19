import React from 'react'
import { Fade } from 'react-reveal';

function Habilidades() {
  return (
    <div className='fundoHabilidades'>
        <h1>Habilidades</h1>
        <div className='habilidade'>
          
            <div className='fundoCompleto'>
              <p className='titulo'>Java</p>
              <Fade left>
                <div className='fundoPreenchido' style={{width: '33vw'}}></div>
              </Fade>
            </div>
          
          
          <div className='fundoCompleto'>
            <p className='titulo'>HTML/CSS</p>
            <Fade left>
                <div className='fundoPreenchido' style={{width: '35vw'}}></div>
            </Fade>
          </div>

          <div className='fundoCompleto'>
            <p className='titulo'>JavaScript</p>
            <Fade left>
                <div className='fundoPreenchido' style={{width: '30vw'}}></div>
            </Fade>
          </div>

          <div className='fundoCompleto'>
            <p className='titulo'>React</p>
            <Fade left>
                <div className='fundoPreenchido' style={{width: '25vw'}}></div>
              </Fade>
          </div>

          <div className='fundoCompleto'>
            <p className='titulo'>SQL</p>
            <Fade left>
                <div className='fundoPreenchido' style={{width: '34vw'}}></div>
              </Fade>
          </div>

          <div className='fundoCompleto'>
            <p className='titulo'>Python</p>
            <Fade left>
                <div className='fundoPreenchido' style={{width: '30vw'}}></div>
              </Fade>
          </div>

          <div className='fundoCompleto'>
            <p className='titulo'>Android Studio</p>
            <Fade left>
                <div className='fundoPreenchido' style={{width: '34vw'}}></div>
              </Fade>
          </div>
        </div>
        
        
    </div>
  )
}

export default Habilidades