import React from 'react';
import {useHistory} from 'react-router-dom';
import './submit.css';
const Submit = () => {
    let history=useHistory();
  return (
    <div className='submit-form'>
    <label> Full Name:</label>
     <input type="text"  placeholder='Enter your first Number'/>
     <label>Email id:</label>
     <input type="email" placeholder='Enter your Emails' />
      <button  onClick={()=>{
        history.push("/currency")
      }}>Submit</button>

    </div>
  )
}

export default Submit;