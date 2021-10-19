import React from 'react';
import './Cart.css'

const Cart = (props) => {
    
    const { cart } = props

    console.log(props.cart)

    let names =[]
    let total = 0;
    for (const officer of cart) {
        total = total + officer.salary
        names=officer.name+',  '+names
        
    }
    console.log(names)
    return (
        <div className="ms-5">
            <div>
                h
                <h5>Programmers: {props.cart.length} </h5>
              <br />
                <p>Total salary:$ {total}</p>
                <hr/>
                <p >{names}</p>
                {/* {
                    cart.map(()=><li> {names}</li>)
                } */}
            </div>
           
        
        </div>
       
    );
};

export default Cart;