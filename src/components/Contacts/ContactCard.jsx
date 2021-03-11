import ContactField from './ContactField';
import { useAnimator } from '../Animator';
import closeIcon from '../../images/close.svg';
import './ContactCard.scss';

function ContactCard({ user, close }) {
  const { state, animate } = useAnimator(500)
  
  const closeCard = async () => {
    await animate(false)
    close()
  }

  return user ? ( 
    <div className={`drawerContainer ${state?'visible':'hidden'}`}>
      <div className="cardContainer">
        <button className="closeCardButton" onClick={closeCard}>
          <img src={closeIcon} alt="close"/>
        </button>
        <div className="header">
          <img className="profileImg" src={user.picture} alt=""/>
          <p>{user.name}</p>
        </div>
        <ContactField name="email" value={user.email}/>
        <ContactField name="phone" value={user.phone}/>
        <ContactField name="address" value={user.address}/>
      </div>
    </div>
   ) : null;
}
 
export default ContactCard;