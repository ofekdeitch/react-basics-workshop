import React from 'react';
import dataview from '../static/dataview.json';
import Contact from './Contact';
import './style.css';

export function Contacts() {
    const { contacts } = dataview;

    return (
        <div>
            {
                contacts.map(contact => (
                    <Contact
                        username={contact.username}
                        image={contact.profileImage}
                        key={contact.userId}
                    />
                ))
            }
        </div>
    );
}

