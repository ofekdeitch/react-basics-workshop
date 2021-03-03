import React from 'react';
import PropTypes from 'prop-types';

function Contact({ username, image }) {
    return (
        <div className="contact">
            <img src={image} />
            {username}
        </div>
    );
}

Contact.propTypes = {
};

export default Contact;
