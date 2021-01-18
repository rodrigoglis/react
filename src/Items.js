import React  from 'react'

 class Items extends React.Component {


    constructor (props) {

        super(props)

        this.state = {

            start : []
        };
    };





   ComponentDidMount(){
      this.setState({


        start: Array(parseInt(this.props.ranting)).fill(0)

      });

    };

     render (){

    return (
        <div className ='item'>
            <div className='imagen'><img src={'img' + props.imagen}  width='400px'/></div>
            <div className='titulo'>{props.titulo}</div>
            <div className='ranting'></div>

            <p>

            </p>


            <select value='{props.ranting}'>
                <option value = '1'>1</option>
                <option value = '2'>2</option>
                <option value = '3'>3</option>
                <option value = '4'>4</option>
                <option value = '5'>5</option>
                <option value = '6'>6</option>


            </select>


            <div className='eliminar'>

                <button>Eliminar</button>


            </div>


        </div>

    
    )
    
 }

 
  
  export default  Items;