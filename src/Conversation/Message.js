import React from 'react';

export function Message({ message }) {
    return (
        <div className="message-body">
            {message.body}
        </div>
    )
}