import React, { useContext } from 'react';
import PropTypes from "prop-types";
import ContactContext from "../../context/contact/contactContext";

const ContactItem = ({ contact }) => {
  const contactContext = useContext(ContactContext);
  const { deleteContact, setCurrent, clearCurrent } = contactContext;

  const { id, name, email, phone, type } = contact;

  const onDelete = () => {
    deleteContact(id);
    clearCurrent();
  }

  return (
    <div className="card bg-light">
      <h3 className="text-primary text-left">
        {/* If contact type is equal to 'professional', then the class will be 'badge-success', else the class will be 'badge-primary' */}
        {name}{" "}
        <span style={{ float: "right" }}
          className={
            "badge " +
            (type === "professional" ? "badge-success" : "badge-primary")
          }
        >
          {type.charAt(0).toUpperCase() + type.slice(1)}
        </span>
      </h3>
      <ul className="list">
        {/* If there's an email, then output an <li> with their email */}
        {email && (<li>
          <i className="fas fa-envelope-open"/> {email}
        </li>)}
        {phone && (<li>
          <i className="fas fa-phone"/> {phone}
        </li>)}
      </ul>
      <p>
        <button className="btn btn-dark btn-sm" onClick={() => setCurrent(contact)}>Edit</button>
        <button className="btn btn-danger btn-sm" onClick={onDelete}>Delete</button>
      </p>
    </div>
  )
}

ContactItem.propTypes = {
  contact: PropTypes.object.isRequired
}

export default ContactItem