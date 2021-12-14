import React from "react"


function ContactCard({contact,clickHandler}) {
  return (
    <div className="ui celled list">
        <div className="ui segment" >
        <div className="content">
          <div className="header">{contact.name}</div>
          <div>{contact.email}</div>
          <i style={{color:"red" ,float:"right"}} class="trash alternate outline icon"
          onClick={()=>clickHandler(contact.id)}
          ></i>
          </div>
      </div>
  </div>
  );
}

export default ContactCard;