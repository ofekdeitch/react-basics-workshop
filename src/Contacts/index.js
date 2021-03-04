import React from 'react';
import Contact from './Contact';
import './style.css';

export function Contacts({ contacts, onContactSelect, currentContactUsername }) {

    return (
        <div>
            {
                contacts.map(contact => (
                    <Contact
                        current={contact.username === currentContactUsername}
                        username={contact.username}
                        image={contact.profileImage}
                        onClick={() => onContactSelect(contact.username)}
                        key={contact.userId}
                    />
                ))
            }
        </div>
    );
}

