import React from 'react';
import { useForm} from 'react-hook-form';
import './Delivery.css';
import {useAuth} from '../Login/useAuth';
const Delivery = () => {

    const { register, handleSubmit, watch, errors } = useForm()
    const onSubmit = (data,e) => { console.log(data); e.target.reset();}
    const auth = useAuth();

    return (
        <form className="ship-form" onSubmit={handleSubmit(onSubmit)}>  

        <input name="name" defaultValue={auth.user.name} ref={register({ required: true }) } placeholder="name"/>        
        {        
            errors.name && <span className="error">Name is required</span>
        }
        <input name="email" defaultValue={auth.user.email} ref={register({ required: true }) } placeholder="email"/>        
        {        
            errors.email && <span className="error">Email is required</span>
        }
        
        <input name="addressLine1" ref={register({ required: true }) } placeholder="address"/>        
        {errors.addressLine1 && <span className="error">Address is required</span>}
        <input name="addressLine2" ref={register} placeholder="address"/>        
        <input name="city" ref={register({ required: true })} placeholder="city" />          
        {errors.city && <span className="error">City is required</span>}
        <input name="country" ref={register({ required: true })} placeholder="country"/>        
        {errors.country && <span className="error">Country is required</span>}
        <input name="zipcode" ref={register({ required: true }) } placeholder="zip code"/>        
        {errors.zipcode && <span className="error">Zipcode is required</span>}
        <input type="submit" />
      </form>
    );
};

export default Delivery;