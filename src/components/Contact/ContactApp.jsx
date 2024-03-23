import { useEffect, useState } from "react";
import AddContact from "./AddContact";
import Button from "./Button";
import List from "./List";
import Search from "./Search";
import "./contacts.css";
import { ContactDataSet } from "../data/ContactDataSet";
const ContactApp = () => {
  const contact = { name: "", phone: "" };
  const [contacts, setContacts] = useState(ContactDataSet);
  const [filteredContacts, setFilteredContact] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const [showAddContact, setShowAddContact] = useState(false);
  const [newContact, setNewContact] = useState(contact);
  const [showNameError, setShowNameError] = useState(false);
  const [showPhoneError, setShowPhoneError] = useState(false);

  useEffect(() => {
    newContact.name === "" ? setShowNameError(true) : setShowNameError(false);
    newContact.phone === ""
      ? setShowPhoneError(true)
      : setShowPhoneError(false);
  }, [newContact]);

  const handleAddContact = () => {
    setShowAddContact(true);
  };
  const handleSaveContact = () => {
    if (!showNameError && !showPhoneError) {
      const id = Math.floor(Math.random() * 3000) * 3000;
      setContacts((prev) => [...prev, { ...newContact, id }]);
      setNewContact(contact);
      setShowAddContact(false);
    }
  };

  const handleOnChange = (e) => {
    setNewContact((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };
  const handleDeleteContact = (position) => {
    console.log(filteredContacts);
    const filterContact = contacts.filter(({ id }) => id !== position);
    setContacts(filterContact);
  };

  const handleSearch = (e) => {
    const { value } = e.target;
    setSearchTerm(value);
    const searchValue = value.toLowerCase();

    const filteredContacts = contacts.filter(
      (contact) =>
        contact.name.toLowerCase().includes(searchValue) ||
        contact.phone.toLowerCase().includes(searchValue)
    );
    setFilteredContact(filteredContacts);
  };

  const filterContacts =
    filteredContacts.length === 0 || searchTerm === ""
      ? contacts
      : filteredContacts;

  return (
    <div className="contact-container">
      {!showAddContact && (
        <div className="contact-header">
          <Search value={searchTerm} onSearch={handleSearch} />
          <Button
            className={"add-contact"}
            text={"Add Contact"}
            onClick={handleAddContact}
          />
        </div>
      )}
      <div>
        {showAddContact && (
          <AddContact
            saveContact={handleSaveContact}
            showNameError={showNameError}
            showPhoneError={showPhoneError}
            onChange={handleOnChange}
            newValues={newContact}
          />
        )}
      </div>

      <List contacts={filterContacts} deleteMe={handleDeleteContact} />
    </div>
  );
};

export default ContactApp;
