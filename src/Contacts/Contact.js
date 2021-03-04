import React from 'react';
import PropTypes from 'prop-types';

function Contact({ username, image, onClick, current }) {
    const classes = ["contact"];

    if (current) {
        classes.push('active');
    }

    return (
        <div className={classes.join(' ')} onClick={onClick}>
            <img src={image} />
            {username}
        </div>
    );
}

Contact.propTypes = {
};

export default Contact;
