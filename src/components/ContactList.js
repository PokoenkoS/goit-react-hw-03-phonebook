import React from "react";
import PropTypes from 'prop-types'

const ContactList =({contacts, onDeleteContact})=> {
return(
    <div>
    
    <ul>
    {contacts.map((contact) =>{return (
    <li key={contact.id}>
    {contact.name}:{contact.number}
    <button type="submit" onClick={()=>onDeleteContact(contact.id)}> Delete</button>
    </li>
    )
    })}
    </ul>
  </div> 
)
};
ContactList.prototype = {
  contacts: PropTypes.array,
}

export default ContactList;
  

