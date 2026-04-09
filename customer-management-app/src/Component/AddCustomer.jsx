import React, { useEffect, useState } from 'react'
import Customer from '../models/Customer';
function AddCustomer({customers, setCustomers}) {
    const [customer, setCustomer] = useState(new Customer(0, '', ''));
    
    const handleChange=(e)=> {
        const {name, value} = e.target
        setCustomer({...customer, [name]:value})
    }

    useEffect(()=> {
        console.log(customers)
    },[customers])

    const addCustomer=(event)=> {
        event.preventDefault();
        setCustomers([...customers, new Customer(Number(customer.id), customer.name, customer.city)])

      

    }

  return (
    <>

    <div className='constainer-fluid'>
        <div className='card p-4 shadow'>
            <h2 className='mb-3'>AddCustomer</h2>
            <form onSubmit={addCustomer}> 

                <div className='mb-2'>
                    <label className='form-label'>Customer Id</label>
                    <input type="text" 
                     name='id'
                     className='form-control'
                     value={customer.id}
                     onChange={handleChange}
                     />
                </div>

                <div className='mb-2'>
                    <label className='form-label'>Customer Name</label>
                    <input type="text" 
                     name='name'
                     className='form-control'
                     value={customer.name}
                     onChange={handleChange}
                     />
                </div>

                <div className='mb-2'>
                    <label className='form-label'>Customer City</label>
                    <input type="text" 
                     name='city'
                     className='form-control'
                     value={customer.city}
                     onChange={handleChange}
                     />
                </div>

                <button className='btn btn-primary'>click here to submit</button>

            </form>

        </div>
    </div>


    </>
  )
}

export default AddCustomer
