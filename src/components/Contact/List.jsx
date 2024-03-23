import Contact from "./Contact";

const List = ({ contacts, deleteMe }) => {
  return (
    <div className="contact-list">
      {contacts.map(({ id, name, phone }) => (
        <Contact
          key={id}
          name={name}
          phone={phone}
          deleteMe={() => deleteMe(id)}
        />
      ))}
    </div>
  );
};

export default List;
