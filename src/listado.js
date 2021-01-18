import React from 'react'
import Items from './Items'



 function Listado (props) {
    return (
        <div>
           {
               props.Items.map(items => 
                  <Items

                  keys ={items.id}
                  id ={items.id}
                  
                  titulo = {items.titulo}
                  imagen = {items.imagen}
                  ranting = {items.ranting}
                
                

                  />
  
                  
                  
                  
                  
                  )
           }
    
        </div>
    );
  }
  
  export default Listado;
  