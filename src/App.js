// import logo from './logo.svg';
import React from 'react';
import './App.css';
import Menu from "./menu";
import Listado from "./listado";

class App extends React.Component {
  
  constructor(props) {
    super(props);

    this.state = {

      Libros:[

        {id:1 , ranting: 42 , titulo: 'aiosjdiaojda' , imagen: '' },
        {id:2 , ranting: 34, titulo: 'aiosjdiaojda' , imagen: '' },
        {id:3 , ranting: 76 , titulo: 'aiosjdiaojda' , imagen: '' },
        {id:4 , ranting: 45 , titulo: 'aiosjdiaojda' , imagen: '' },
        {id:5 , ranting: 67, titulo: 'aiosjdiaojda' , imagen: '' },

        {id:6 , ranting: 4 , titulo: 'aiosjdiaojda' , imagen: '' },
        {id:7 , ranting: 42 , titulo: 'aiosjdiaojda' , imagen: '' },
        {id:8 , ranting: 432 , titulo: 'aiosjdiaojda' , imagen: '' },
        {id:9 , ranting: 54 , titulo: 'aiosjdiaojda' , imagen: '' },
        {id:10 , ranting: 65 , titulo: 'aiosjdiaojda' , imagen: '' }






      ]

    };
    
  }
  
  
  
  
  
  
  render(){
  
    return(
    <div clasName = 'app'>
       
       <Menu/ >
       <Listado Items = {this.state.Libros}/ >


    </div>
  );

    }
}

export default App;
