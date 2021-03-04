import React from 'react';
import Header from './Header';
import { Contacts } from './Contacts';
import dataview from './static/dataview.json';
import { Conversation } from './Conversation';
import './App.css';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      currentRecipientUsername: null
    };

    this.onContactSelect = this.onContactSelect.bind(this);
  }

  onContactSelect(recipientUsername) {
    this.setState({
      currentRecipientUsername: recipientUsername
    });
  }

  getCurrentConversation() {
    const { conversations } = dataview;
    const { currentRecipientUsername } = this.state;

    if (!currentRecipientUsername) {
      return null;
    }

    return conversations[currentRecipientUsername];
  }

  render() {
    const { contacts } = dataview;
    const { currentRecipientUsername } = this.state;
    const currentConversation = this.getCurrentConversation();

    return (
      <div className="App">
        <div className="header-container">
          <Header />
        </div>
        <div className="content">
          <div className="contacts-container">
            <Contacts
              contacts={contacts}
              onContactSelect={this.onContactSelect}
              currentContactUsername={currentRecipientUsername}
            />
          </div>
          <div className="conversation-container">
            <Conversation
              conversation={currentConversation}
              recipientUsername={currentRecipientUsername}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
