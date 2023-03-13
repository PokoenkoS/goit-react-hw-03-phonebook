import React from "react";
import { Component } from "react";
import { nanoid } from 'nanoid'
import { Button, FormDiv, FormLabel } from "./Main.styled";



 class Form extends Component{
state = {
    name: '',
    number: ''
}

name = nanoid();
number = nanoid();

handeleChange = e =>{
    const {name, value} = e.currentTarget
    this.setState({[name]: value});
   };

  handeleSubmite = e =>{
    e.preventDefault();
    this.props.onSubmit(this.state);
    this.reset();
  }
reset = ()=> {
    this.setState({name: '',
    number: ''})
}

render() {
    const {name, number} = this.state
    return(
        <FormDiv onSubmit={this.handeleSubmite}
        >
        <FormLabel>Name
       <input
       type="text"
       name="name"
       id={this.name}
       value={name}
       onChange={this.handeleChange}
       pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
       title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
       required
     /> 
     </FormLabel>
     <FormLabel> Number
         <input
       type="tel"
       name="number"
       id={this.number}
       value={number}
       onChange={this.handeleChange}
       pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
       title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
       required
       /></FormLabel>
     <Button type="submit">Add contact</Button>  
      
       </FormDiv>
       
    
)
}}


export default Form;