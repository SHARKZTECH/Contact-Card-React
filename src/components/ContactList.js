import React from "react"
import ContactCard from "./ContactCard";
import {Link} from "react-router-dom";

function ContactList(props) {

  const deleteContactHandler=(id)=>{
    props.getContactId(id);
  }
  const renderContactList=props.contacts.map((contact)=>{
    return(
      <ContactCard 
      key={contact.id} 
      contact={contact} 
      clickHandler={deleteContactHandler}/>
    );
  })
  return (
    <div className="main">
     <Link to="/add" 
     className="ui blue button">ADD CONTACT</Link>       
   <div className="ui celled list">
   {renderContactList}
    </div>
    </div>
  );
}

export default ContactList;