import { useState } from 'react';
import TabSelector from './components/Tabs/TabSelector';
import ContactList from './components/List/ContactList';
import ContactCard from './components/Contacts/ContactCard';
import { useUsers } from './components/UserData';
import { configJson } from './service/config';
import './App.scss';

function App() {
  const { title, tabs, numberCards } = configJson;
  document.title = title;

  const [selectedUser, setSelectedUser] = useState(null);
  const [selectedTab, setSelectedTab] = useState(tabs[0]);

  const groupedUsers = useUsers({ tabs, numberCards });

  const deselectUser = () => setSelectedUser(null)

  return groupedUsers && (
    <div className="App">
      <TabSelector tabs={groupedUsers} selectedTab={selectedTab} selectTab={setSelectedTab} />
      <ContactList users={groupedUsers[selectedTab]} selectedUser={selectedUser} selectUser={setSelectedUser} />
      <div className="contactContainer">
        <h2>{title}</h2>
        {selectedUser && <ContactCard user={selectedUser} close={deselectUser}/>}
      </div>
    </div>
  )
}

export default App;