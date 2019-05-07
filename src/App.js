import React from 'react';
import {render} from 'react-dom'; //new (7.5)
import ContactsList from './ContactsList';

let contacts = [{
  id: 1,
  name: 'Scott',
  phone: '555 333 5555'
}, {
  id: 2,
  name: 'Courtney',
  phone: '555 111 5555'
}, {
  id: 3,
  name: 'Tim',
  phone: '111 333 5555'
}, {
  id: 4,
  name: 'Jeff',
  phone: '555 333 1111'
}]

class App extends React.Component {
  render() {
   
    return (
      <div>
        <h1>Contacts List</h1>
        <ContactsList contacts={this.props.contacts}/>
      </div>
    )
  }
}

render(<App contacts={contacts} />, document.getElementById('app')); //altered (7.5)

// contacts={contacts}
// contacts is prop
// {contacts} is variable