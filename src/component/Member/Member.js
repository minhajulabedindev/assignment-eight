import React from 'react';
import './Member.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
// import { faFacebook } from '@fortawesome/free-solid-svg-icons'

const Member = (props) => {
    const{name, salary,position,img, age , country}=(props.member)
    return (
        <div >
            <div className="bg-success p-3 text-dark bg-opacity-25 m-1 rounded-3 border-5  height ">
                 <img className="w-75" src={img} alt=""/>
                 <div className="text-start">
                    <h5>Name: {name}</h5>
                    <h5>position:{position}</h5>
                    <h6>Age:{age}</h6>
                    <h6>Country:{country}</h6>
                    <h6>salary:${salary}</h6>  
 
                 </div>
              
                <button
                    onClick={() => props.handleCart(props.member)}
                    className='btn btn-primary rounded-3'>
                        {<FontAwesomeIcon className="tex" icon={faUser} />}  add to cart
                </button>
                <br/>
                <div className='fs-5'>
                    <i className="fab fa-facebook-messenger p-2 text-dark"></i> <i class="fab fa-github text-dark"></i> <i className="fab fa-twitter p-2 text-dark"></i> 
                </div>
                
            </div>
                
        </div>

    );
};

export default Member;