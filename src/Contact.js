import React from 'react';
import {render} from 'react-dom';

// class Contact extends React.Component {
//   render() {
//     return (
//       <li>
//         {this.props.contact.name} {this.props.contact.phone}
//       </li>
//     )
//   }
// }

const Contact = ({contact}) =>
  <li>
    {contact.name} {contact.phone}
  </li>

export default Contact;