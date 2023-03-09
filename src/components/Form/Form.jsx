import React from 'react';
import './Form.scss';
import {Button} from '../Button';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

const nameRegExp = /^([A-Z]{1}[a-z]{1,23})$/

const schema = yup.object({
  name: yup.string().required("*This field is required").matches(nameRegExp, {message:'*Only Latin letters, start with a capital letter, no spaces or numbers', excludeEmptyString:true}),
  surname: yup.string().required("*This field is required").matches(nameRegExp, {message:'*Only Latin letters, start with a capital letter, no spaces or numbers', excludeEmptyString:true}),
  email: yup.string().email("*Invalid mail format").required("*This field is required"),
}).required();

export const Form = () => {
      const { register, handleSubmit, formState:{ errors } } = useForm({
        resolver: yupResolver(schema)
      });
      const onSubmit = data => console.log(data);
  return (
    <div id="form" className="form__container">
        <h1 className="form__title">DON’T FORGET TO SIGN UP</h1>
        <p className="form__description">Find out early about all upcoming promotions and new product releases with our newsletter</p>
        <form className="form__box">
            <div className="form__box-container"> 
                <div className="form__box-item">
                  <input 
                  {...register("name")} 
                  className={`form__box-input ${errors.name?.message && "error"}`}
                  type="text" 
                  placeholder='Enter your name.....'
                  />
                  <p className="form__block-error first">{errors.name?.message}</p>
                </div>
                <div className="form__box-item">
                  <input 
                    {...register("surname")} 
                    className={`form__box-input ${errors.surname?.message && "error"}`}
                    type="text"
                    placeholder='Enter your surname.....'
                  />
                  <p className="form__block-error second">{errors.surname?.message}</p>
                </div>
            </div>
            <div className="form__box-container"> 
              <input 
                {...register("email")} 
                className={`form__box-input ${errors.email?.message && "error"}`}
                type="text" placeholder='Enter your e-mail.....'
              />
              <p className="form__block-error">{errors.email?.message}</p>
            </div>
        </form>
        <Button onClick={handleSubmit(onSubmit)} text={"SUBSCRIBE"} />
    </div>
  )

}
