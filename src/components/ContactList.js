import React from "react"
import ContactCard from "./ContactCard";

function ContactList({contacts,getContactId}) {
  const deleteContactHandler=(id)=>{
     getContactId(id);
  }
  const renderContactList=contacts.map((contact)=>{
    return(
      <ContactCard key={contact.id} contact={contact} clickHandler={deleteContactHandler}/>
    );
  })
  return (
   <div className="ui celled list">
   {renderContactList}
    </div>
  );
}

export default ContactList;