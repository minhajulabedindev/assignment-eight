import React, { useEffect, useState } from 'react';
import Cart from '../cart/Cart';
import Member from '../Member/Member';
import './Oficer.css'

const Oficer = () => {
    const [members,setMembers]=useState([])
    const [cart, setCart]=useState([])
    useEffect(()=>{
        fetch('./officers.JSON')
        .then(res=>res.json())
        .then(data=>setMembers(data))
    },[])

    const handleAddToCart = (officer) => {
        const newCart = [...cart, officer]
        setCart(newCart)

    }
    return (
        <div className="ms-3 d-flex ">
           

           <div className=" col-9 member ">
              {
              members.map(member=><Member
                handleCart={handleAddToCart}
              key={member.key}
              member={member}></Member>)   
             }  
           </div>

           <div className='cart'>
                <Cart cart={cart}></Cart>
            </div>
            
        </div>

    );
};

export default Oficer;