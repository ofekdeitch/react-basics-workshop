import React from 'react';
import { Message } from './Message';
import './style.css';

export function Conversation({ conversation, recipientUsername }) {
    if (!conversation) {
        return (
            <h1>Select a Conversation</h1>
        )
    }

    const { messages } = conversation;

    return (
        <div>
            {
                messages.map(message => {
                    const isMyMessage = message.sender !== recipientUsername;
                    const classes = ['message-row']

                    if (isMyMessage) {
                        classes.push('own-message');
                    }

                    return (
                        <div className={classes.join(' ')}>
                            <Message key={message.id} message={message} />
                        </div>
                    )
                })
            }
        </div>
    );
}
