import ContactItem from "./ContactItem"
import styles from "./ContactList.module.css"
const ContactList = ({contacts, removeHandler}) => {

  if (!contacts){
    return <div > please wait ...</div>
  }

    return (
    <>

    {
      contacts.length ?
      contacts.map((contact)=>(<ContactItem  contact={contact} key={contact.id} removeHandler={removeHandler} />))
      :
      (<p>no contact yet</p>)
    }
    

    </>
  )
}

export default ContactList