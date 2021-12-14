import React,{useState,useEffect} from "react"
import './App.css';

import Header from "./Header"
import AddContacts from "./AddContacts"
import ContactList from "./ContactList"

import {uuid} from "uuidv4";

function App() {
  const LOCAL_STORAGE_KEY="contacts";
const [contacts,setContacts]=useState([]);

const addContactsHandler=(contact)=>{
  setContacts([...contacts,{id:uuid(),...contact}])
}
const removeContactHadler=(id)=>{
  const newContactList=contacts.filter((contact)=>{
    return contact.id !==id;
  });
  setContacts(newContactList)
  
}
useEffect(()=>{
  const retrivedContacts=JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
   retrivedContacts && setContacts(retrivedContacts)
},[]);
useEffect(()=>{
     localStorage.setItem(LOCAL_STORAGE_KEY,JSON.stringify(contacts));
},[contacts]);

  return (
    <div className="ui container">
      <Header/>
    
     <AddContacts addContactsHandler={addContactsHandler} />
    <ContactList contacts={contacts} getContactId={removeContactHadler}/>

    
        
    </div>
  );
}

export default App;
