import React,{useState,useEffect} from "react"
import './App.css';
import {BrowserRouter as Router,Route,Routes} from "react-router-dom"

import Header from "./Header"
import AddContacts from "./AddContacts"
import ContactList from "./ContactList"
import ConctactDetail from "./ConctactDetail";

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
      <Router>
      <Header/>
    <Routes>
    <Route path="/Contact-Card-React/" exact element={<ContactList contacts={contacts} getContactId={removeContactHadler}/> } />
    <Route path="/Contact-Card-React/add" element={<AddContacts addContactsHandler={addContactsHandler} />} />
    <Route path="/Contact-Card-React/contact/:id" element={<ConctactDetail/>}/>
    </Routes>
     {/* <AddContacts addContactsHandler={addContactsHandler} />
    <ContactList contacts={contacts} getContactId={removeContactHadler}/> */}

    </Router>
        
    </div>
  );
}

export default App;
