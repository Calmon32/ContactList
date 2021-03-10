import './ContactList.scss';

function ContactList({ users, selectedUser, selectUser }) {
  return ( 
    <div className="listContainer">
      {users.map(user => {
        const select = () => selectUser(user);
        return <p className={selectedUser?.email === user.email ? 'selected' : ''} onClick={select} key={user.email}>{user.name}</p>
      })}
    </div>
   );
}
 
export default ContactList;