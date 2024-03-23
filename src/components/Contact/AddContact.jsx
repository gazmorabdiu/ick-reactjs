import Button from "./Button";

const AddContact = ({
  saveContact,
  showNameError,
  showPhoneError,
  onChange,
  newValues,
}) => {
  return (
    <div className="add-contact-form">
      <div>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={newValues.name}
          onChange={(e) => onChange(e)}
        />
        {showNameError && <span>Name is required!</span>}
      </div>

      <div>
        <input
          type="text"
          name="phone"
          placeholder="Phone Number"
          value={newValues.phone}
          onChange={(e) => onChange(e)}
        />
        {showPhoneError && <span>Phone is required!</span>}
      </div>

      <Button
        onClick={saveContact}
        text={"Save Contact"}
        className={"save-contact"}
      />
    </div>
  );
};

export default AddContact;
