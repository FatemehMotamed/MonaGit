import styles from './ContactItem.module.css'


const ContactItem = ({ contact: { id, name, last_name, email, phone } , removeHandler }) => {
  // const remove = ()=>{
  //   removeHandler(id)
  // }

  return (
    <>
      <p className={styles.name}>{name} {last_name}</p>
      <div className={styles.item}><img src='/email.svg' width="10%" /><p>{email}</p></div>
      <div className={styles.item}><img src='/phone.svg' width="10%" /><p>{phone}</p></div>
      <div ><img src='/delete.svg' width="10%" onClick={()=>removeHandler(id)} /></div>
      {/* <div ><img src='/delete.svg' width="10%" onClick={remove} /></div> */}

    </>

  )
}

export default ContactItem