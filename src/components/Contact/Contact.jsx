import Button from "./Button";

const Contact = ({ name, phone, deleteMe }) => {
  return (
    <div className="contact-card">
      <div className="contact-details">
        <div className="contact-img">
          <img
            src="https://w7.pngwing.com/pngs/589/83/png-transparent-account-avatar-contact-people-profile-user-basic-icon.png"
            alt="png"
          />
        </div>
        <div className="contact-info">
          <span className="contact-title">{name}</span>
          <span className="contact-number">{phone}</span>
        </div>
      </div>
      <div className="contact-remove">
        <Button
          className={"remove-contact"}
          text={"Remove Contact"}
          onClick={deleteMe}
        />
      </div>
    </div>
  );
};

export default Contact;
