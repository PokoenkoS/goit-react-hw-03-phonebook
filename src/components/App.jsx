import React from "react";
import { Component } from "react";
import { nanoid } from 'nanoid'
import Form from "./Form";
import ContactList from "./ContactList";
import Filter from "./Filter";
import { MainDiv } from "./Main.styled";

export class App extends Component{

  state = {
    contacts: [],
    filter: ''
  }

formSubmitHendler = data =>{
 
if (this.dublicateContact(data)) {
  return alert (`${data.name}: ${data.number} already in contacts` )
}
  const contact = {
    id: nanoid(),
    ...data
  }
  
  this.setState(prevState => ({
    contacts:[contact, ...prevState.contacts]
  }))
}

dublicateContact = data => {
 return this.state.contacts.find(item => item.name ===data.name
   || item.number === data.number )
}

changeFilter = e => { 
  return  this.setState({filter: e.currentTarget.value})

  
};
getFilterContact =()=> {
  const normalizedFilter = this.state.filter.toLowerCase(); 
  return this.state.contacts.filter(contact => contact.name.toLowerCase().includes(normalizedFilter)
   || contact.number.toLowerCase().includes(normalizedFilter));
}

deleteContact = (id) => {
  this.setState(prevState=>({
    contacts: prevState.contacts.filter(item=> item.id !== id)
  }))
}


  render() {
    
    const visibleContact = this.getFilterContact();

    return (
      <MainDiv>
     <h1>Phonebook</h1>
     <Form onSubmit ={this.formSubmitHendler}/>
     <h2>Contacts</h2>
     <Filter value={this.state.filter} onChange={this.changeFilter}/>
     <ContactList contacts={visibleContact} onDeleteContact={this.deleteContact}/>
     </MainDiv>
    )
  }
}
  

