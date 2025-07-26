import React, { useState } from 'react'
import dataShow from './description/dataShow';

const Form = () => {
    const [name, setName] = useState("");
    const [email,setEmail] = useState("");
    const submitForm =(e)=>{
        e.preventDefault();
        console.log(name, email);
    }

    const person = [{
        name: "Janvi",
        email: "janvi@gmail.com",
        phNo: 91121232
    }]
    console.table(person)
  return (
    <div>
        <h1>Entry form</h1>
        <form>

            <label htmlFor="" className='text-black'>Name</label>
              <input value={name} onChange={(e) => setName(e.target.value)} type="text" placeholder='Enter your name' />
              <label htmlFor="" className='text-black'>Email</label>
              <input value={email} onChange={(e) => setEmail(e.target.value)} type="text" placeholder='Enter your email' />
              <button onClick={submitForm} className='text-black border p-1 rounded-sm'>Submit form</button>

        </form>
          <dataShow />
      
    </div>
  )
}

export default Form
