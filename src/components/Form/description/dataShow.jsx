import React from 'react'

const dataShow = () => {
    const person = [{
        name:"Janvi",
        email:"janvi@gmail.com",
        phNo:91121232
    }]
    console.table(person)
  return (
    <div>

          {person.map(n =>(
            <p className='text-black'>{n.name}</p>
          ))}
      
    </div>
  )
}

export default dataShow
