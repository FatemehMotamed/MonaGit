import React, { useState } from 'react'
import styles from './Contacts.module.css'
import ContactList from './ContactList'
import inputs from '../constants/inputs'
import { v4 } from 'uuid'

const Contacts= () => {
  const [contacts, setContacts] = useState([])
  const [errors, setErrors] = useState(false)
  const data = {
    id:'',
    name:'',
    last_name:'',
    email:'',
    phone:'',
  }
  const [form, setForm ] = useState(data); 

  const changeHandler = (event)  =>{
    const value= event.target.value
    const name= event.target.name
    setForm((form) => ({...form, [name]:value }))
    // setForm({...form, [name]:value })
  }
  const submitHandler= (event)=>{
    if (!form.name || !form.last_name || !form.email || !form.phone){
      setErrors(true)
    }
    else{
      const newContact = {...form, id: v4()}
      setContacts((contacts)=>([...contacts, newContact]))
      console.log(contacts);
          }
    event.preventDefault()
    
  }
  const removeHandler = (id)=>{
    const data = contacts.filter((item)=> item.id != id)
    setContacts(data)
  }

  return (
      <>
        <form onSubmit={submitHandler} className={styles.container} >
         {
          inputs.map((input,index)=> (<input key={index} type={input.type} placeholder={input.placeholder} name={input.name} value={form[input.name]} className={styles.inputBox}  onChange={changeHandler}  />
          ))
         }

           

          <button className={styles.btn}>Add Contact</button>
        </form>

        <div className={errors ? styles.error : styles.errorHide}>Please Enter valid data</div>

         <ContactList contacts= {contacts} removeHandler = {removeHandler} />
  
      </>



  )
}

export default Contacts