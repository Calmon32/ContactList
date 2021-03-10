import './ContactField.scss';

function ContactField({ name, value }) {
  return ( 
    <div className="fieldContainer">
      <h5>{name}</h5>
      <p>{value}</p>
    </div>
   );
}
 
export default ContactField;