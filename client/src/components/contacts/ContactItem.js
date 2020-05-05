import React from 'react';
import PropTypes from "prop-types";

const ContactItem = ({ contact }) => {

  const { id, name, email, phone, type } = contact;

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
        <button className="btn btn-dark btn-sm">
          Edit
        </button>
        <button className="btn btn-danger btn-sm">
          Delete
        </button>
      </p>
    </div>
  )
}

ContactItem.propTypes = {
  contact: PropTypes.object.isRequired
}

export default ContactItem