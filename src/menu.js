import React from 'react';
import Buscador from './buscador';



function Menu (props ) {
    return (
      <div className='contenedor'>
          <div className = 'sub-contenedor' >
              <div className='logo'>
                  <p>logo de la imagen</p>


              </div>
              <div className='buscador'>
                  <Buscador/ >

              </div>

              <div className='boton'>
                  <button type = 'submit'>buscar</button>


              </div>
        
            
          </div>
       </div>
    );
  }
  
  export default Menu;
  