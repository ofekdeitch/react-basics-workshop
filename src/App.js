import Header from './Header';
import { Contacts } from './Contacts';
import { Conversation } from './Conversation';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="header-container">
        <Header />
      </div>
      <div className="content">
        <div className="contacts-container">
          <Contacts />
        </div>
        <div className="conversation-container">
          <Conversation />
        </div>
      </div>
    </div>
  );
}

export default App;
